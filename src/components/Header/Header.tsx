import Logo from "./components/Logo/Logo";
import UserLogging from "./components/UserLogging/UserLogging";
import "./Header.scss";


const Header: React.FC<{}> = function () {
    return (
        <header>
            <Logo />
            <UserLogging />
        </header>
    )
}

export default Header;
