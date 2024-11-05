import React from 'react'
import './ProductInfo.css'
import ProductInfo1 from '../img/product-info1.svg'
import ProductInfo2 from '../img/product-info2.svg'
import IconCard from '../img/iconcard.svg'
import { useTheme } from '../contexts/ThemeContext'; 


const ProductInfo = () => {
    const { darkMode } = useTheme()
  return (
    <div className={`product-container ${darkMode ? 'dark' : 'light'}`}>

        <div class="product-info-container">
            <div class="product-info-text">
                <h1>Make your money transfer simple and clear</h1>
                <ul>
                    <li> <i class="fa-regular fa-circle-check"></i>Banking transactions are free for you</li>
                    <li><i class="fa-regular fa-circle-check"></i>No monthly cash commission</li>
                    <li><i class="fa-regular fa-circle-check"></i>Manage payments and transactions online</li>
                </ul>
                <a id="auth-signin" class="btn-primary" href="#">
                    <span>Learn more</span>
                    <i class="fa-solid fa-arrow-right"></i>
                </a>
            </div>
            <div class="product-info-image">
                <img src={ProductInfo1} alt="Image of budget diagram" />
            </div>
            
        </div>
        <div class="product-info-container">
            <div class="product-info-image">
                <img src={ProductInfo2} alt="" />
            </div>
            <div class="product-info-text">
                <h1>Receive payment from international bank details</h1>
                <div class="product-details-container">
                    <div class="product-details">
                        <img src={IconCard} alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, distinctio.</p>
                    </div>
                    <div class="product-details">
                        <img src={IconCard} alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, distinctio.</p>
                    </div>
                </div>
                
                <a id="auth-signin" class="btn-primary" href="#">
                    <span>Learn more</span>
                    <i class="fa-solid fa-arrow-right"></i>
                </a>
            </div>
            
        </div>
    </div>
  )
}

export default ProductInfo