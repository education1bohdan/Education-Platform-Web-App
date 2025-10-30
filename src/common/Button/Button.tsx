import './Button.scss';

interface props {
    buttonText: string;
    clickHandler: React.MouseEventHandler<HTMLButtonElement>;
    buttonWidth?: string;
    buttonHeight?: string;
}

const LogoutButton: React.FC<props> = ({ buttonText, clickHandler, buttonWidth = '140px', buttonHeight = '50px' }) => {
    return (
        <button onClick={clickHandler} style={{ width: buttonWidth, height: buttonHeight }}>{buttonText}</button>
    )
}

export default LogoutButton;
