import plus from '../../assets/plus.svg';
import trashBin from '../../assets/trash-bin.svg';
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
                <button type='button' role='button' name='Add author' onClick={() => onButtonClick(id)}>
                    Add author

                </button>
                : <button type='button' role='button' name='Delete author' onClick={() => onButtonClick(id)}>


                </button>
            }
        </li>
    )
}

export default AuthorItem;
