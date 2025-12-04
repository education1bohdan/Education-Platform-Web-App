import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { LOGOUT_BUTTON_TEXT } from '../../../../constants.ts';
import { LOGIN_BUTTON_TEXT } from '../../../../constants.ts';
import Button from '../../../../common/Button/Button.tsx';
import './UserLogging.scss';
import { logout } from '../../../../store/user/userSlice.ts';
import { getUser } from '@/selectors/selectors.ts';

const UserLogout: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isAuth = useSelector(getUser).isAuth;
    const userName = useSelector(getUser).name || localStorage.getItem('user');

    const logoutHandler = () => {
        dispatch(logout());
        navigate('/login');
    }

    return (
        <div className='logging-container'>
            {((isAuth || localStorage.getItem('token')) ? (
                <>
                    <p>{userName}</p>
                    <Button buttonText={LOGOUT_BUTTON_TEXT} clickHandler={logoutHandler} />
                </>
            ) :
                (<Link to="/login"><Button buttonText={LOGIN_BUTTON_TEXT} /></Link>))}
        </div>
    )
}

export default UserLogout;
