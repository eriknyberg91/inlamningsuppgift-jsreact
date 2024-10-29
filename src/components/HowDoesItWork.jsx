import React from 'react'
import './HowDoesItWork.css'
import Iphone12Pro1 from '../img/iPhone12Pro1.svg'
import Iphone12Pro2 from '../img/iPhone12Pro2.svg'
import Iphone12Pro3 from '../img/iPhone12Pro3.svg'

const HowDoesItWork = () => {
  return (
    <div class="how-does-it-work-container">
            <h1>How does it work?</h1>
            <div class="how-does-it-work-images-container">
                <img src={Iphone12Pro1} className='howdoesitwork-desktop' alt="Image of phone with budget history"/>
                <img src={Iphone12Pro3} className='howdoesitwork-tablet' alt="Image of contacts and money transfer shortcut"/>
                <img src={Iphone12Pro2} className='howdoesitwork-mobile' alt="Image of phone with transaction history"/>
            </div>
            <div class="how-does-it-work-text-container">
                <h2>Transfers to people from your contact list</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatibus libero fugiat repudiandae esse quibusdam iusto numquam dignissimos modi cumque?</p>
            </div>
        </div>
  )
}

export default HowDoesItWork