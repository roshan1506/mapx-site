import React from 'react'
import ReactPlayer from 'react-player';
import videobg from '../../assets/video.mp4';

export default function Home() {
  return (
    <div>
        <div className="background-video" style={{ zIndex }}>
      <ReactPlayer url={videobg} playing loop muted width="100%" height="100%" />
        </div>
    </div>
  )
}
