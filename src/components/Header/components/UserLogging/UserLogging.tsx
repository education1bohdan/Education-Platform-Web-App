import React, { useState } from 'react';
import { LOGOUT_BUTTON_TEXT } from '../../../../constants.ts';
import { LOGIN_BUTTON_TEXT } from '../../../../constants.ts';
import Button from '../../../../common/Button/Button.tsx';
import './UserLogging.scss';

const UserLogout: React.FC = () => {
    const [isLogged, setLogging] = useState(false);

    const handleLogin = () => {
        alert('Login clicked!');
        setLogging(true)
    }

    const handleLogout = () => {
        alert('Logout clicked!');
        setLogging(false)
    }

    return (
        <div className='logging-container'>
            {isLogged ? (
                <>
                    <p>Test Name</p>
                    <Button buttonText={LOGOUT_BUTTON_TEXT} clickHandler={handleLogout} />
                </>
            ) :
                (<Button buttonText={LOGIN_BUTTON_TEXT} clickHandler={handleLogin} />)}

        </div>

    )
}

export default UserLogout;
