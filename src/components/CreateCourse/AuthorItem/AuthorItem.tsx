import plus from '../../../assets/plus.svg';
import trashBin from '../../../assets/trash-bin.svg';
import styles from './AuthorItem.module.scss';

interface Author {
    id: string;
    name: string;
}

interface Props {
    author: Author;
    onButtonClick: Function;
    isAdded: boolean;
}
const AuthorItem: React.FC<Props> = ({ author, onButtonClick, isAdded }) => {
    const { name, id } = author;
    return (
        <li key={id} id={id} className={styles.authorItemWrapper}>
            <p>{name}</p>
            {!isAdded ?
                <button type='button' onClick={() => onButtonClick(id)}>
                    <img className={styles.plus} src={plus} alt="Plus" />
                </button>
                : <button type='button' onClick={() => onButtonClick(id)}>
                    <img className={styles.trashBin} src={trashBin} alt="Trash Bin" />
                </button>
            }
        </li>
    )
}

export default AuthorItem;
