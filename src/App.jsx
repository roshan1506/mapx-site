import React, {lazy} from 'react'
import Home from './components/home/Home'
import Partner from './components/partner/Partner'
import Description from './components/description/Description'
import Overview from './components/overview/Overview'
import Footer from './components/footer/Footer'
import './App.css'

// const 

const App = () => {
  return (
    <div className='App'>
      <Home/>
      <Partner/>
      <Description/>
      <Overview/>
      <Footer/>
    </div>
  )
}

export default App
