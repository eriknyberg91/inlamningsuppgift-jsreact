import React from 'react'
import './showcase.css'

const Showcase = () => {
  return (
    <div className="showcase-container">
        <h1 className='showcase-header'>
            Manage All Your <br />  Money In One App
        </h1>
        <div className="showcase-content-container">
                <div className="showcase-text-container">
                <h1 className='showcase-text-header'>
            Manage All Your <br />  Money In One App
        </h1>
                    <p className="showcase-text-info">We offer you a new generation of the mobile banking.
                       <br /> Save, spend & manage money in your pocket.</p>
                    <div className="showcase-app-buttons">
                            <img src='\src\img\appstore.svg' alt="App Store button" />
                            <img src='\src\img\googleplay.svg' alt="Google Play button" />
                    </div>
                    <div className="discover-more-container">
                        <button className="discover-more-button"><i className="fa-solid fa-chevron-down"></i></button>
                        <p>Discover more</p>
                    </div>
                </div>
                <div className="showcase-image-container">
                    <img src='\src\img\phonesimageheader.svg' alt="Image of two phones with features of the app" />
                </div>
            </div>
        </div>
  )
}

export default Showcase