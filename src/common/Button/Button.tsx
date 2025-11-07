import './Button.scss';

interface props {
    buttonText: string;
    clickHandler?: React.MouseEventHandler<HTMLButtonElement>;
    type?: 'button' | 'submit' | 'reset';
    buttonWidth?: string;
    buttonHeight?: string;
}

const LogoutButton: React.FC<props> = ({ type = 'button', buttonText, clickHandler, buttonWidth = '140px', buttonHeight = '50px' }) => {
    return (
        <button type={type} onClick={clickHandler} style={{ width: buttonWidth, height: buttonHeight }}>{buttonText}</button>
    )
}

export default LogoutButton;
