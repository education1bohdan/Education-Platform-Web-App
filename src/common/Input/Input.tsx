import { useId } from 'react';
import './Input.scss';

interface Props {
    className: string;
    placeholderText?: string;
    labelText?: string;
    inputWidth?: string;
    inputHeight?: string;
}

const Input: React.FC<Props> = ({ className, placeholderText, labelText, inputWidth = '400px', inputHeight = '50px' }) => {
    const uniqueId = useId();
    return (
        <div className='input-container'>
            <label htmlFor={uniqueId}>{labelText}</label>
            <input id={uniqueId} className={className} type="text" placeholder={placeholderText} style={{ width: inputWidth, height: inputHeight }} />
        </div>
    );
}

export default Input;
