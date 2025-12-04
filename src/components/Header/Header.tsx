import { useLocation } from 'react-router-dom';
import Logo from "./components/Logo/Logo";
import UserLogging from "./components/UserLogging/UserLogging";
import "./Header.scss";


const Header: React.FC = function () {

    const location = useLocation();

    const hideHeaderPaths = ["/login", "/registration"];

    const shouldHideHeader = hideHeaderPaths.includes(location.pathname);

    return (
        <header>
            <Logo />
            {!shouldHideHeader && <UserLogging />}
        </header>
    )
}

export default Header;
