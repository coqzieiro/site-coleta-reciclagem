import React, { useContext } from "react";
import "../styles/Header.css";
import logo from "../images/logo.png";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../authContext";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="header-logo">
          <Link to="/">
            <img src={logo} alt="Direito ao Direito Logo" className="logo" />
          </Link>
        </div>

        {/* Links de Navegação */}
        <nav className="header-nav">
          <Link to="/" className="nav-item">
            Início
          </Link>
          {user && user.user_type === "Cliente" && (
            <Link to="/assistencia" className="nav-item">
              Assistência Jurídica
            </Link>
          )}
          {user && user.user_type === "Cliente" && (
            <Link to="/visualizar" className="nav-item">
              Casos Jurídicos
            </Link>
          )}
          {user && user.user_type === "Advogado" && (
              <span className="nav-item">Casos Disponíveis</span>
          )}
            <Link to="/contato" className="nav-item">
                Contato
            </Link>
        </nav>

        {/* Botões de Ações */}
        <div className="header-actions">
           {!user &&  <Link to="/login" className="action-link">Entrar</Link>}
            {!user && <Link to="/cadastro" className="action-button">Cadastrar</Link>}
              {user &&
                  <button  onClick={logout}  className="action-link header-logout">Log Out</button>
              }
        </div>
      </div>
    </header>
  );
};

export default Header;