import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
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

    const location = useLocation();

    const hideHeaderPaths = ["/login", "/registration"];

    const shouldHideHeader = hideHeaderPaths.includes(location.pathname);

    return (
        <div className='logging-container'>

            {!shouldHideHeader && (isLogged ? (
                <>
                    <p>Test Name</p>
                    <Button buttonText={LOGOUT_BUTTON_TEXT} />
                </>
            ) :
                (<Link to="/login"><Button buttonText={LOGIN_BUTTON_TEXT} /></Link>))}


        </div>

    )
}

export default UserLogout;
