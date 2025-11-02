import Button from '../../../../common/Button/Button';
import { SHOW_COURSE_TEXT } from '../../../../constants';
import "./CourseCard.scss";

export interface Props {
    id?: string;
    title: string;
    description: string;
    creationDate: string;
    duration: string;
    authors: string;
}

const CourseCard: React.FC<Props> = ({ title = "Course Title", description = "Course Description", creationDate = "01.01.2025", duration = "01:00 hour", authors = "name2, name3" }) => {

    function handleClick(): void {

    }

    return (<div className="course-card">
        <div className="side-line"></div>
        <h2>Course Title</h2>
        <div className="course-container">
            <div className="left-side">
                <p>Course Description</p>
            </div>
            <div className="right-side">
                <ul className='course-info-list'>
                    <li><b>Authors: </b>name2, name3</li>
                    <li><b>Duration: </b>01:00 hour</li>
                    <li><b>Created: </b>01.01.2025</li>
                </ul>

                <Button buttonText={SHOW_COURSE_TEXT} clickHandler={handleClick} buttonWidth={'180px'} />
            </div>
        </div>
    </div>);
}

export default CourseCard;
