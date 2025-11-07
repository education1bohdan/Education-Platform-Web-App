import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";
import { LOGIN_BUTTON_TEXT } from "../../constants";
import './Registration.scss';
import { useState } from "react";

const Registration: React.FC = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    }

    const handleLogin = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        setFormData({
            name: '',
            password: '',
            email: ''
        });

    }

    return (
        <div className='main-content main-content-registration'>
            <h1>Registration</h1>
            <form onSubmit={handleLogin}>
                <div className='registration-form'>
                    <Input inputType='text' name='name' placeholderText='Input text' labelText='Name' inputWidth='286px' onChange={handleChange} value={formData.name} />
                    <Input inputType='email' name='email' placeholderText='Input text' labelText='Email' inputWidth='286px' onChange={handleChange} value={formData.email} />
                    <Input inputType='password' name='password' placeholderText='Input text' labelText='Password' inputWidth='286px' onChange={handleChange} value={formData.password} />
                    <Button type='submit' buttonWidth='286px' buttonText={LOGIN_BUTTON_TEXT} />
                    <p>If you have an account you may <strong>Login</strong></p>
                </div>
            </form>
        </div>
    );
}

export default Registration;
