import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import formatCreationDate from '../../helpers/formatCreationDate';
import getCourseDuration from '../../helpers/getCourseDuration';
import getAuthorsNames from '../../helpers/getAuthorsNames';
import SearchBar from './components/SearchBar/SearchBar';
import Button from '../../common/Button/Button';
import EmptyCourseList from '../EmptyCourseList/EmptyCourseList';
import { ADD_NEW_COURSE_TEXT, Course, Author } from '../../constants';
import styles from './Courses.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getAuthors, getCourses } from '@/selectors/selectors';
import { setAuthors } from '@/store/authors/authorsSlice';
import { setCourses } from '@/store/courses/coursesSlice';
import { fetchCourses, fetchAuthors } from "../../services/services"

const Courses: React.FC = () => {
    const dispatch = useDispatch();
    const coursesList: Course[] = useSelector(getCourses);
    const authorsList: Author[] = useSelector(getAuthors);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>('');

    // Filtering courses list

    const displayedCourses = searchQuery.length > 0
        ? coursesList.filter(
            (course) =>
                course.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                course.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : coursesList;

    // Fetching courses data

    useEffect(() => {
        if (coursesList.length > 0) {
            setIsLoading(false);
            return
        }

        async function loadData() {
            try {
                if (coursesList.length === 0) {
                    const fetchedCourses = await fetchCourses();
                    dispatch(setCourses(fetchedCourses.result));
                }
                if (authorsList.length === 0) {
                    const fetchedAuthors = await fetchAuthors();
                    dispatch(setAuthors(fetchedAuthors.result));
                }

            } catch (error) {
                console.log(error);
                setError('Something went wrong...');
            } finally {
                setIsLoading(false);
            }
        }
        loadData();
    }, [])

    // Search query setter

    const filterCourses = (searchingWord: string): void => {
        setSearchQuery(searchingWord);
    }

    const coursesListClasses = `${styles['courses-list']} ${displayedCourses.length === 0 && styles.searchError}`;

    if (coursesList.length === 0 && !isLoading && !error) {
        return <EmptyCourseList />
    }

    return (
        <div className='main-content'>
            <div className={styles["courses-action-container"]}>
                <SearchBar filterCourses={filterCourses} />
                <Link to='/courses/add'><Button buttonText={ADD_NEW_COURSE_TEXT} buttonWidth={'183px'} /></Link>
            </div>
            <ul className={coursesListClasses}>
                {isLoading || error ? <h1>{isLoading ? 'Loading...' : error}</h1>
                    : (searchQuery && displayedCourses.length === 0 ?
                        <h1>No results...</h1>
                        : displayedCourses.map(({ id, title, description, creationDate, duration, authors }, index) => {
                            return (
                                <li key={id || index}>
                                    <CourseCard
                                        id={id}
                                        title={title}
                                        description={description}
                                        creationDate={formatCreationDate(creationDate)}
                                        duration={getCourseDuration(duration)}
                                        authors={getAuthorsNames(authors, authorsList)}
                                    />
                                </li>
                            )
                        }))}
            </ul>
        </div >
    )
}

export default Courses;
