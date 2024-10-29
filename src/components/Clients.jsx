import React from 'react'
import './Clients.css'
import Albert from '../img/testimonialalbert.svg'
import Fannie from '../img/testimonialfannie.svg'

const Clients = () => {
  return (
    <div class="clients-container">
            <div class="clients-container-text">
                <h1>Clients are loving our App</h1>
            </div>
            <div class="client-card">
                <img src={Albert} alt="" />
            </div>
            <div class="client-card">
                <img src={Fannie} alt="" />
            </div>
        </div>
  )
}

export default Clients