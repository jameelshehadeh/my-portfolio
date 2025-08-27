import React from "react";

import Project from "./project";
import INFO from "../../data/user";
import { Link } from "react-router-dom";

import "./styles/allProjects.css";

const AllProjects = () => {
       return (
	       <div>
		       <h2 className="projects-section-header">Projects</h2>
		       <div className="all-projects-container">
			       {INFO.projects.map((project, index) => (
				       <div className="all-projects-project" key={index}>
					       <Link to={`/projects/${project.id || index}`}
						       style={{ textDecoration: 'none', color: 'inherit' }}>
						       <Project
							       logo={project.logo}
							       title={project.title}
							       description={project.description}
							       linkText={project.linkText}
							       link={project.link}
						       />
					       </Link>
				       </div>
			       ))}
		       </div>
	       </div>
       );
};

export default AllProjects;
