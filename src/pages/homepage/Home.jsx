import React from 'react';
import './Home.scss';
const Home = () => {
  return (
    <div className='home' data-testid='home'>
      <h2>Bienvenido a la pruebade un e-commerce de AMS realizada por Javi</h2>
      <span>
        Estas en la página principal, usa el menu para moverte entre las
        distinstas secciones de la página.
      </span>
    </div>
  );
};

export default Home;
