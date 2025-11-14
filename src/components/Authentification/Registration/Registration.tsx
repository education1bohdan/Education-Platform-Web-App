import Authentification from "../Authentification";
import Input from "../../../common/Input/Input";
import { SIGNUP_BUTTON_TEXT } from "../../../constants";
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

const Registration = () => {


    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        password: '',
    });

    const [formErrors, setFormErrors] = useState<ErrorsObject>({});

    function validateForm<T>(object: T): ErrorsObject | {} {
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

    const handleRegistration = (event: React.FormEvent<HTMLFormElement>): void => {
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
        <Authentification title="Registration" buttonText={SIGNUP_BUTTON_TEXT} handler={handleRegistration} linkPath='/login' stylingClass={'registration-login'} reference='Login'>
            <Input hasError={formErrors.name ? true : false} inputType='text' name='name' placeholderText='Input text' labelText='Name' inputWidth='286px' onChange={handleChange} value={formData.name} errorMessage={formErrors.name && formErrors.name} />
            <Input hasError={formErrors.email ? true : false} inputType='email' name='email' placeholderText='Input text' labelText='Email' inputWidth='286px' onChange={handleChange} value={formData.email} errorMessage={formErrors.email && formErrors.email} />
            <Input hasError={formErrors.password ? true : false} inputType='password' name='password' placeholderText='Input text' labelText='Password' inputWidth='286px' onChange={handleChange} value={formData.password} errorMessage={formErrors.password && formErrors.password} />
        </Authentification>
    );
}

export default Registration;
