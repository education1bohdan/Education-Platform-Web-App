import Button from '../../../../common/Button/Button';
import CourseInfo from '../../../CourseInfo/CourseInfo';
import { SHOW_COURSE_TEXT } from '../../../../constants';
import "./CourseCard.scss";

export interface Props {
    title: string;
    description: string;
    creationDate: string;
    duration: string;
    authors: string;
}

const CourseCard: React.FC<Props> = ({ title, description, creationDate, duration, authors }) => {
    let showCourseClicked: Boolean = true;
    function handleClick() {
        showCourseClicked = false;
        if (showCourseClicked) {
            return (<CourseInfo title={title}
                description={description}
                creationDate={creationDate}
                duration={duration}
                authors={authors} />)
        } else {
            return (<div className="course-card">
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

                        <Button buttonText={SHOW_COURSE_TEXT} clickHandler={handleClick} buttonWidth={'180px'} />
                    </div>
                </div>
            </div>)
        }
    }

    return (handleClick());
}

export default CourseCard;
