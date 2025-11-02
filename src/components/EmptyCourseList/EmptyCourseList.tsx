import Button from '../../common/Button/Button';
import { ADD_NEW_COURSE_TEXT } from '../../constants';
import './EmptyCourseList.scss';
import styles from './EmptyCourseList.module.scss';


const EmptyCourseList: React.FC = () => {

    function addNewCourseHandler(): void {

    }

    return (
        <div className={'main-content ' + styles.mainContentEmptyList}>
            <div className="empty-list">
                <h1>Course List Is Empty</h1>
                <p>Please use Add New Course button to add your first course</p>
                <Button buttonText={ADD_NEW_COURSE_TEXT} clickHandler={addNewCourseHandler} buttonWidth={'233px'} />
            </div>
        </div>
    )
}

export default EmptyCourseList;
