import React from 'react'
import './Footer.css'
import Notification from '../img/notification.svg'

const Footer = () => {
  return (
    <footer>
        <div class="footer-container">
            <div className="footer-info-container">
            <img src={Notification} alt="" />
            <h3>Subscribe to our newsletter to stay informed about latest updates</h3>
            </div>
            <div class="footer-input-container">
                <i class="fa-regular fa-envelope" id="footer-icon"></i>
                <input class="footer-input" type="text" placeholder="Your Email" />
                <button class="footer-button">Subscribe</button>
            </div>
        </div>
    </footer>
  )
}

export default Footer