import React from 'react'
import './footer.css'
import Logo from "../../assets/logo.png"
import { Icon } from '@iconify/react';
import img from "../../assets/img.png"
const Footer = () => {
    return (
        <div className='footer' id='contact'>
            <div className='ftr'>
                <img className='footer-logo' src={Logo}></img>
                <h2>Join The Community</h2>
                <br/>

                <div className='social'>
                    <div className='social-sub'>
                        <a href="mailto:mapx25@gmail.com" >
                        <Icon icon="ic:outline-email" color="white" width="50" height="50" />
                        </a>
                    </div>
                    <div className='social-sub'>
                        <a href="https://twitter.com/Mapx25">
                        <Icon icon="uil:twitter-alt" color="white" width="50" height="50" />
                        </a>
                    </div>
                    <div className='social-sub'>
                        <a href="https://www.linkedin.com/company/mapx25/">
                        <Icon icon="akar-icons:linkedin-v2-fill" color="white" width="50" height="50" />
                        </a>
                    </div>
                    <div className='social-sub'>
                        <a href="https://discord.gg/4ceuUaWD">
                        <Icon icon="teenyicons:discord-outline" color="white" width="50" height="50" />
                        </a>
                    </div>
                </div>
            <img className='bg-image' src={img}></img>
            </div>
        </div>
    )
}

export default Footer
