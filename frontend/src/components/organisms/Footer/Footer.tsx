import classes from "./Footer.module.css";
import { Link } from "react-router-dom";

export interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {

}
const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.content}>
        <p>&copy; {new Date().getFullYear()} KEN Home. All rights reserved.</p>
        <div className={classes.links}>
          <a href="mailto:maciej.brzozowski.06@gmail.com">Contact</a>
          <Link to="/about">About</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
