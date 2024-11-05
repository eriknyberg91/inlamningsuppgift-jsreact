import React, { useState } from 'react'
import './FAQItem.css'
import { useTheme } from '../contexts/ThemeContext'; 


const FAQItem = ({question, answer, id}) => {
    const [isVisible, setIsVisible] = useState(false);
    const {darkMode} = useTheme()

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    }

    return (
        <div key={id} className='faqitem-container'>
            <div className="faqitem-question-container" onClick={toggleVisibility}>
                <h3>{question}</h3>
                <button 
                    className={`arrow-button ${isVisible ? 'active' : ''}`}
                    style={{backgroundColor: darkMode ? 'darkgray' : ''}}
                >
                    <i className="fa-solid fa-chevron-down"></i>
                </button>
            </div>
            <div className={`faqitem-answer-container ${isVisible ? 'show' : ''}`}>
                <p className='faqitem-answer'>{answer}</p>
            </div>
        </div>
    )
}

export default FAQItem