import Authentification from "../Authentification/Authentification";
import Input from "../../common/Input/Input";
import { SIGNUP_BUTTON_TEXT } from "../../constants";
import { useState } from "react";
import validateAuth from "../../helpers/validateAuth";
import { useNavigate } from "react-router-dom";

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
    const navigate = useNavigate();
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

    const handleRegistration = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();

        const validationErrors = validateAuth<FormData>(formData);

        setFormErrors(validationErrors);

        try {
            const response = await fetch('http://localhost:4000/register', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json',
                },
            });


            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Registration error: ')
            }

            const result = await response.json();


            return result;
        } catch (error) {
            console.error(error)
        }

        if (Object.keys(validationErrors).length === 0) {

            setFormData({
                name: '',
                email: '',
                password: '',
            });
        }
    }

    return (
        <Authentification title="Registration" buttonText={SIGNUP_BUTTON_TEXT} submitHandler={handleRegistration} linkPath='/login' stylingClass={'registration-login'} reference='Login'>
            <Input hasError={formErrors.name ? true : false} inputType='text' name='name' placeholderText='Input text' labelText='Name' inputWidth='286px' onChange={handleChange} value={formData.name} errorMessage={formErrors.name && formErrors.name} />
            <Input hasError={formErrors.email ? true : false} inputType='text' name='email' placeholderText='Input text' labelText='Email' inputWidth='286px' onChange={handleChange} value={formData.email} errorMessage={formErrors.email && formErrors.email} />
            <Input hasError={formErrors.password ? true : false} inputType='password' name='password' placeholderText='Input text' labelText='Password' inputWidth='286px' onChange={handleChange} value={formData.password} errorMessage={formErrors.password && formErrors.password} />
        </Authentification>
    );
}

export default Registration;
