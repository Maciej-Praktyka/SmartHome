import type { Size } from "../../../types/component.types";
import classes from "./Button.module.css";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    size?: Size;

}

const Button: React.FC<ButtonProps> = ({children, size,...rest}) => {
    return (
        <button 
            className={classes.button}
            data-size={size}
            {...rest}
        >
                {children}
        </button>
    )
}

export default Button;