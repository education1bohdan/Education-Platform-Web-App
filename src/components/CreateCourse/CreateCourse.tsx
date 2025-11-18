import { Link } from 'react-router-dom';
import { useState } from 'react';
import Input from '../../common/Input/Input';
import Button from "../../common/Button/Button";
import TextArea from '../../common/TextArea/TextArea';
import AuthorItem from './AuthorItem/AuthorItem';
import { CREATE_AUTHOR_TEXT, CANCEL, CREATE_COURSE } from '../../constants';
import getCourseDuration from '../../helpers/getCourseDuration';
import validateForm from '../../helpers/validateForm';
import styles from './CreateCourse.module.scss';

let hasError = false;

interface Props {

}
interface formData {
    title: string;
    description: string;
    duration: string;
    authors: string;
}

export interface ErrorsObject {
    title?: string;
    description?: string;
    duration?: string;
    authors?: string;
}

const CreateCourse: React.FC<Props> = ({ }) => {

    const [courseDuration, setCourseDuration] = useState<string[]>(['00:00', 'hours']);
    const [formErrors, setFormErrors] = useState<ErrorsObject>({});
    const [formData, setFormData] = useState<formData>({
        title: '',
        description: '',
        duration: '',
        authors: '',
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>): void => {
        const { name, value } = event.target;

        setFormData(prev => ({ ...prev, [name]: value }));

    }

    const handleChangeDuration = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>): void => {
        const { value } = event.target;
        let newValue = value;

        newValue = value.replace(/[^0-9]/g, '');

        setFormData(prev => ({ ...prev, duration: newValue }));

        const durationValue: string[] = getCourseDuration(newValue).split(" ");
        setCourseDuration(durationValue);
    }

    const handleAuthorCreation = (): void => {

    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();


    }

    return (
        <div className={"main-content " + styles.createCourse} >
            <h1>Course Edit/Create Page</h1>
            <form onSubmit={handleSubmit}>
                <div className={styles.mainInfo}>
                    <h2>Main Info</h2>
                    <Input hasError={hasError} errorMessage='Title is required.' inputType='text' name='title' labelText='Title' inputWidth='auto' onChange={handleChange} value={formData.title} />
                    <TextArea hasError={hasError} errorMessage='Description is required.' name='description' placeholderText='Input Text' labelText='Description' width='auto' height='152px' resize='none' onChange={handleChange} value={formData.description}></TextArea>
                </div>
                <div className={styles.duration}>
                    <h2>Duration</h2>
                    <div className={styles['duration-input-container']}>
                        <Input hasError={hasError} errorMessage='Duration is required.' inputType='text' name='duration' labelText='Duration' inputWidth='400px' onChange={handleChangeDuration} value={formData.duration} />
                        <div className={styles['duration-p']}>
                            <p><strong>{courseDuration[0]}</strong> {courseDuration[1]}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.authors}>
                    <h2>Authors</h2>
                    <div className={styles['authors-input-container']}>
                        <Input hasError={hasError} inputType='text' name='authors' labelText='Author Name' inputWidth='400px' onChange={handleChange} value={formData.authors} />
                        <Button buttonText={CREATE_AUTHOR_TEXT} clickHandler={handleAuthorCreation} buttonWidth="185px" />
                    </div>
                    <div className={styles['authors-list-container']}>
                        <h3>Authors List</h3>
                        <ul className={styles['authors-list']}>
                            <AuthorItem authorName='Author One' />
                            <AuthorItem authorName='Author Two' />
                        </ul>
                    </div>
                </div>
                <div className={styles.courseAuthors}>
                    <div>
                        <h2>Course Authors</h2>
                        <p>Author list is empty</p>
                    </div>
                </div>
            </form>
            <div className={styles['button-container']}>
                <Link to='/'><Button buttonText={CANCEL} buttonWidth="185px" /></Link>
                <Button type='submit' buttonText={CREATE_COURSE} buttonWidth="185px" />
            </div>
        </div>
    )
}

export default CreateCourse;
