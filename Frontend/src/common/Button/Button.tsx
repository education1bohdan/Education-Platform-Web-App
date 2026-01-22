import styles from './Button.module.scss';

interface props {
    children?: React.ReactNode;
    buttonText?: string;
    clickHandler?: () => void;
    type?: 'button' | 'submit' | 'reset';
    buttonWidth?: string;
    buttonHeight?: string;
    form?: string;
    name?: string;
    role?: string;
}

const Button: React.FC<props> = ({ children, type = 'button', buttonText, clickHandler, buttonWidth = '140px', buttonHeight = '50px', form, name, role }) => {
    return (
        <button className={styles.button} type={type} onClick={clickHandler} form={form} style={{ width: buttonWidth, height: buttonHeight }} name={name} role={role}>{buttonText}{children}</button>
    )
}

export default Button;
