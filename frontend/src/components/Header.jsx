import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <img src="images/logo.png" alt="LegalAid Logo" className="logo" />
        </div>
        <nav className="header-nav">
          <a href="#" className="nav-item active">Início</a>
          <a href="" className="nav-item">Assistência Jurídica</a>
          <a href="#" className="nav-item">Contato</a>
        </nav>
        <div className="header-actions">
          <a href="#" className="action-link">Entrar</a>
          <a href="#" className="action-button">Cadastrar</a>
        </div>
      </div>
    </header>
  );
};

export default Header;