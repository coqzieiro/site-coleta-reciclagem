import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/Home.css";
import "../styles/Main.css";

import gtpLogo from "../images/gtp.png";
import hisenseLogo from "../images/hisense.png";
import olxLogo from "../images/olx.png";
import sorrisoLogo from "../images/sorriso.png";
import woofinLogo from "../images/woofin.png";

import pedro from "../images/pedro-ibanez.jpeg";
import raymond from "../images/raymond.jpg";
import yuli from "../images/yuli.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <section className="hero-section">
        <div className="hero-content">
          <h4 className="hero-subtitle">Direito</h4>
          <h1 className="hero-title">LegalAid Sempre com você!</h1>
          <p className="hero-description">
            Lideramos novas iniciativas e prestamos serviços jurídicos e orientação
            para advogados novos e antigos, e ajudar a aumentar suas oportunidades
            de obter justiça nos principais locais, regionais e globais.
          </p>
          <div className="services-tags">
            <span>Direito da família</span>
            <span>Lei de negócios</span>
            <span>Direito de trânsito</span>
          </div>
        </div>
        <div className="form-container">
          <h2>Faça uma solicitação!</h2>
          <form>
            <input type="text" placeholder="Nome" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Celular" required />
            <select required>
              <option value="">-</option>
              <option value="pensão">Pensão</option>
              <option value="contrato">Contrato</option>
              <option value="familiar">Familiar</option>
            </select>
            <textarea placeholder="Informações adicionais"></textarea>
            <p className="form-disclaimer">
              Ao clicar em Enviar você concorda com os <a href="#">políticas de uso</a> da plataforma.
            </p>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </section>

      <section className="stats">
        <h2 className="stats-title">Cada cliente é importante</h2>
        <p className="stats-subtitle">
          Priorizamos todos os casos e mantemos nossos clientes seguros.
        </p>
        <div className="stats-grid">
          <div className="stats-item">
            <div className="stats-icon stats-icon-green"></div>
            <h3>170,000+</h3>
            <p>Clientes confiáveis</p>
          </div>
          <div className="stats-item">
            <div className="stats-icon stats-icon-blue"></div>
            <h3>N200 B</h3>
            <p>Recuperado</p>
          </div>
          <div className="stats-item">
            <div className="stats-icon stats-icon-orange"></div>
            <h3>99%</h3>
            <p>Casos de sucesso</p>
          </div>
          <div className="stats-item">
            <div className="stats-icon stats-icon-purple"></div>
            <h3>11</h3>
            <p>Casos de injúria</p>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h2 className="testimonials-title">O que nossos clientes estão dizendo?</h2>
        <div className="testimonials-carousel">
          <div className="testimonial-card">
            <p>
              Nossa equipe trabalha na frispes há quase 2 meses porque nosso escritório ainda está fechado.
              Durante o trabalho no frispes, sentimos uma nova experiência, podemos sentir trabalhar com um
              espaço bonito, moderno e confortável. E café aconchegante com internet de alta velocidade lá.
              Obrigado por frispes e equipe.
            </p>
            <img src={pedro} alt="Pedro Ibanez" className="author-photo" />
            <div className="testimonial-author">
              <h4>Pedro Ibanez</h4>
              <span>UI Designer no Google</span>
            </div>
          </div>

          <div className="testimonial-card">
            <p>
              A internet de alta velocidade nos frispes era tão incrível. Posso obter a melhor experiência ao
              fazer videochamadas com meus clientes. Frispes tem uma área de estacionamento espaçosa e segura,
              é disso que eu preciso porque trabalhei como freelancer por muito tempo.
            </p>
            <img src={raymond} alt="Raymond Thual" className="author-photo" />
            <div className="testimonial-author">
              <h4>Raymond Thual</h4>
              <span>Freelancer Profissional</span>
            </div>
          </div>

          <div className="testimonial-card">
            <p>Apenas três palavras: Frispes é incrível!</p>
            <img src={yuli} alt="Yuli Berlian" className="author-photo" />
            <div className="testimonial-author">
              <h4>Yuli Berlian</h4>
              <span>IOS Dev na Tokopedia</span>
            </div>
          </div>
        </div>
        <div className="carousel-navigation">
          <button className="nav-button prev">&larr;</button>
          <button className="nav-button next">&rarr;</button>
        </div>
      </section>

      <section className="services">
        <h2 className="services-title">Serviços que oferecemos</h2>
        <p className="services-subtitle">
          Oferecemos uma ampla gama de serviços aos nossos clientes e vamos o
          comprimento extra para ter certeza a justiça é feita.
        </p>
        <div className="services-grid">
          <div className="service-item">
            <div className="service-icon">
              <i className="fas fa-exclamation-circle"></i>
            </div>
            <h3>Fraudes ou enganos</h3>
            <p>
              Atendemos clientes com solicitações de fraude e os ajudamos em
              recuperar seu dinheiro e propriedades.
            </p>
          </div>
          <div className="service-item">
            <div className="service-icon">
              <i className="fas fa-prescription-bottle-alt"></i>
            </div>
            <h3>Crimes federais de drogas</h3>
            <p>
              Atendemos clientes com solicitações de crimes de drogas e os ajudamos
              em levá-los de volta para sua casa e entes queridos.
            </p>
          </div>
          <div className="service-item">
            <div className="service-icon">
              <i className="fas fa-gavel"></i>
            </div>
            <h3>Fiança e Mandados</h3>
            <p>
              Atendemos clientes com pedidos de fiança e os ajudamos em levá-los de
              volta para sua casa e entes queridos.
            </p>
          </div>
          <div className="service-item">
            <div className="service-icon">
              <i className="fas fa-car"></i>
            </div>
            <h3>Crimes relacionados ao trânsito</h3>
            <p>
              Atendemos clientes com solicitações relacionadas ao tráfego e os
              ajudamos em obter sua licença de volta.
            </p>
          </div>
        </div>
      </section>

      <section className="sponsors-carousel">
        <h2>Patrocinadores</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          spaceBetween={20}
          slidesPerView={2}
          className="swiper-container"
        >
          <SwiperSlide>
            <img src={gtpLogo} alt="GTP Logo" className="sponsor-logo" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={hisenseLogo} alt="Hisense Logo" className="sponsor-logo" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={olxLogo} alt="OLX Logo" className="sponsor-logo" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sorrisoLogo} alt="Sorriso Logo" className="sponsor-logo" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={woofinLogo} alt="Woofin Logo" className="sponsor-logo" />
          </SwiperSlide>
        </Swiper>
      </section>

      <Footer />
    </div>
  );
};

export default Home;