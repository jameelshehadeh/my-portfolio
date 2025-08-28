import React from "react";
import "./styles/featureCard.css";

const FeatureCard = ({ image, title, description }) => (
  <div className="feature-card">
    <img src={image} alt={title} className="feature-card-image" />
    <div className="feature-card-content">
      <h3 className="feature-card-title">{title}</h3>
      <p className="feature-card-description">{description}</p>
    </div>
  </div>
);

export default FeatureCard;
