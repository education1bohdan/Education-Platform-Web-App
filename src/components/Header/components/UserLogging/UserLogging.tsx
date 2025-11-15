import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LOGOUT_BUTTON_TEXT } from '../../../../constants.ts';
import { LOGIN_BUTTON_TEXT } from '../../../../constants.ts';
import Button from '../../../../common/Button/Button.tsx';
import './UserLogging.scss';

const UserLogout: React.FC = () => {
    const [isLogged, setLogging] = useState(false);

    const handleLogin = () => {
        setLogging(true)
    }

    const handleLogout = () => {
        setLogging(false)
    }

    return (
        <div className='logging-container'>
            {isLogged ? (
                <>
                    <p>Test Name</p>
                    <Button buttonText={LOGOUT_BUTTON_TEXT} />
                </>
            ) :
                (<Link to="/login"><Button buttonText={LOGIN_BUTTON_TEXT} /></Link>)
            }

        </div>

    )
}

export default UserLogout;
