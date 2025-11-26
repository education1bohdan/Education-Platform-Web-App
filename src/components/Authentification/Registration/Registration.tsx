import Authentification from "../Authentification";
import Input from "../../../common/Input/Input";
import { SIGNUP_BUTTON_TEXT } from "../../../constants";
import { useState } from "react";
import validateAuth from "../../../helpers/validateAuth";

export interface FormData {
    name: string;
    email: string;
    password: string;
    [key: string]: string;
}

export interface ErrorsObject {
    name?: string;
    email?: string;
    password?: string;
    [key: string]: string | undefined;
}

const Registration = () => {


    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        password: '',
    });

    const [formErrors, setFormErrors] = useState<ErrorsObject>({});

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (value.trim()) {
            setFormErrors(prev => ({ ...prev, [name]: '' }));
        }
    }

    const handleRegistration = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        const validationErrors = validateAuth<FormData>(formData);

        setFormErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            setFormData({
                name: '',
                email: '',
                password: '',
            });
        }
    }

    return (
        <Authentification title="Registration" buttonText={SIGNUP_BUTTON_TEXT} handler={handleRegistration} linkPath='/login' stylingClass={'registration-login'} reference='Login'>
            <Input hasError={formErrors.name ? true : false} inputType='text' name='name' placeholderText='Input text' labelText='Name' inputWidth='286px' onChange={handleChange} value={formData.name} errorMessage={formErrors.name && formErrors.name} />
            <Input hasError={formErrors.email ? true : false} inputType='text' name='email' placeholderText='Input text' labelText='Email' inputWidth='286px' onChange={handleChange} value={formData.email} errorMessage={formErrors.email && formErrors.email} />
            <Input hasError={formErrors.password ? true : false} inputType='password' name='password' placeholderText='Input text' labelText='Password' inputWidth='286px' onChange={handleChange} value={formData.password} errorMessage={formErrors.password && formErrors.password} />
        </Authentification>
    );
}

export default Registration;
