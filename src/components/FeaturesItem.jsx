import React from 'react'
import './FeaturesItem.css'

const FeaturesItem = ({imageSource, header, info}) => {
  return (
    <div className="container">
        <div className="img-container">
          <img src={imageSource} alt="" />
        </div>
        <div className="text-container">
          <h2>{header}</h2>
          <p>{info}</p>
        </div>
    </div>
  )
}

export default FeaturesItem