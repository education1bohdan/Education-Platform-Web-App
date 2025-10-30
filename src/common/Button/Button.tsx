import './Button.scss';

interface props {
    buttonText: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    buttonWidth?: string;
    buttonHeight?: string;
}

const LogoutButton: React.FC<props> = ({ buttonText, onClick, buttonWidth = '140px', buttonHeight = '50px' }) => {
    return (
        <button onClick={onClick} style={{ width: buttonWidth, height: buttonHeight }}>{buttonText}</button>
    )
}

export default LogoutButton;
