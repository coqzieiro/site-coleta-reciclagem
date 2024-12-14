import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Contato.css";

const Contato = () => {
  return (
    <div className="contato-container">
      <Header />
      <section className="contato-hero">
        <div className="contato-content">
          <h1 className="contato-title">Entre em Contato</h1>
          <p className="contato-description">
            Estamos prontos para ajudar você! Preencha o formulário abaixo ou entre em contato conosco diretamente por meio das nossas redes sociais.
          </p>
        </div>
      </section>

      <section className="contato-form-section">
        <h2 className="contato-form-title">Envie uma mensagem</h2>
        <form className="contato-form">
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" placeholder="Seu nome completo" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Seu email" required />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Telefone</label>
            <input type="tel" id="phone" placeholder="(00) 00000-0000" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensagem</label>
            <textarea id="message" rows="5" placeholder="Escreva sua mensagem aqui..." required></textarea>
          </div>

          <button type="submit" className="form-button">Enviar Mensagem</button>
        </form>
      </section>

      <section className="contato-infos">
        <h2 className="infos-title">Nossos Contatos</h2>
        <div className="infos-grid">
          <div className="info-item">
            <h3>Email</h3>
            <p>contato@legalaid.com</p>
          </div>
          <div className="info-item">
            <h3>Telefone</h3>
            <p>(11) 4002-8922</p>
          </div>
          <div className="info-item">
            <h3>Redes Sociais</h3>
            <p>@legalaid</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contato;