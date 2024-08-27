import React from 'react';
import '../index.css';

const Videos = () => {
  const videoLinks = [
    { id: 1, title: "Cadaver EN VIVO", url: "https://www.youtube.com/embed/5hWRL2y-o7k" },
    { id: 2, title: "Queda Pendiente EN VIVO", url: "https://www.youtube.com/embed/z_fSh7WEqsU" },
    { id: 3, title: "Loli EN VIVO", url: "https://www.youtube.com/embed/BzK2rGNe2jo" },
    { id: 4, title: "Av Cordoba - PGI", url: "https://www.youtube.com/embed/GnVYD7o2trY" },
  ];

  return (
    <div className="videos-container">
      <h1 className="display-1 text-center mb-5">VIDEOS</h1>
      <div className="row">
        {videoLinks.map(video => (
          <div key={video.id} className="col-md-6 mb-4">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src={video.url} allowFullScreen title={video.title}></iframe>
            </div>
            <h5 className="text-center mt-2">{video.title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
