import React from 'react'
import './Branding.css'
import BrandingItem from './BrandingItem'
import { useTheme } from '../contexts/ThemeContext'; 


const Branding = ({brandingList}) => {
  const { darkMode, toggleTheme } = useTheme();

  console.log("Inside Branding:", brandingList);
  return (
    <div className={`branding-container ${darkMode ? 'dark' : 'light'}`}>
      {brandingList.map((brand, index) => {
        console.log("Mapping brand:", brand);
        return (
          <BrandingItem 
            key={index}
            imageSource={brand.imageSource}
            type={brand.type}
            className="branding-item" 
          />
        );
      })}
    </div>
  )
}

export default Branding