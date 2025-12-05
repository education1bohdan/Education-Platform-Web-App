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

export interface DisplayedData {
    isSearching: boolean;
    displayedCourses: Course[];
}

const Courses: React.FC = () => {
    const dispatch = useDispatch();
    const coursesList: Course[] = useSelector(getCourses);
    const authorsList: Author[] = useSelector(getAuthors);
    // const [realCoursesList, setRealCoursesList] = useState<Course[]>(coursesList);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [displayedData, setDisplayedData] = useState<DisplayedData>({ isSearching: false, displayedCourses: coursesList });
    // const [displayingCourses, setDisplayingCourses] = useState<Course[]>(coursesList)

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
                    // setRealCoursesList(fetchedCourses.result);
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

    const filterCourses = (filteredCoursesData: DisplayedData): void => {
        // isSearching ? setSearchedData({ isSearching: isSearching, searchedCourses: courses }) : setSearchedData({ isSearching: isSearching, searchedCourses: [] });
        setDisplayedData(filteredCoursesData);
    }

    const coursesListClasses = `${styles['courses-list']} ${coursesList.length === 0 && styles.searchError}`;

    if (coursesList.length === 0 && !isLoading && !error) {
        return <EmptyCourseList />
    }

    return (
        <div className='main-content'>
            <div className={styles["courses-action-container"]}>
                <SearchBar filterCourses={filterCourses} coursesList={coursesList} />
                <Link to='/courses/add'><Button buttonText={ADD_NEW_COURSE_TEXT} buttonWidth={'183px'} /></Link>
            </div>
            <ul className={coursesListClasses}>
                {isLoading || error ? <h1>{isLoading ? 'Loading...' : error}</h1>
                    : (displayedData.isSearching && displayedData.displayedCourses.length === 0 ?
                        <h1>No results...</h1>
                        : displayedData.displayedCourses.map(({ id, title, description, creationDate, duration, authors }, index) => {
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
