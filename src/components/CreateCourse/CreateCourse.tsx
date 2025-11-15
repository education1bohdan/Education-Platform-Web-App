import { useState } from 'react';
import Input from '../../common/Input/Input';
import styles from './CreateCourse.module.scss';

interface Props {

}

interface formData {
    title: string;
    description: string;
}

const CreateCourse: React.FC<Props> = ({ }) => {

    const [formData, setFormData] = useState<formData>({
        title: '',
        description: '',
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // if (value.trim()) {
        //     setFormErrors(prev => {
        //         const newErrors = { ...prev };
        //         delete newErrors[name];
        //         return newErrors;
        //     });
        // }
    }
    return (
        <div className={"main-content " + styles.createCourse} >
            <h1>Course Edit/Create Page</h1>
            <form>
                <div className={styles.mainInfo}>
                    <h2>Main Info</h2>
                    <Input inputType='text' name='title' labelText='Title' inputWidth='auto' onChange={handleChange} value={formData.title} />
                    <Input inputHeight='152px' />
                </div>
                <div className="duration"></div>
            </form>
        </div>
    )
}

export default CreateCourse;
