import styles from './Button.module.scss';

interface props {
    buttonText: string;
    clickHandler?: React.MouseEventHandler<HTMLButtonElement>;
    type?: 'button' | 'submit' | 'reset';
    buttonWidth?: string;
    buttonHeight?: string;
    form?: string;
    role?: string;
    name?: string;
}

const LogoutButton: React.FC<props> = ({ type = 'button', buttonText, clickHandler, buttonWidth = '140px', buttonHeight = '50px', form, role = 'button', name = '' }) => {
    return (
        <button className={styles.button} type={type} onClick={clickHandler} form={form} style={{ width: buttonWidth, height: buttonHeight }} role={role} name={name}>{buttonText}</button>
    )
}

export default LogoutButton;
