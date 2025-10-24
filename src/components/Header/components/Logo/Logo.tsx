import logoImage from '../../../../assets/logo.png';
import './Logo.scss'

const Logo: React.FC<{}> = () => {
    return (<img src={logoImage} alt='Logo'></img>);
}

export default Logo;
