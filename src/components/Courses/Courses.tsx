import CourseCard from './components/CourseCard/CourseCard';
import formatCreationDate from '../../helpers/formatCreationDate';
import getCourseDuration from '../../helpers/getCourseDuration';
import getAuthorsNames from '../../helpers/getAuthorsNames';
import SearchBar from './components/SearchBar/SearchBar';
import Button from '../../common/Button/Button';
import { ADD_NEW_COURSE_TEXT } from '../../constants';
import './Courses.scss';
import { Link } from 'react-router-dom';
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

    function addNewCourseHandler(): void {

    }

    return (
        <div className='main-content'>
            <div className="courses-action-container">
                <SearchBar />
                <Link to='/create-course'><Button buttonText={ADD_NEW_COURSE_TEXT} clickHandler={addNewCourseHandler} buttonWidth={'183px'} /></Link>
            </div>
            <ul className='courses-list'>
                {coursesList.map(({ id, title, description, creationDate, duration, authors }, index) => {
                    const authorNames: string[] = getAuthorsNames(authors, authorsList);

                    return (
                        <li key={id || index}>
                            <CourseCard
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
        </div>
    )
}

export default Courses;
