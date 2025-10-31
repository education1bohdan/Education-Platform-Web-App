import Button from "../../common/Button/Button";
import { BACK_TEXT } from "../../constants";
import "./CourseInfo.scss";


interface Props {

}

const CourseInfo: React.FC<Props> = () => {

    function backHandler(): void {

    }

    return (
        <div className='main-content'>
            <div className="course-info">
                <h1>JavaScript</h1>
                <div className="course-info-content">
                    <div className="left-side">
                        <h2>Decription:</h2>

                    </div>
                    <div className="division-line"></div>
                    <div className="right-side"></div>
                </div>
                <Button buttonText={BACK_TEXT} clickHandler={backHandler} buttonWidth="185px" />
            </div>
        </div>

    );
}

export default CourseInfo;
