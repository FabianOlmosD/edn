import React from 'react';
import '../index.css';

const Home = () => (
  <div className="video-container">
    <video autoPlay muted loop id="background-video" className="video-fluid">
  <source src="https://fabianolmosd.github.io/edn/video.MP4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

    <div className="overlay-text">
      <p className='p'>Bienvenido al sitio oficial de</p>
      <h1 className="display-1">EL DEPOSITO NORTE</h1>
    </div>
  </div>
);

export default Home;


