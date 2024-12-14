import React from "react";
import "../styles/Header.css";
import logo from "../images/logo.png";
import "../styles/Home.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="header-logo">
          <Link to="/">
            <img src={logo} alt="LegalAid Logo" className="logo" />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="header-nav">
          <a href="/" className="nav-item active">Início</a>
          <a href="/assistencia" className="nav-item">Assistência Jurídica</a>
          <a href="/contato" className="nav-item">Contato</a>
        </nav>

        {/* Action Buttons */}
        <div className="header-actions">
          <a href="/login" className="action-link">Entrar</a>
          <a href="/cadastro" className="action-button">Cadastrar</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
