import CourseCard from './components/CourseCard/CourseCard';
import { mockedCoursesList, mockedAuthorsList } from "../../constants";
import formatCreationDate from '../helpers/formatCreationDate';
import getCourseDuration from "../helpers/getCourseDuration";
import './Courses.scss';

const Courses: React.FC = () => {
    return (
        <div className='main-content'>
            <div className='course-card-list'>
                {mockedCoursesList.map(({ id, title, description, creationDate, duration, authors }) => {
                    const authourNames: string[] = authors
                        .map(authorId => mockedAuthorsList.find((author) => author.id === authorId)?.name).filter(Boolean)
                        .filter((name): name is string => name !== undefined);

                    return (
                        <CourseCard
                            key={id}
                            title={title}
                            description={description}
                            creationDate={formatCreationDate(creationDate)}
                            duration={getCourseDuration(duration)}
                            authors={authourNames.join(", ")}
                        />)
                })}
            </div>
        </div>
    )
}

export default Courses;
