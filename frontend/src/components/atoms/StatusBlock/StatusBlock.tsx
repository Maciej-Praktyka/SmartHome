import classes from "./StatusBlock.module.css";

export interface StatusBlockProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    state: "Working" | "Out of Service" | "In Development" | "Error";
    className?: string;
}

const StatusBlock: React.FC<StatusBlockProps> = ({ children, state, className }) => {
    console.log("StatusBlock rendered with state:", state);
    return (
        <div
          className={`${classes.statusBlock} ${className || ""}`}
          data-status={state}
        >
            <span className={classes.statusDot} />
            <span className={classes.statusText}>
                {children}
            </span>
        </div>
    );
};

export default StatusBlock;
