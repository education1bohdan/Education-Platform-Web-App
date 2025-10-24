import Logo from "./components/Logo/Logo";
import "./Header.scss";

const Header: React.FC<{}> = function () {
    return (
        <header>
            <Logo />
        </header>
    )
}

export default Header;
