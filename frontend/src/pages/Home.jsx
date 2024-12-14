import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Home.css";
import "../styles/Main.css";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <section className="hero-section">
        <div className="hero-content">
          <h1>LegalAid Sempre com você!</h1>
          <p>Lideramos novas iniciativas e prestamos serviços jurídicos e orientação para advogados novos e antigos...</p>
          <div className="services">
            <span>Direito da família</span>
            <span>Lei de negócios</span>
            <span>Direito de trânsito</span>
          </div>
        </div>
        <div className="form-container">
          <h2>Faça uma solicitação!</h2>
          <form>
            <input type="text" placeholder="Nome" />
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Celular" />
            <select>
              <option>Assunto</option>
              <option>Pensão</option>
            </select>
            <textarea placeholder="Informações adicionais"></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </section>
      <section className="stats">
        <div>
          <h3>170,000+</h3>
          <p>Clientes confiáveis</p>
        </div>
        <div>
          <h3>N200 B</h3>
          <p>Recuperado</p>
        </div>
        <div>
          <h3>99%</h3>
          <p>Casos de sucesso</p>
        </div>
        <div>
          <h3>11</h3>
          <p>Casos de injúria</p>
        </div>
      </section>
      <section className="services">
        <h2>Serviços que oferecemos</h2>
        <p>Oferecemos uma ampla gama de serviços aos nossos clientes...</p>
        <div className="services-list">
          <div>Fraudes ou enganos</div>
          <div>Crimes federais de drogas</div>
          <div>Fiança e Mandados</div>
          <div>Crimes relacionados ao trânsito</div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;