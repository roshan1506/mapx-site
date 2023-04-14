import React from 'react'
import './overview.css'
import Eclipse1 from '../../assets/eclipse1.png'
import Eclipse2 from '../../assets/eclipse2.png'
import Eclipse3 from '../../assets/eclipse3.png'
const Overview = () => {
  return (
    <div className='overview' id='overview'>
        <h1 className='heading'>Why MapX</h1>

        <div className='cards' >
            {/* <div> */}
                
            <div className='card'>
            <img src={Eclipse1} className='img1'></img>
            <img src={Eclipse2} className='img2'></img>

                <h2>Guarantee Foot <br/>Traffic</h2>
                <p>Using NFT vouchers, consumers
                    need to visit the store to use these
                    vouchers, guaranteeing foot
                    traffic sales</p>
            
            {/* </div> */}
            </div>
            <div className='card'>
            <img src={Eclipse1} className='img3'></img>
            <img src={Eclipse3} className='img4'></img>
                <h2>Ecofriendly</h2>
                <p>reduces the gas fees significantly
                    Lorem ipsum dolor sit amet
                    consectetur. Vitae molestie nisl
                    mattis lacus vestibulum morbi in.</p>
            </div>
            <div className='card'>
            <img src={Eclipse1} className='img1'></img>
            <img src={Eclipse2} className='img2'></img>
                <h2>Pay For<br/>Conversion</h2>
                <p>MapX only charge businesses for
                    each new NFT minted. Lorem ipsum
                     dolor sit amet consectetur. Eu
                     ullamcorper vitae gravida</p>
            </div>
            <div className='card'>
            <img src={Eclipse1} className='img3'></img>
            <img src={Eclipse3} className='img4'></img>
                <h2>Real Utility Of<br/> Vouchers</h2>
                <p>Using NFTs as vouchers, consumers
                    can use these vouchers to achieve
                    real life utility. Lorem ipsum dolor sit 
                    amet consectetur. </p>
            </div>
        </div>
    </div>

  )
}

export default Overview