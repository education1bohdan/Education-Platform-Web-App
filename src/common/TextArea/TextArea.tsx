import { useId } from 'react';
import styles from './TextArea.module.scss';

type CSSResizeOption = 'none' | 'both' | 'horizontal' | 'vertical';
interface Props {
    hasError?: boolean;
    name?: string;
    placeholderText?: string;
    labelText?: string;
    width?: string;
    height?: string;
    resize?: CSSResizeOption;
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
    value?: string;
    errorMessage?: string;
}

const TextArea: React.FC<Props> = ({ hasError = false, name, placeholderText = 'Input text', labelText, width = 'auto', height = 'auto', resize = 'none', onChange, value, errorMessage }) => {
    const uniqueId: string = useId();
    const textAreaClasses: string = `${styles['text-area']} ${hasError && styles.error}`;
    const pClasses: string = `${styles.errorMessage}`;
    return (
        <div className={styles['text-area-container']}>
            <label htmlFor={uniqueId}>{labelText}</label>
            <textarea className={textAreaClasses} id={uniqueId} name={name} placeholder={placeholderText} onChange={onChange} value={value} style={{ width: width, height: height, resize: resize }}></textarea>
            {hasError && <p className={pClasses}>{errorMessage}</p>}
        </div>
    );
}

export default TextArea;
