import Button from "../../common/Button/Button";
import CourseCard from "../Courses/components/CourseCard/CourseCard";
import { BACK_TEXT } from "../../constants";
import "./CourseInfo.scss";
import { Props } from "../Courses/components/CourseCard/CourseCard";

const CourseInfo: React.FC<Props> = ({ title, description, creationDate, duration, authors }) => {
    let backClicked: Boolean = false;
    function backHandler(): void {
        backClicked = true;
    }

    return (
        <div className='main-content'>
            {backClicked ?
                <CourseCard title={title}
                    description={description}
                    creationDate={creationDate}
                    duration={duration}
                    authors={authors} />
                : <div className="course-info">
                    <h1>{title}</h1>
                    <div className="course-info-content">
                        <div className="left-side">
                            <h2>Description:</h2>
                            <p></p>
                        </div>
                        <div className="division-line"></div>
                        <div className="right-side"></div>
                    </div>
                    <Button buttonText={BACK_TEXT} clickHandler={backHandler} buttonWidth="185px" />
                </div>}
        </div>

    );
}

export default CourseInfo;
