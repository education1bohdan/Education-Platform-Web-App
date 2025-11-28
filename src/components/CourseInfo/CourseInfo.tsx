import { Link } from "react-router-dom";
import Button from "../../common/Button/Button";
import { BACK_TEXT } from "../../constants";
import "./CourseInfo.scss";
import getCourseDuration from "../../helpers/getCourseDuration";
import { Props } from "../Courses/components/CourseCard/CourseCard";

const CourseInfo: React.FC<Props> = ({ id, title, description, creationDate, duration, authors }) => {
    const durationText: string = getCourseDuration(duration);
    const [firstPart, secondPart] = durationText.split(' ');

    return (
        <div className='main-content'>
            <div className="course-info">
                <h1>{title}</h1>
                <div className="course-info-container">
                    <h2>Description:</h2>
                    <div className="course-info-content">
                        <div className="left-side">
                            <p>{description}</p>
                        </div>
                        <div className="right-side">
                            <div className="division-line"></div>
                            <ul className="courses-info-labels">
                                <li><b>ID:</b></li>
                                <li><b>Duration:</b></li>
                                <li><b>Created:</b></li>
                                <li><b>Authors:</b></li>
                            </ul>
                            <ul className="courses-info-details">
                                <li>{id}</li>
                                <li><b>{firstPart}</b> {secondPart}</li>
                                <li>{creationDate}</li>
                                <li>{authors}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Link to="/"><Button buttonText={BACK_TEXT} buttonWidth="185px" /></Link>
            </div>
        </div>

    );
}

export default CourseInfo;
