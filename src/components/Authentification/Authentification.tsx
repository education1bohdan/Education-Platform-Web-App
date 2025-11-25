// import { Link } from 'react-router-dom';
import { ReactNode } from 'react';
import { FormEventHandler } from 'react';
import Button from "../../common/Button/Button";
import styles from './Authentification.module.scss';

interface AuthProps {
    children: ReactNode;
    title: string;
    buttonText: string;
    handler: FormEventHandler<HTMLFormElement>;
    linkPath: string;
    stylingClass: string;
    reference: string;
}


const Authentification: React.FC<AuthProps> = ({ children, title, buttonText, handler, linkPath, stylingClass, reference }) => {

    const formClasses = `main-content ${styles[stylingClass]}`

    return (
        <div className={formClasses}>
            <h1>{title}</h1>
            <form onSubmit={handler}>
                <div className={styles['form-container']}>
                    {children}
                    <Button type='submit' buttonWidth='286px' buttonText={buttonText} />
                    <p className={styles['login-registration-link']}>If you have an account you may <strong>{reference}</strong></p>
                </div>
            </form>
        </div>
    )
}

export default Authentification;
