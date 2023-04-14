import React, {Suspense, lazy} from 'react'
// import Home from './components/home/Home'
// import Partner from './components/partner/Partner'
// import Description from './components/description/Description'
// import Overview from './components/overview/Overview'
// import Footer from './components/footer/Footer'
import './App.css'
import image from "./assets/bg-image.png"
const Home = lazy(() => import('./components/home/Home'));
const Partner = lazy(() => import('./components/partner/Partner'));
const Description = lazy(() => import('./components/description/Description'));
const Overview = lazy(() => import('./components/overview/Overview'));
const Footer = lazy(() => import('./components/footer/Footer'));

const App = () => {
  return (
    <div className='App'>
      <Suspense fallback={<img src={image}></img>}>
        <Home/>
        <Partner/>
        <Description/>
        <Overview/>
        <Footer/>
      </Suspense>
    </div>
  )
}

export default App
