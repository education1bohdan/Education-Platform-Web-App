import Button from '../../../../common/Button/Button';
import { SHOW_COURSE_TEXT } from '../../../../constants';
import "./CourseCard.scss";

interface Props {
    title: string;
    description: string;
    creationDate: string;
    duration: string;
    authors: string;
}

const CourseCard: React.FC<Props> = ({ title, description, creationDate, duration, authors }) => {

    function handleClick(): void {

    }

    return (
        <div className="course-card">
            <div className="side-line"></div>
            <h2>{title}</h2>
            <div className="course-container">
                <div className="left-side">
                    <p>{description}</p>
                </div>
                <div className="right-side">
                    <ul className='course-info-list'>
                        <li><b>Authors: </b>{authors}</li>
                        <li><b>Duration: </b>{duration}</li>
                        <li><b>Created: </b>{creationDate}</li>
                    </ul>

                    <Button buttonText={SHOW_COURSE_TEXT} onClick={handleClick} />
                </div>
            </div>

        </div>
    );
}

export default CourseCard;
