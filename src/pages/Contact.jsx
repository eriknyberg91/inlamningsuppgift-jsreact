import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './ContactPage.css';
import ThemeProvider, { useTheme } from '../contexts/ThemeContext'

const ContactPage = () => {

  //TODO: Implement darkmode
  
  const [isMapLoaded, setIsMapLoaded] = React.useState(false);
  const [formData, setFormData] = React.useState({
    fullName: '',
    email: '',
    specialist: ''
  });

  const mapCenter = {
    lat: 37.7391,
    lng: -122.4040
  };

  const markers = [
    {
      position: { lat: 37.7391, lng: -122.4040 },
      title: "Location 1"
    },
    {
      position: { lat: 37.7368, lng: -122.4089 },
      title: "Location 2"
    }
  ];

  const mapStyles = {
    height: "400px",
    width: "100%",
    borderRadius: "8px"
  };

  const handleMapLoad = React.useCallback((map) => {
    setIsMapLoaded(true);
    console.log("Map loaded");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-left">
        <h1>Contact Us</h1>
        
        <div className="contact-section">
          <div className="contact-item">
          <button className="icon-button">
             <i className="fa-regular fa-envelope"></i>
          </button>
            <div className="contact-content">
              <h3>Email us</h3>
              <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
              <a href="#" className="contact-link">Leave a message →</a>
            </div>
          </div>

          <div className="contact-item">
            <div className="icon-button">
            <i className="fa-solid fa-user-plus"></i>
            </div>
            <div className="contact-content">
              <h3>Careers</h3>
              <p>Interested in joining our team? Check our available positions.</p>
              <a href="#" className="contact-link">View job opportunities →</a>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-right">
        <div className="form-container">
          <h2>Get Online Consultation</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="fullName"
                placeholder="Full name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <select
                name="specialist"
                value={formData.specialist}
                onChange={handleChange}
                required
              >
                <option value="">Specialist</option>
                <option value="general">General Practitioner</option>
                <option value="cardio">Cardiologist</option>
                <option value="dental">Dentist</option>
              </select>
            </div>

            <button type="submit" className="submit-btn">Make an appointment</button>
          </form>
        </div>
      </div>

      <div className="bottom-section">
        <div className="map-container">
          <LoadScript googleMapsApiKey="AIzaSyDe4H4z2Oe7PkhEBjYfaejx-O0B5qN00kc">
            <GoogleMap
              mapContainerStyle={mapStyles}
              zoom={15}
              center={mapCenter}
              onLoad={handleMapLoad}
            >
              {markers.map((marker, index) => (
                <Marker
                  key={index}
                  position={marker.position}
                  title={marker.title}
                />
              ))}
            </GoogleMap>
          </LoadScript>
        </div>

        <div className="medical-centers">
          <div className="center">
            <h3>Medical Center 1</h3>
            <div className="center-text">
              <i className="fa-solid fa-location-dot"></i>
              <p>437 Washington Ave, Manchester Kentucky 39495</p>
            </div>
            <div className="center-text">
              <i className="fa-solid fa-phone"></i>
              <p className="phone">(603) 555-0123</p>
            </div>
            <div className="center-text">
              <i className="fa-solid fa-clock"></i>
              <div className="hours-container">
                <p className="hours">Mon-Fri: 8:00 am - 17:00 pm</p>
                <p className="hours">Sat-Sun: 10:00 am - 20:00 pm</p>
              </div>
            </div>
          </div>

          <div className="center">
            <h3>Medical Center 2</h3>
            <div className="center-text">
              <i className="fa-solid fa-location-dot"></i>
              <p>5146 Bogisich Island New Jersey 45282</p>
            </div>
            <div className="center-text">
              <i className="fa-solid fa-phone"></i>
              <p className="phone">(603) 555-0123</p>
            </div>
            <div className="center-text">
              <i className="fa-solid fa-clock"></i>
              <div className="hours-container">
                <p className="hours">Mon-Fri: 8:00 am - 17:00 pm</p>
                <p className="hours">Sat-Sun: 10:00 am - 20:00 pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="social-links">
        <a href="#" className="social-icon"><i className="fab fa-facebook"></i></a>
        <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
        <a href="#" className="social-icon"><i className="fab fa-linkedin"></i></a>
        <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
      </div>
    </div>
  );
};

export default ContactPage;