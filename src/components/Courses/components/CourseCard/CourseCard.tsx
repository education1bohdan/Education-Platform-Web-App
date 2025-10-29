import Button from '../../../../common/Button/Button';
import { SHOW_COURSE_TEXT } from '../../../../constants'


interface Props {
    title: string;
    description: string;
    creationDate: string;
    duration: string;
    authors: string;
}

const CourseCard: React.FC<Props> = ({ title, description, creationDate, duration, authors }: Props) => {

    function handleClick(): void {

    }

    return (<div className="CourseCart">
        <div className="side-line"></div>
        <div className="left-side">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
        <div className="right-side">
            <p><b>Authors: </b>{authors}</p>
            <p><b>Duration: </b>{duration}</p>
            <p><b>Created: </b>{creationDate}</p>
            <Button buttonText={SHOW_COURSE_TEXT} onClick={handleClick} />
        </div>
    </div>);
}

export default CourseCard;
