import { useState } from "react";
import Authentification from "../Authentification/Authentification";
import Input from "../../common/Input/Input";
import { LOGIN_BUTTON_TEXT } from "../../constants";
import fetchAuth from "../../helpers/fetchAuth";
import { useNavigate } from "react-router-dom";


import validateAuth from "../../helpers/validateAuth";

interface FormData {
    email: string;
    password: string;
    [key: string]: string;
}

interface ErrorsObject {
    email?: string;
    password?: string;
    [key: string]: string | undefined;
}

interface Props {
    login: Function;
}

const Login: React.FC<Props> = ({ login }) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState<FormData>({
        email: '',
        password: '',
    });

    const [formErrors, setFormErrors] = useState<ErrorsObject>({});

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (value.trim()) {
            setFormErrors({});
        }
    }

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();

        const validationErrors = validateAuth<FormData>(formData);

        setFormErrors(validationErrors);

        try {
            const result = await fetchAuth<FormData>(formData, '/login');

            if (Object.keys(formErrors).length === 0 && result.successful) {
                login(result.result, result.user.name);
                navigate('/courses');
                setFormData({
                    email: '',
                    password: '',
                });
            }
        } catch (error) {
            console.error('Login failed:', error);
        }
    }


    return (
        <Authentification title="Login" buttonText={LOGIN_BUTTON_TEXT} submitHandler={handleLogin} linkPath='/registration' stylingClass={'registration-login'} reference='Registration'>
            <Input hasError={formErrors.email ? true : false} inputType='text' name='email' placeholderText='Input text' labelText='Email' inputWidth='286px' onChange={handleChange} value={formData.email} errorMessage={formErrors.email && formErrors.email} />
            <Input hasError={formErrors.password ? true : false} inputType='password' name='password' placeholderText='Input text' labelText='Password' inputWidth='286px' onChange={handleChange} value={formData.password} errorMessage={formErrors.password && formErrors.password} />
        </Authentification>
    );
}

export default Login;
