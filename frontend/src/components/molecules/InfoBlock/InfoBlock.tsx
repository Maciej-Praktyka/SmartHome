import { Link } from "react-router-dom";
import Button from "../../atoms/Button/Button";
import classes from "./InfoBlock.module.css";

interface InfoBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  header: string;
  children: React.ReactNode;
  buttonText?: string;
  buttonLink?: string;
}
const InfoBlock: React.FC<InfoBlockProps> = ({ header, children, buttonText, buttonLink }) => {
  return (
        <div className={classes.feature}>
          <h2>{header}</h2>
          <p>{children}</p>
          {buttonText && buttonLink && (
            <Link to={`/${buttonLink}`} className={classes.ctaLink}>
              <Button size="medium">{buttonText}</Button>
            </Link>
          )}
        </div>
  );
};

export default InfoBlock;