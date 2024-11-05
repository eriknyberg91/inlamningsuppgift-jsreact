import React from 'react'
import './Testimonials.css'
import Albert from '../img/testimonialalbert.svg'
import Fannie from '../img/testimonialfannie.svg'
import { useState, useEffect } from 'react'
import { useTheme } from '../contexts/ThemeContext'; 

const Testimonials = () => {

    const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch('https://win24-assignment.azurewebsites.net/api/testimonials')
      .then(response => response.json())
      .then(data => {
        setTestimonials(data);
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching Testimonials:', error);
      });
  }, []);

  const { darkMode } = useTheme()

  return (
    <div className={`testimonials-container ${darkMode ? 'dark' : 'light'}`}>
            <div class="testimonials-container-text">
                <h1>Clients are loving our App</h1>
            </div>
            <div className={`testimonials-clients-container ${darkMode ? 'dark' : 'light'}`}>
                {testimonials.map(client => (
                        <div key={client.id} className={`testimonial-item ${darkMode ? 'dark' : 'light'}`}>
                        <div className="testimonial-quote-icon">
                            <i className="fa-solid fa-quote-left"></i>
                        </div>
                        <div className="testimonial-content">
                            <div className="testimonial-stars">
                                {(() => {
                                    const stars = [];
                                    for(let i = 0; i < client.starRating; i++) {
                                        stars.push(<i key={i} className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>);
                                    }
                                    return stars;
                                })()}
                            </div>
                            <p>{client.comment}</p>
                            <div className="testimonial-client-info">
                                <div className="testimonial-client-image">
                                    <img src={client.avatarUrl} alt="" />
                                </div>
                                <div className="testimonial-client-text">
                                    <h2 style={{color: darkMode ? '#FFF' : 'black'}} id='client-author'>{client.author}</h2>
                                    <h3>{client.jobRole}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
    
                ))}
            </div>
        </div>
  )
}

export default Testimonials