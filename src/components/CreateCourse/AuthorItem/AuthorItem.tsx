import plus from '../../../assets/plus.svg';
import trashBin from '../../../assets/trash-bin.svg';
import styles from './AuthorItem.module.scss';

interface Props {
    authorName: string;
}
const AuthorItem: React.FC<Props> = ({ authorName }) => {
    return (
        <div className={styles.authorItemWrapper}>
            <p>{authorName}</p>
            <img className={styles.plus} src={plus} alt="" />
            <img className={styles.trashBin} src={trashBin} alt="Logo" />
        </div>
    )
}

export default AuthorItem;
