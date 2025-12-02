import { Link, useParams } from "react-router-dom";
import Button from "../../common/Button/Button";
import { Course, Authors } from "../Courses/Courses";
import formatCreationDate from "../../helpers/formatCreationDate";
import getCourseDuration from "../../helpers/getCourseDuration";
import getAuthorsNames from "../../helpers/getAuthorsNames";
import { BACK_TEXT } from "../../constants";
import styles from "./CourseInfo.module.scss";


interface Props {
    coursesList: Course[];
    authorsList: Authors[];
}

const CourseInfo: React.FC<Props> = ({ coursesList, authorsList }) => {
    const { courseId } = useParams();
    const course: Course | undefined = coursesList.find(c => c.id === courseId);
    if (!course) {
        return (
            <div className={"main-content " + styles.notFound}>
                <h1>Course Not Found</h1>
            </div>
        )
    } else {
        const { id, title, description, creationDate, duration, authors } = course;
        const durationText: string = getCourseDuration(duration);
        const [firstPart, secondPart] = durationText.split(' ');

        return (
            <div className='main-content'>
                <div className={styles.courseInfo}>
                    <h1>{title}</h1>
                    <div className={styles.courseInfoContainer}>
                        <h2>Description:</h2>
                        <div className={styles.courseInfoContent}>
                            <div className={styles.leftSide}>
                                <p>{description}</p>
                            </div>
                            <div className={styles.rightSide}>
                                <div className={styles.divisionLine}></div>
                                <ul className={styles.coursesInfoLabels}>
                                    <li><strong>ID:</strong></li>
                                    <li><strong>Duration:</strong></li>
                                    <li><strong>Created:</strong></li>
                                    <li><strong>Authors:</strong></li>
                                </ul>
                                <ul className={styles.coursesInfoDetails}>
                                    <li>{id}</li>
                                    <li><strong>{firstPart}</strong> {secondPart}</li>
                                    <li>{formatCreationDate(creationDate)}</li>
                                    <li>{getAuthorsNames(authors, authorsList)}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <Link to="/courses"><Button buttonText={BACK_TEXT} buttonWidth="185px" /></Link>
                </div>
            </div>

        );
    }
}

export default CourseInfo;
