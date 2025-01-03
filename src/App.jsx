import React from 'react'
import Navbar from './components/Navbar'
import Showcase from './components/Showcase'
import Features from './components/Features'
import IconCard from './img/iconcard.svg'
import IconSecurity from './img/iconsecurity.svg'
import IconStat from './img/iconstat.svg'
import IconSupport from './img/iconsupport.svg'
import IconCashback from './img/iconcashback.svg'
import IconSmile from './img/iconsmile.svg'
import Branding from './components/Branding'
import HowDoesItWork from './components/HowDoesItWork'
import ProductInfo from './components/ProductInfo'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import ThemeProvider, { useTheme } from './contexts/ThemeContext'
import logoipsum from './img/logoipsum.svg'
import logoipsum1 from './img/logoipsum1.svg'
import logoipsum2 from './img/logoipsum2.svg'
import logoipsum3 from './img/logoipsum3.svg'
import logoipsum4 from './img/logoipsum4.svg'
import logoipsum5 from './img/logoipsum5.svg'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'

const App = () => {

  const { darkMode } = useTheme

  const features = 
  [
    {
      imageSource: IconCard,
      header: 'Easy Payments',
      info: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, necessitatibus.'
    },
    {
      imageSource: IconSecurity,
      header: 'Data Security',
      info: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, necessitatibus.'
    },
    {
      imageSource: IconStat,
      header: 'Cost Statistics',
      info: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, necessitatibus.'
    },
    {
      imageSource: IconSupport,
      header: 'Support 24/7',
      info: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, necessitatibus.'
    },
    {
      imageSource: IconCashback,
      header: 'Regular Cashback',
      info: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, necessitatibus.'
    },
    {
      imageSource: IconSmile,
      header: 'Top Standards',
      info: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, necessitatibus.'
    },
  ]

  const brandingImages = [
    {
      imageSource: logoipsum,
      type: 'tablet-branding'
    },
    {
      imageSource: logoipsum1,
      type: 'tablet-branding'
    },
    {
      imageSource: logoipsum2,
      type: 'tablet-branding'
    },
    {
      imageSource: logoipsum3,
      type: 'tablet-branding'
    },
    {
      imageSource: logoipsum4,
      type: 'desktop-branding'
    },
    {
      imageSource: logoipsum5,
      type: 'desktop-branding'
    },
    
  ]

  console.log("App.js brandingImages:", brandingImages);
  return (
    <div>
      <ThemeProvider>
          <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='contact' element={<Contact />}/>
            </Routes>
          <Footer />
          </BrowserRouter>
            
      </ThemeProvider>
    </div>
  )
}

export default App