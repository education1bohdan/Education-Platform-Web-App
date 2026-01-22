import logoImage from '../../../../assets/logo.png';
import './Logo.scss';
import { Link } from 'react-router-dom';

const Logo: React.FC<{}> = () => {
    return (<Link to="/"><img src={logoImage} alt='Logo'></img></Link>);
}

export default Logo;
