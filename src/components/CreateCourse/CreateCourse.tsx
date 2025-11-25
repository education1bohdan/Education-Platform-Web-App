// import { Link } from 'react-router-dom';
import { useState } from 'react';
import Input from '../../common/Input/Input';
import Button from "../../common/Button/Button";
import TextArea from '../../common/TextArea/TextArea';
import AuthorItem from '../AuthorItem/AuthorItem';
import { CREATE_AUTHOR_TEXT, CANCEL, CREATE_COURSE } from '../../constants';
import getCourseDuration from '../../helpers/getCourseDuration';
import validateCreateCourse from '../../helpers/validateCreateCourse';
import validateCourseAuthors from '../../helpers/validateCourseAuthors';
import styles from './CreateCourse.module.scss';
import { Course, Authors } from '../Courses/Courses';
// import { v4 as uuidv4 } from 'uuid';
import formatCreationDate from '../../helpers/formatCreationDate';

interface Props {
    courseCreationHandler: (createdCourse: Course, addedAuthors: Authors[]) => void;
}

interface formData {
    title: string;
    description: string;
    creationDate: string;
    duration: string;
    authors: string;
    [key: string]: string;
}

export interface ErrorsObject {
    title?: string;
    description?: string;
    duration?: string;
    authors?: string;
    [key: string]: string | undefined;
}

