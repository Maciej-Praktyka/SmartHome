import { Link } from "react-router-dom";
import classes from "./ToolBlock.module.css";
import Button from "../../atoms/Button/Button";
import StatusBlock from "../../atoms/StatusBlock/StatusBlock";
import { IconSettings } from "@tabler/icons-react";

export interface ToolBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  projectPath: string;
  status: "Working" | "Out of Service" | "In Development" | "Error";
  lastUpdated?: string;
}

const ToolBlock: React.FC<ToolBlockProps> = ({
  title,
  description,
  projectPath,
  status,
  lastUpdated,
  ...rest
}) => {
  return (
    <div className={classes.toolBlock} {...rest}>
      <div className={classes.imageWrapper}>
        <IconSettings className={classes.icon} size={250} />
        {status && (
          <StatusBlock state={status} className={classes.statusOverlay}>
            {status}
          </StatusBlock>
        )}
      </div>

      <h3>{title}</h3>
      <p>{description}</p>
      {lastUpdated && (
        <p className={classes.updated}>Updated: {lastUpdated}</p>
      )}
      <Link to={projectPath} className={classes.button}>
        <Button size="small">View Project</Button>
      </Link>
    </div>
  );
};

export default ToolBlock;
