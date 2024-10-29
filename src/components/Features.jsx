import React from 'react'
import FeaturesItem from './FeaturesItem'
import './Features.css'


const Features = ({featuresList}) => {
  return (
    <div className='features-container'>
      <div className="features-image-container">
        <img src="\src\img\appfeaturesphoneimage.svg" alt="" />
      </div>

      <div className="features-text-container">
        <div className="features-text">
          <h1>App Features</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum aperiam quaerat quam voluptates voluptas. Natus itaque labore quod recusandae cumque iste vitae accusantium sapiente numquam!</p>
        </div>
        <div className="features-grid">
          {featuresList.map(feature => (
            <FeaturesItem imageSource={feature.imageSource} header={feature.header} info={feature.info}  />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features