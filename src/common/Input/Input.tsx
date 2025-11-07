import { useId } from 'react';
import './Input.scss';

interface Props {
    className?: string;
    inputType?: string;
    name?: string;
    placeholderText?: string;
    labelText?: string;
    inputWidth?: string;
    inputHeight?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    value?: string;
}

const Input: React.FC<Props> = ({ className, inputType = 'text', name, placeholderText, labelText, inputWidth = '400px', inputHeight = '50px', onChange, value }) => {
    const uniqueId = useId();
    return (
        <div className='input-container'>
            <label htmlFor={uniqueId}>{labelText}</label>
            <input id={uniqueId} className={className} type={inputType} name={name} placeholder={placeholderText} onChange={onChange} value={value} style={{ width: inputWidth, height: inputHeight }} />
        </div>
    );
}

export default Input;
