import classes from "./Header.module.css";
import { Link } from "react-router-dom";

export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {

}
const Header: React.FC<HeaderProps> = () => {
    return (
        <div className={classes.header}>
            <nav className={classes.nav}>
                <Link to="/">Home</Link>
                <Link to="/HomeSetup">Home Setup</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/about">About</Link>
                |
                <a href="https://192.168.1.26:5001" target="_blank" rel="noopener noreferrer">Local Server</a>
                <a href="http://192.168.1.1" target="_blank" rel="noopener noreferrer">Router</a>
                |
                <Link to="/test">Test</Link>
            </nav>
        </div>
    );
};

export default Header;
