import React from "react";
import "./Home.scss";
/* Component that is the homepage of the site*/

const Home = () => {
  return (
    <div className="home" data-testid="home">
      <h2>Bienvenido a la prueba de un e-commerce de AMS realizada por Javi</h2>
      <span>
        Estas en la página principal, usa el menu para moverte entre las
        distinstas secciones de la página.
      </span>
    </div>
  );
};

export default Home;
