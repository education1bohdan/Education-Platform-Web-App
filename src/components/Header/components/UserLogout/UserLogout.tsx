import { LOGOUT_BUTTON_TEXT } from '../../../../constants.ts';
import Button from '../../../Button/Button.tsx';
import './UserLogout.scss';

const UserLogout: React.FC = () => {
    const handleLogout = () => {
        alert('Logout clicked!');
    }
    return (
        <div className='logout-container'>
            <p>Test Name</p>
            <Button text={LOGOUT_BUTTON_TEXT} handler={handleLogout} />
        </div>

    )
}

export default UserLogout;
