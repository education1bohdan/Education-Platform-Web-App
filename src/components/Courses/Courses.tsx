import { Link } from 'react-router-dom';
import { useState } from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import formatCreationDate from '../../helpers/formatCreationDate';
import getCourseDuration from '../../helpers/getCourseDuration';
import getAuthorsNames from '../../helpers/getAuthorsNames';
import SearchBar from './components/SearchBar/SearchBar';
import Button from '../../common/Button/Button';
import { ADD_NEW_COURSE_TEXT } from '../../constants';
import styles from './Courses.module.scss';
export interface Course {
    id: string;
    title: string;
    description: string;
    creationDate: string;
    duration: number;
    authors: string[];
}

export interface Authors {
    id: string;
    name: string;
}
export interface Props {
    coursesList: Course[];
    authorsList: Authors[];
}



const Courses: React.FC<Props> = ({ coursesList, authorsList }) => {
    const [courses, setCourses] = useState<Course[]>(coursesList);

    const filterCourses = (isSearching: boolean = false, courses: Course[] = []): void => {
        const filteredCoursesArray: Course[] = courses;
        isSearching ? setCourses(filteredCoursesArray) : setCourses(coursesList);
    }

    const coursesListClasses = `${styles['courses-list']} ${courses.length === 0 && styles.searchError}`

    return (
        <div className='main-content'>
            <div className={styles["courses-action-container"]}>
                <SearchBar filterCourses={filterCourses} coursesList={coursesList} />
                <Link to='/create-course'><Button buttonText={ADD_NEW_COURSE_TEXT} buttonWidth={'183px'} /></Link>
            </div>
            <ul className={coursesListClasses}>
                {courses.length === 0 ?
                    <h1>No results...</h1>
                    : courses.map(({ id, title, description, creationDate, duration, authors }, index) => {
                        const authorNames: string[] = getAuthorsNames(authors, authorsList);

                        return (
                            <li key={id || index}>
                                <CourseCard
                                    id={id}
                                    title={title}
                                    description={description}
                                    creationDate={formatCreationDate(creationDate)}
                                    duration={getCourseDuration(duration)}
                                    authors={authorNames.join(", ")}
                                />
                            </li>
                        )
                    })}
            </ul>
        </div >
    )
}

export default Courses;
