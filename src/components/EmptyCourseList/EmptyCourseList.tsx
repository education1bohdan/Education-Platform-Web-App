import { Link } from 'react-router-dom'
import Button from '../../common/Button/Button';
import { ADD_NEW_COURSE_TEXT } from '../../constants';
import './EmptyCourseList.scss';
import styles from './EmptyCourseList.module.scss';


const EmptyCourseList: React.FC = () => {

    return (
        <div className={'main-content ' + styles.mainContentEmptyList}>
            <div className="empty-list">
                <h1>Course List is Empty</h1>
                <p>Please use "Add New Course" button to add your first course</p>
                <Link to='/courses/add'><Button buttonText={ADD_NEW_COURSE_TEXT} buttonWidth={'233px'} /></Link>
            </div>
        </div>
    )
}

export default EmptyCourseList;
