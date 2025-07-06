import ToolBlock from "../../components/organisms/ToolBlock/ToolBlock";
import classes from "./Projects.module.css";

/**
 * The Projects component renders a list of ToolBlock components representing
 * different tools with their status, description, and a link to their project
 * page.
 * 
 * @returns A JSX element representing the Projects component.
 */

const Projects = () => {
    return (
        <div>
            <div className={classes.projects}>
                <ToolBlock 
                    title="Tool 1"
                    description="Description for Tool 1"
                    projectPath="/path/to/tool1"
                    lastUpdated="19.06.2025"
                    status="In Development"
                />
                <ToolBlock 
                    title="Tool 2"
                    description="Description for Tool 2"
                    projectPath="/path/to/tool2"
                    lastUpdated="18.06.2025"
                    status="Working"
                />
                <ToolBlock 
                    title="Tool 3"
                    description="Description for Tool 3"
                    projectPath="/path/to/tool2"
                    lastUpdated="18.06.2025"
                    status="Out of Service"
                />
                <ToolBlock 
                    title="Tool 4"
                    description="Description for Tool 4"
                    projectPath="/path/to/tool4"
                    lastUpdated="18.06.2025"
                    status="Error"
                />
                <ToolBlock 
                    title="Tool 5"
                    description="Description for Tool 5"
                    projectPath="/path/to/tool5"
                    lastUpdated="18.06.2025"
                    status="Error"
                />
                <ToolBlock 
                    title="Tool 6"
                    description="Description for Tool 6"
                    projectPath="/path/to/tool6"
                    lastUpdated="18.06.2025"
                    status="Error"
                />
            </div>
        </div>
        
    );
};

export default Projects;