import CourseCard from './components/CourseCard/CourseCard';
import { mockedCoursesList, mockedAuthorsList } from "../../constants"
import formatCreationDate from '../helpers/formatCreationDate';
import getCourseDuration from "../helpers/getCourseDuration";
import './Courses.scss';


const Courses: React.FC = () => {
    return (
        <div className='main-content'>
            <div className='course-card-list'>
                { }

                <CourseCard />
            </div>
        </div>
    )
}

export default Courses;
