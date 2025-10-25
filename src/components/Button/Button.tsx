import './Button.scss';

interface props {
    text: string;
    handler: React.MouseEventHandler<HTMLButtonElement>;
}

const LogoutButton: React.FC<props> = ({ text, handler }: props) => {
    return (
        <button onClick={handler}>{text}</button>
    )
}

export default LogoutButton;
