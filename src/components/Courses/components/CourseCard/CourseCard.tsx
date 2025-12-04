import { Link } from 'react-router-dom';
import Button from '../../../../common/Button/Button';
import pencil from '../../../../assets/pencil.svg';
import trashBin from '../../../../assets/trash-bin2.svg';
import { SHOW_COURSE_TEXT } from '../../../../constants';
import "./CourseCard.scss";
import { deleteCourse } from '@/store/courses/coursesSlice';
import { useDispatch } from 'react-redux';

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
    const handleDeleteCourse = () => {
        dispatch(deleteCourse(id));
    }

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
                <div className='buttonContainer'>
                    <Link to={id}><Button buttonText={SHOW_COURSE_TEXT} buttonWidth={'180px'} /></Link>
                    <Button buttonWidth='61px' clickHandler={handleDeleteCourse} name='Delete' role='button'><img src={trashBin} alt="Trash Bin" /></Button>
                    <Button buttonWidth='61px' name='Update' role='button'><img src={pencil} alt="Pencil" /></Button>
                </div>
            </div>
        </div>
    </div>);
}

export default CourseCard;
