import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Home</h3>
          <ul>
            <li>Empregos/Casos</li>
            <li>Solicitações</li>
            <li>Prêmio</li>
            <li>Mensagens</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Perfil</h3>
          <ul>
            <li>Editar perfil</li>
            <li>Meu perfil</li>
            <li>Quem viu</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Comunidade</h3>
          <ul>
            <li>Adicionar contatos</li>
            <li>Pessoas que você conhece</li>
            <li>Recomendações</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Interesses</h3>
          <ul>
            <li>Empresas</li>
            <li>Grupos</li>
            <li>Eventos</li>
            <li>Aprendizagem</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Serviços Jurídicos</h3>
          <ul>
            <li>Fraudes ou enganos</li>
            <li>Direito da família</li>
            <li>Direito do Negócio</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-logo">
          <img src="./images/logo.png" alt="LegalAid Logo" />
          <div className="social-icons">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>
        <p>Copyright LegalAid 2024</p>
      </div>
    </footer>
  );
};

export default Footer;