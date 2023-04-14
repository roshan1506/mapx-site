import React from 'react'
import video from '../../assets/video.mp4'
import './home.css'
import Navbar from '../navbar/Navbar'
import image from "../../assets/bg-image.png";

export default function Home() {
  return (
    <>
    <div className='home'>
        <Navbar/>
        <div className='heading'>
          <h1>Explore The World, One</h1>
          <h1>NFT at a Time</h1>
        </div>

        <div className='btn'>
          <button>Download APK</button>
        </div>
        <video className='bg-video' preload="none" autoPlay loop muted >
            <source src={video}></source>
        </video>

    </div>
    </>

    
  )
}
