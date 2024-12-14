import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/Home.css";

import gtpLogo from "../images/gtp.png";
import hisenseLogo from "../images/hisense.png";
import olxLogo from "../images/olx.png";
import sorrisoLogo from "../images/sorriso.png";
import woofinLogo from "../images/woofin.png";
import assistencia from "../images/assistencia.jpeg";


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
              <option value="">Assunto</option>
              <option value="pensão">Pensão</option>
              <option value="contrato">Contrato</option>
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