import React from 'react'
import './FAQ.css'
import { useState, useEffect } from 'react';
import FAQItem from './FAQItem';
import PhoneLogo from '../img/phonelogo.svg'
import MessagingLogo from '../img/messaginglogo.svg'
import { useTheme } from '../contexts/ThemeContext'; 

const FAQ = () => {

    const [faqs, setFaqs] = useState([]);
    const { darkMode } = useTheme()

  useEffect(() => {
    fetch('https://win24-assignment.azurewebsites.net/api/faq')
      .then(response => response.json())
      .then(data => {
        setFaqs(data);
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching FAQs:', error);
      });
  }, []);

  return (
    <div className={`faq-container ${darkMode ? 'dark' : 'light'}`}>
            <div className="faq-info">
            <h1>Any questions? Check out the FAQs</h1>
            <p>Still have unanswered questions and need to get in touch?</p>
            </div>

            

            <div className="faq-questions">
                {
                    faqs.map((faq) => (
                        <FAQItem question={faq.title} answer={faq.content} id={faq.id} />
                    ))
                }
            </div>

            <div class="faq-get-in-touch-container">
                    <div class="faq-contact-card">
                        <img src={PhoneLogo} alt="" />
                        <p className='faq-contact-message'>Still have questions?</p>
                        <a id="phone-contact" href="#">Contact us <i class="fa-solid fa-arrow-right"></i> </a>
                    </div>
                    <div class="faq-contact-card">
                        <img src={MessagingLogo} alt="" />
                        <p className='faq-contact-message'>Dont like phone calls?</p>
                        <a id="message-contact" href="#">Contact us <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>

            

            <div className="contact-us-button-container">
              <button>Contact us now</button>
            </div>
    </div>
  )
}

export default FAQ