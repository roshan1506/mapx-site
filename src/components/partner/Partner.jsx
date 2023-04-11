import React from 'react'
import './partner.css'
import part1 from '../../assets/part1.png'
import part2 from '../../assets/part2.png'
import part3 from '../../assets/part3.png'
import part4 from '../../assets/part4.png'
import part5 from '../../assets/part5.png'

function Partner() {
    return (
        <>

            
            <div className='partner'>
                <h6>Our Partner</h6>

                <div className='part'>
                    <div><img src={part1}></img></div>
                    <div><img src={part2}></img></div>
                    <div><img src={part3}></img></div>
                    <div><img src={part4}></img></div>
                    <div><img src={part5}></img></div>
                </div>

            </div>

            <div>
                
            </div>
        </>
    )
}

export default Partner