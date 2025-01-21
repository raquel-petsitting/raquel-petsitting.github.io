import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-20 h-full p-4 *:py-8 flex flex-col justify-center">
      <Link to="/" alt="Home">
        Home
      </Link>
      <Link to="/simulator">Simulador</Link>
      <a href="">Sobre</a>
      <a href="">Contactos</a>
      <a href="">Contactos</a>
    </nav>
  );
};

export default Navbar;
