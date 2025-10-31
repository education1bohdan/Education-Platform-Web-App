import CourseCard from './components/CourseCard/CourseCard';
import formatCreationDate from '../helpers/formatCreationDate';
import getCourseDuration from "../helpers/getCourseDuration";
import getAuthorsNames from '../helpers/getAuthorsNames';
import './Courses.scss';

interface Courses {
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
interface Props {
    coursesList: Courses[];
    authorsList: Authors[];
}

const Courses: React.FC<Props> = ({ coursesList, authorsList }) => {
    return (
        <div className='main-content'>
            <ul className='courses-list'>
                {coursesList.map(({ id, title, description, creationDate, duration, authors }, index) => {
                    const authourNames: string[] = getAuthorsNames(authors, authorsList)

                    return (
                        <li key={id || index}>
                            <CourseCard
                                title={title}
                                description={description}
                                creationDate={formatCreationDate(creationDate)}
                                duration={getCourseDuration(duration)}
                                authors={authourNames.join(", ")}
                            />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Courses;
