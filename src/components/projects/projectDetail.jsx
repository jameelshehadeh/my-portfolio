import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { useParams, useNavigate } from "react-router-dom";
import INFO from "../../data/user";
import "./styles/projectDetail.css";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = INFO.projects.find((p) => p.id === projectId);

  if (!project) {
    return <div className="project-detail-not-found">Project not found.</div>;
  }

  return (
    <div className="project-detail-container">
      <div className="project-detail-topbar">
        <button className="project-detail-back-btn" onClick={() => navigate(-1)}>
          <img src="/back-button.png" alt="Back" className="project-detail-back-img" />
        </button>
        {project.link && (project.showLink === undefined || project.showLink) && (
          <a
            href={project.link}
            className="project-detail-link top-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLink} style={{ marginRight: 10 }} />
            Visit Project
          </a>
        )}
      </div>
      <div className="project-detail-header">
        <img src={project.logo} alt={project.title} className="project-detail-logo" />
        <h1 className="project-detail-title">{project.title}</h1>
      </div>
      <p className="project-detail-description">{project.description}</p>
      {project.features && project.features.length > 0 && (
        <div className="project-detail-features">
          <h2>Features</h2>
          <ul>
            {project.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>
      )}
      {project.images && project.images.length > 0 && (
        <div className="project-detail-images">
          {project.images.map((img, idx) => (
            <img key={idx} src={img} alt={project.title + ' screenshot ' + (idx+1)} className="project-detail-image" />
          ))}
        </div>
      )}
      {project.videos && project.videos.length > 0 && (
        <div className="project-detail-videos">
          {project.videos.map((video, idx) => (
            <video key={idx} className="project-detail-video" controls>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ))}
        </div>
      )}
      {project.details && <div className="project-detail-body">{project.details}</div>}
    </div>
  );
};

export default ProjectDetail;
