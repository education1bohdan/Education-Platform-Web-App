import Button from "../../common/Button/Button";
import { BACK_TEXT } from "../../constants";
import "./CourseInfo.scss";
import { Props } from "../Courses/components/CourseCard/CourseCard";

const CourseInfo: React.FC<Props> = ({ id = "df32994e-b23d-497c-9e4d-84e4dc02882f", title = "Course 1", description = "Course 1 description", creationDate = "01/01/2025", duration = "60", authors = "Vasiliy Dobkin, Nicolas Kim" }) => {
    const durationText: string = duration;
    const [firstPart, secondPart] = durationText.split(' ');

    function backHandler(): void {

    }

    return (
        <div className='main-content'>
            <div className="course-info">
                <h1>Course 1</h1>
                <div className="course-info-container">
                    <h2>Description:</h2>
                    <div className="course-info-content">
                        <div className="left-side">
                            <p>Course 1 description</p>
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
                                <li>df32994e-b23d-497c-9e4d-84e4dc02882f</li>
                                <li>60</li>
                                <li>01/01/2025</li>
                                <li>Vasiliy Dobkin, Nicolas Kim</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Button buttonText={BACK_TEXT} clickHandler={backHandler} buttonWidth="185px" />
            </div>
        </div>

    );
}

export default CourseInfo;
