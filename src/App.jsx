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
import ThemeProvider from './contexts/ThemeContext'

const App = () => {

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
  return (
    <div>
      <ThemeProvider>
            <Navbar />
            <Showcase />
            <Branding />
            <Features featuresList={features} />
            <HowDoesItWork />
            <ProductInfo />
            <Testimonials />
            <FAQ />
            <Footer />
      </ThemeProvider>
    </div>
  )
}

export default App