const CreateCourse: React.FC<Props> = ({ courseCreationHandler }) => {
    const [courseDuration, setCourseDuration] = useState<string[]>(['00:00', 'hours']);
    const [formErrors, setFormErrors] = useState<ErrorsObject>({});
    const [authorList, setAuthor] = useState<Authors[]>([]);
    const [addedAuthors, setAddedAuthors] = useState<Authors[]>([]);
    const [authorErrors, setAuthorErrors] = useState<boolean>(true);
    const [formData, setFormData] = useState<formData>({
        title: '',
        description: '',
        creationDate: '',
        duration: '',
        authors: '',
    })

    // Change event handler for most controlled form input fields 

    const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>): void => {
        const { name, value } = event.target;

        setFormData(prev => ({ ...prev, [name]: value }));

        setFormErrors(prev => ({ ...prev, [name]: '', }));
    }

    // Change event handler for duration input field 

    const handleChangeDuration = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>): void => {
        const { value } = event.target;
        let newValue = value;

        isNaN(Number(value)) || value[value.length - 1] === ' ' ? setFormErrors(prev => ({ ...prev, duration: 'The value should be a number', })) : setFormErrors(prev => ({ ...prev, duration: '', }));

        newValue = value.replace(/[^0-9]/g, '');


        setFormData(prev => ({ ...prev, duration: newValue }));

        const durationValue: string[] = getCourseDuration(newValue).split(" ");
        setCourseDuration(durationValue);
    }

    // Handler for author creation by clicking on the button "CREATE AUTHOR"

    const handleAuthorCreation = (): void => {
        const validationError = validateCourseAuthors(formData.authors, 2, 25);
        if (validationError) {
            setFormErrors(prev => ({ ...prev, authors: validationError }));
        } else {
            setAuthor(prev => ([...prev, { id: Math.random().toString(36).substring(2), name: (formData.authors).trim() }]));
            setFormData(prev => ({ ...prev, authors: '' }));
        }
    }

    // Handler for adding & deleting authors' names

    const addDeleteAuthor = (id: string): void => {
        const authorToAdd = authorList.find(author => author.id === id);
        const authorToDelete = addedAuthors.find(author => author.id === id);
        if (authorToAdd) {
            setAddedAuthors(prev => [...prev, authorToAdd]);
            setAuthor(authorList.filter(author => author.id !== id));
            setAuthorErrors(true);
        } else if (authorToDelete) {
            setAuthor(prev => [...prev, authorToDelete]);
            setAddedAuthors(addedAuthors.filter(author => author.id !== id));
            addedAuthors.length === 0 && setAuthorErrors(false);
        }
        // addedAuthors.length !== 0 ? setAuthorErrors(true) : setAuthorErrors(false);
    }

    // Handler for form submittion by clicking on the button "CREATE COURSE"

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        const validationErrors = validateCreateCourse<formData, Authors>(formData, addedAuthors, 2);

        setFormErrors(validationErrors);
        addedAuthors.length === 0 && setAuthorErrors(false);

        if (Object.keys(validationErrors).length === 0) {

            const date = formatCreationDate();

            const createdCourse: Course = {
                id: Math.random().toString(36).substring(2),
                title: formData.title,
                description: formData.description,
                creationDate: date,
                duration: Number(formData.duration),
                authors: addedAuthors.map((a) => a.id),
            }
            courseCreationHandler(createdCourse, addedAuthors);

            setFormData({
                title: '',
                description: '',
                creationDate: '',
                duration: '',
                authors: '',
            });
            setCourseDuration(['00:00', 'hours']);
            setAuthor([]);
            setAddedAuthors([]);
            setAuthorErrors(true);
        }
    }

    const cancelButtonHandler = (): void => {
        alert('Cancel')
    }

    return (
        <div className={"main-content " + styles.createCourse} >
            <h1>Course Edit/Create Page</h1>
            <form onSubmit={handleSubmit} id='create-course-form'>
                <div className={styles.mainInfo}>
                    <h2>Main Info</h2>
                    <Input hasError={formErrors.title ? true : false} errorMessage={formErrors.title && formErrors.title} inputType='text' name='title' labelText='Title' inputWidth='auto' onChange={handleChange} value={formData.title} />
                    <TextArea hasError={formErrors.description ? true : false} errorMessage={formErrors.description && formErrors.description} name='description' placeholderText='Input Text' labelText='Description' width='auto' height='152px' resize='none' onChange={handleChange} value={formData.description}></TextArea>
                </div>
                <div className={styles.duration}>
                    <h2>Duration</h2>
                    <div className={styles['duration-input-container']}>
                        <Input hasError={formErrors.duration ? true : false} errorMessage={formErrors.duration && formErrors.duration} inputType='text' name='duration' labelText='Duration' inputWidth='400px' onChange={handleChangeDuration} value={formData.duration} />
                        <div className={styles['duration-p']}>
                            <p>{courseDuration[0]} {courseDuration[1]}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.authors}>
                    <h2>Authors</h2>
                    <div className={styles['authors-input-container']}>
                        <Input hasError={(formErrors.authors || (!authorErrors && addedAuthors.length === 0)) ? true : false} errorMessage={formErrors.authors} inputType='text' name='authors' labelText='Author Name' inputWidth='400px' onChange={handleChange} value={formData.authors} />
                        <Button buttonText={CREATE_AUTHOR_TEXT} clickHandler={handleAuthorCreation} buttonWidth="185px" name='create author' />
                    </div>
                    <div className={styles['authors-list-container']}>
                        <h3>Authors List</h3>
                        <ul className={styles['authors-list']}>
                            {authorList.map(author => {
                                return <AuthorItem author={author} onButtonClick={addDeleteAuthor} isAdded={false} />
                            })}
                            <button type='button' role='button' name='Add author' onClick={() => setAddedAuthors([{ id: 'test', name: 'test' }])}>
                                Add author
                            </button>
                            <button type='button' role='button' name='Delete author' onClick={() => setAddedAuthors([])}>
                                Delete author
                            </button>
                        </ul>
                    </div>
                </div>
                <div className={styles.courseAuthors}>
                    <div>
                        <h2>Course Authors</h2>
                        <ul>
                            {addedAuthors.length === 0 && <p>author list is empty</p>}
                            {!authorErrors
                                ? <li className={styles.authorErrorMessage}>There should be at least 1 author name</li>
                                : addedAuthors.map(author => {
                                    return <AuthorItem author={author} onButtonClick={addDeleteAuthor} isAdded={true} />
                                })
                            }
                        </ul>
                    </div>
                </div>
            </form>
            <div className={styles['button-container']}>
                <Button buttonText='cancel' buttonWidth="185px" clickHandler={cancelButtonHandler} name='cancel' role='button' />
                <Button type='submit' buttonText={CREATE_COURSE} buttonWidth="185px" form='create-course-form' />
            </div>
        </div>
    )
}

export default CreateCourse;
