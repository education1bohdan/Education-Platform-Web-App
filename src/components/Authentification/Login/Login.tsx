import Authentification from "../Authentification";
import Input from "../../../common/Input/Input";
import { LOGIN_BUTTON_TEXT } from "../../../constants";
import { useState } from "react";

interface FormData {
    email: string;
    password: string;
}

interface ErrorsObject {
    name?: string;
    email?: string;
    password?: string;
}

const Login = () => {


    const [formData, setFormData] = useState<FormData>({
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

    const handleLogin = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        const validationErrors = validateForm<FormData>(formData);

        setFormErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            setFormData({
                password: '',
                email: '',
            });
        }
    }

    return (
        <Authentification title="Login" buttonText={LOGIN_BUTTON_TEXT} handler={handleLogin} linkPath='/registration' stylingClass={'registration-login'} reference='Sign Up'>
            <Input hasError={formErrors.email ? true : false} inputType='email' name='email' placeholderText='Input text' labelText='Email' inputWidth='286px' onChange={handleChange} value={formData.email} errorMessage={formErrors.email && formErrors.email} />
            <Input hasError={formErrors.password ? true : false} inputType='password' name='password' placeholderText='Input text' labelText='Password' inputWidth='286px' onChange={handleChange} value={formData.password} errorMessage={formErrors.password && formErrors.password} />
        </Authentification>
    );
}

export default Login;
