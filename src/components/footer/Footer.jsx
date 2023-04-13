import React from 'react'
import './footer.css'
import Logo from "../../assets/logo.png"
import { Icon } from '@iconify/react';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='ftr'>
                <img className='footer-logo' width={180} src={Logo}></img>
                <h2>Join The Community</h2>
                <br/>

                <div className='social'>
                    <div className='social-sub'>
                        <Icon icon="ic:outline-email" color="white" width="50" height="50" />
                    </div>
                    <div className='social-sub'>
                        <Icon icon="uil:twitter-alt" color="white" width="50" height="50" />
                    </div>
                    <div className='social-sub'>
                        <Icon icon="akar-icons:linkedin-v2-fill" color="white" width="50" height="50" />
                    </div>
                    <div className='social-sub'>
                        <Icon icon="teenyicons:discord-outline" color="white" width="50" height="50" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer