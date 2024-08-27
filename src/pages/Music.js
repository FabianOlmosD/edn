import React from 'react';
import '../index.css';
import haypulso from '../images/haypulso.jpg';
import pequeñas from '../images/pequeñas.jpg';

const Music = () => {
  const albums = [
    {
      id: 1,
      title: "Pequeñas Grandes Ilusiones",
      cover: pequeñas,
      spotifyLink: "https://open.spotify.com/intl-es/album/794UPhewJriTdVCtVLLUbU",
      tracks: [
        { id: 1, title: "Cadaver", url: "https://open.spotify.com/embed/track/31gfx0c6aK0cai7lU0cXVF" },
        { id: 2, title: "La media", url: "https://open.spotify.com/embed/track/09NHeGCbNgVInvZxzCOldp" },
        { id: 3, title: "Prediccion", url: "https://open.spotify.com/embed/track/64xcPAkp4fR8Y9CemZ6lJt" },
        { id: 4, title: "Av Cordoba", url: "https://open.spotify.com/embed/track/1375X8dejwwianAHuBWhp6" },
        { id: 5, title: "Mas alla", url: "https://open.spotify.com/embed/track/0EMUdCUb8DmFcQbkhOuPSP" },
        { id: 6, title: "Adios", url: "https://open.spotify.com/embed/track/3ZAn91hBc3ZG5hZNMmydty" },
        { id: 7, title: "Basta", url: "https://open.spotify.com/embed/track/0dqdHJ2nkE5eILGx9C6OwN" },
        { id: 8, title: "Sangre", url: "https://open.spotify.com/embed/track/0Hklgo2DE2JCHD3oJvDw4E" },
        { id: 9, title: "Maquillaje", url: "https://open.spotify.com/embed/track/5oRxyRZSs40h1skoXnqTys" },
        { id: 10, title: "Al frente", url: "https://open.spotify.com/embed/track/35gWjWZOIUzyZb6QYZ2LuP" },
      ]
    },
    {
      id: 2,
      title: "Hay Pulso",
      cover: haypulso,
      spotifyLink: "https://open.spotify.com/intl-es/album/0lKKoVv6UhgI7zRjkHSIOy",
      tracks: [
        { id: 1, title: "Queda pendiente", url: "https://open.spotify.com/embed/track/0uL3xgI5N4ooqBh31pdphr" },
        { id: 2, title: "Inseparables", url: "https://open.spotify.com/embed/track/1YmoFb5RxsTK8XXW2uicnJ" },
        { id: 3, title: "Distinto", url: "https://open.spotify.com/embed/track/7BrKMXTFEKRcC37ICaatYf" },
        { id: 4, title: "De pie", url: "https://open.spotify.com/embed/track/5mEQilXVGaFPLmTfQLgXfQ" },
        { id: 5, title: "Loli", url: "https://open.spotify.com/embed/track/1Os5kxgfjt6o7qZe1VCfws" },
        { id: 6, title: "El hiperpillo", url: "https://open.spotify.com/embed/track/7ohgb7E55j2SsQF8nkS9kK" },
        { id: 7, title: "Deuda", url: "https://open.spotify.com/embed/track/2fEUTnpcfvNm2PwuBimBFz" },
        { id: 8, title: "Desmemoriar", url: "https://open.spotify.com/embed/track/5MnDP5twl5zJUar4mDinex" },
        { id: 9, title: "Cansada", url: "https://open.spotify.com/embed/track/6JE7L7f0XKHuYNr3CtlphM" },
        { id: 10, title: "Incoloro", url: "https://open.spotify.com/embed/track/4hV8db7WHs4EfGz4x2mOGG" },
      ]
    },
  ];

  return (
    <div className="music-container">
      <h1 className="display-1 text-center mb-5">MÚSICA</h1>
      <div className="albums">
        {albums.map(album => (
          <div key={album.id} className="album">
            <img src={album.cover} alt={album.title} className="album-cover" />
            <h3 className="album-title">{album.title}</h3>
            <div className="tracks">
              {album.tracks.map(track => (
                <div key={track.id} className="track-item">
                  <h5>{track.title}</h5>
                  <iframe
                    src={track.url}
                    width="100%"
                    height="80"
                    frameBorder="0"
                    allow="encrypted-media"
                    title={track.title}
                  ></iframe>
                </div>
              ))}
            </div>
            <div className="spotify-link">
              <a href={album.spotifyLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Escuchar en Spotify
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Music;





