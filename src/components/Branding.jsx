import React from 'react'
import './Branding.css'
import brandlogo1 from '../img/brandlogo1.svg'
import brandlogo2 from '../img/brandlogo2.svg'
import brandlogo3 from '../img/brandlogo3.svg'
import brandlogo4 from '../img/brandlogo4.svg'
import brandlogo5 from '../img/brandlogo5.svg'
import brandlogo6 from '../img/brandlogo6.svg'

const Branding = () => {
  return (
    <div className="branding-container">
            <img class="tablet-branding" src={brandlogo1} alt="Logo of corporation using the app"/>
            <img class="tablet-branding" src={brandlogo2} alt="Logo of corporation using the app"/>
            <img class="tablet-branding" src={brandlogo3} alt="Logo of corporation using the app"/>
            <img class="tablet-branding" src={brandlogo4} alt="Logo of corporation using the app"/>
            <img class="desktop-branding" src={brandlogo5} alt="Logo of corporation using the app"/>
            <img class="desktop-branding" src={brandlogo6} alt="Logo of corporation using the app"/>
        </div>
  )
}

export default Branding