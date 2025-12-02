import styles from './Button.module.scss';

interface props {
    buttonText: string;
    clickHandler?: React.MouseEventHandler<HTMLButtonElement>;
    type?: 'button' | 'submit' | 'reset';
    buttonWidth?: string;
    buttonHeight?: string;
    form?: string;
    name?: string;
    role?: string;
}

const Button: React.FC<props> = ({ type = 'button', buttonText, clickHandler, buttonWidth = '140px', buttonHeight = '50px', form, name, role }) => {
    return (
        <button className={styles.button} type={type} onClick={clickHandler} form={form} style={{ width: buttonWidth, height: buttonHeight }} name={name} role={role}>{buttonText}</button>
    )
}

export default Button;
