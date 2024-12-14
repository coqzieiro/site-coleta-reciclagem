import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import "../styles/Footer.css";
import logo from "../images/logo2.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
      <div className="social-icons">
        <img src={logo} alt="LegalAid Logo" className="logo" />

          <a href="#" aria-label="Facebook" title="Facebook">
            <FaFacebook />
          </a>
          <a href="#" aria-label="Twitter" title="Twitter">
            <FaTwitter />
          </a>
          <a href="#" aria-label="LinkedIn" title="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="#" aria-label="Instagram" title="Instagram">
            <FaInstagram />
          </a>
        </div>
        <div className="footer-logo-section">          
          <div className="vertical-line"></div>
        </div>
        <div className="footer-links">
          <div className="footer-section">
            <h3><a href="#">Home</a></h3>
            <ul>
              <li><a href="#">Empregos/Casos</a></li>
              <li><a href="#">Solicitações</a></li>
              <li><a href="#">Prêmio</a></li>
              <li><a href="#">Mensagens</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3><a href="#">Perfil</a></h3>
            <ul>
              <li><a href="#">Editar perfil</a></li>
              <li><a href="#">Meu perfil</a></li>
              <li><a href="#">Quem viu</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3><a href="#">Comunidade</a></h3>
            <ul>
              <li><a href="#">Adicionar contatos</a></li>
              <li><a href="#">Pessoas que você conhece</a></li>
              <li><a href="#">Recomendações</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3><a href="#">Interesses</a></h3>
            <ul>
              <li><a href="#">Empresas</a></li>
              <li><a href="#">Grupos</a></li>
              <li><a href="#">Eventos</a></li>
              <li><a href="#">Aprendizagem</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3><a href="#">Serviços Jurídicos</a></h3>
            <ul>
              <li><a href="#">Fraudes ou enganos</a></li>
              <li><a href="#">Direito da família</a></li>
              <li><a href="#">Direito do Negócio</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright LegalAid 2024</p>
      </div>
    </footer>
  );
};

export default Footer;