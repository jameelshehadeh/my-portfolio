import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
       const { logo, title, description, linkText } = props;

       return (
	       <div className="project">
		       <div className="project-container">
			       <div className="project-logo">
				       <img src={logo} alt="logo" />
			       </div>
			       <div className="project-title">{title}</div>
			       <div className="project-description">{description}</div>
		       </div>
	       </div>
       );
};

export default Project;
