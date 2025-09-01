import React from "react";
import "./styles/featureCard.css";


const FeatureCard = ({ image, video, title, description }) => (
  <div className="feature-card">
    {video ? (
      <video className="feature-card-image" controls>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    ) : (
      <img src={image} alt={title} className="feature-card-image" />
    )}
    <div className="feature-card-content">
      <h3 className="feature-card-title">{title}</h3>
      <p className="feature-card-description">{description}</p>
    </div>
  </div>
);

export default FeatureCard;
