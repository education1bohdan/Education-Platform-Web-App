import Logo from "./components/Logo/Logo";
import UserLogout from "./components/UserLogout/UserLogout";
import "./Header.scss";


const Header: React.FC<{}> = function () {
    return (
        <header>
            <Logo />
            <UserLogout />
        </header>
    )
}

export default Header;
