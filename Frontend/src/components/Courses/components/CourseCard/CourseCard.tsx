import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from '../../../../common/Button/Button';
import pencil from '../../../../assets/pencil.svg';
import trashBin from '../../../../assets/trash-bin2.svg';
import { Course, SHOW_COURSE_TEXT } from '../../../../constants';
import { deleteCourse, updateCourse } from '@/store/courses/coursesSlice';
import styles from "./CourseCard.module.scss";
import { addAuthor } from '@/store/authors/authorsSlice';

export interface Props {
    id: string;
    title: string;
    description: string;
    creationDate: string;
    duration: string;
    authors: string;
}

const CourseCard: React.FC<Props> = ({ id, title, description, creationDate, duration, authors }) => {
    const dispatch = useDispatch();

    const handleDeleteCourse = (): void => {
        dispatch(deleteCourse(id));
    }

    const handleUpdateCourse = (): void => {

        const newCourse: Course = {
            id: id,
            title: 'Updated Course',
            description: '123456',
            creationDate: '01/01/2025',
            duration: 5,
            authors: ['1', '2'],
        }
        dispatch(updateCourse(newCourse));
        dispatch(addAuthor({ id: '1', name: 'John Doe' }));
        dispatch(addAuthor({ id: '2', name: 'Joe Dhon' }));
    }

    return (<div className={styles.courseCard}>
        <div className={styles.sideLine}></div>
        <h2>{title}</h2>
        <div className={styles.courseContainer}>
            <div className={styles.leftSide}>
                <p>{description}</p>
            </div>
            <div className={styles.rightSide}>
                <ul className={styles.courseInfoList}>
                    <li><b>Authors: </b>{authors}</li>
                    <li><b>Duration: </b>{duration}</li>
                    <li><b>Created: </b>{creationDate}</li>
                </ul>
                <div className={styles.buttonContainer}>
                    <Link to={id}><Button buttonText={SHOW_COURSE_TEXT} buttonWidth={'180px'} /></Link>
                    <Button buttonWidth='61px' clickHandler={handleDeleteCourse} name='Delete' role='button'><img src={trashBin} alt="Trash Bin" /></Button>
                    <Button buttonWidth='61px' clickHandler={handleUpdateCourse} name='Update' role='button'><img src={pencil} alt="Pencil" /></Button>
                </div>
            </div>
        </div>
    </div>);
}

export default CourseCard;
