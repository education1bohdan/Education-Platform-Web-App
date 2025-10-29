import './Button.scss';

interface props {
    buttonText: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const LogoutButton: React.FC<props> = ({ buttonText, onClick }) => {
    return (
        <button onClick={onClick}>{buttonText}</button>
    )
}

export default LogoutButton;
