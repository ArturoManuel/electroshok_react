import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="header">
      {/* Nivel 1: logo centrado */}
      <div className="header-logo">
        <Link to="/">
          <img src="/assets/images/Logo.svg" alt="Electroshok Logo" />
        </Link>
      </div>

      {/* Nivel 2: input izquierda - login/derecha */}
      <div className="header-row">
        <div className="search-bar">
          <input type="text" placeholder="Buscar productos" />
          <button type="button">
            <img src="/assets/images/icon_search.svg" alt="Buscar" />
          </button>
        </div>

        <div className="user-actions">
          <Link to="/login" className="login">
            <i className="fa-solid fa-user"></i>
            <span>Iniciar sesión</span>
          </Link>
          <Link to="/carrito" className="cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
        </div>
      </div>

      {/* Nivel 3: categorías */}
      <nav className="header-nav">
        <div className="nav-desktop">
          <button>Celulares</button>
          <button>Tablets</button>
          <button>Laptops</button>
          <button>PC</button>
          <button>Accesorios</button>
        </div>
        <div className="nav-mobile">
          <button className="nav-toggle" onClick={toggleMobileMenu}>
            <i className="fa-solid fa-bars"></i> <span>Categorias</span>
          </button>
          <div className={`nav-mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <button>Celulares</button>
            <button>Tablets</button>
            <button>Laptops</button>
            <button>PC</button>
            <button>Accesorios</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;