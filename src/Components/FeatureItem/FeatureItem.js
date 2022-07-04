import React from 'react'
import './featureitem.css'

const FeatureItem = ({ icon, label, description }) => {
  return (
    <div className="feature-item">
      <img src={icon} alt="Chat Icon" className="feature-icon" />
      <h3 className="feature-item-title">{label}</h3>
      <p>{description}</p>
    </div>
  )
}

export default FeatureItem
