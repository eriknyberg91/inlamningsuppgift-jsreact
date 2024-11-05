import React, { useState } from 'react'
import './Footer.css'
import Notification from '../img/notification.svg'
import { useTheme } from '../contexts/ThemeContext'; 


const Footer = () => {
  const [email, setEmail] = useState('')
  const [validationMessage, setValidationMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  const {darkMode} = useTheme()

  const validateForm = async (e) => {
    e.preventDefault()
    
    if (email.trim() === '') {
      setValidationMessage('Enter a valid email')
      setIsSuccess(false)
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setValidationMessage('Please enter a valid email address')
      setIsSuccess(false)
      return
    }

    try {
      const response = await fetch('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email })
      })

      if (response.ok) {
        setValidationMessage('Subscription complete!')
        setIsSuccess(true)
        setEmail('') 
      }
    } catch (error) {
      setValidationMessage('Email validation failed')
      setIsSuccess(false)
    }
  }

  return (
    <form onSubmit={validateForm} noValidate>
      <div className={`footer-container ${darkMode ? 'dark' : 'light'}`}>
        <div className="footer-info-container">
          <img src={Notification} alt="" />
          <h3>Subscribe to our newsletter to stay informed about latest updates</h3>
        </div>
        <div className="footer-input-container">
          <i className="fa-regular fa-envelope" id="footer-icon"></i>
          <input 
            onChange={(e) => setEmail(e.target.value)}
            className="footer-input"
            type="email"
            placeholder="Your Email"
            value={email}
            style={{backgroundColor: darkMode ? 'black' : '#FFF'}}
          />
          <button className="footer-button">Subscribe</button>
          
        </div>
        {validationMessage && (
            <div className="validation-message" style={{ marginTop: '10px' }}>
              {isSuccess ? (
                <i className="fa-solid fa-check" style={{ color: '#63E6BE', marginRight: '5px' }}></i>
              ) : (
                <i className="fa-solid fa-triangle-exclamation" style={{ color: '#e50632', marginRight: '5px' }}></i>
              )}
              <span style={{ color: isSuccess ? '#2ea380' : '#e50632' }}>
                {validationMessage}
              </span>
            </div>
          )}
      </div>
    </form>
  )
}

export default Footer