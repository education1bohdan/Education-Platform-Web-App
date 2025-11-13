import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";
import { SIGNUP_BUTTON_TEXT } from "../../constants";
import './Registration.scss';
import { useState } from "react";

interface FormData {
    name: string;
    email: string;
    password: string;
}

interface ErrorsObject {
    name?: string;
    email?: string;
    password?: string;
}

const Registration: React.FC = () => {

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        password: '',
    });

    const [formErrors, setFormErrors] = useState({});

    function validateForm<T>(object: T): T | {} {
        const errorsObject: ErrorsObject = {};

        for (let key in object) {

            const inputName = key.charAt(0).toUpperCase() + key.slice(1);

            if (!object[key]) {
                errorsObject[key] = `${inputName} is required`;
            }
        }
        return errorsObject;
    }


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;
        setFormData(prev => ({ ...prev, [name]: value }));

    }

    const handleLogin = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        const validationErrors = validateForm<FormData>(formData);

        setFormErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            setFormData({
                name: '',
                password: '',
                email: '',
            });
        }
    }

    return (
        <div className='main-content main-content-registration'>
            <h1>Registration</h1>
            <form onSubmit={handleLogin}>
                <div className='registration-form'>
                    <div className="input-container">
                        <Input inputType='text' name='name' placeholderText='Input text' labelText='Name' inputWidth='286px' onChange={handleChange} value={formData.name} />
                        {formErrors.name && <p>{formErrors.name}</p>}
                    </div>
                    <div className="input-container">
                        <Input inputType='email' name='email' placeholderText='Input text' labelText='Email' inputWidth='286px' onChange={handleChange} value={formData.email} />
                        {formErrors.email && <p>{formErrors.email}</p>}
                    </div>
                    <div className="input-container">
                        <Input inputType='password' name='password' placeholderText='Input text' labelText='Password' inputWidth='286px' onChange={handleChange} value={formData.password} />
                        {formErrors.password && <p>{formErrors.password}</p>}
                    </div>
                    <Button type='submit' buttonWidth='286px' buttonText={SIGNUP_BUTTON_TEXT} />
                    <p>If you have an account you may <strong>Login</strong></p>
                </div>
            </form>
        </div>
    );
}

export default Registration;
