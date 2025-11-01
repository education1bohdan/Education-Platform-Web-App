import './Input.scss';

interface Props {
    className: string;
    placeholderText?: string;
    inputWidth?: string;
    inputHeight?: string;
}

const Input: React.FC<Props> = ({ className, placeholderText, inputWidth = '400px', inputHeight = '50px' }) => {
    return (
        <input className={className} type="text" placeholder={placeholderText} style={{ width: inputWidth, height: inputHeight }} />
    );
}

export default Input;
