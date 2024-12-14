import React from "react";
import "../styles/Login.css";
import "../styles/Main.css";
import google from "../images/google-icon.png";
import Header from "../components/Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="login-container">
        <div className="login-left">
          <div className="login-quote">
            <h1>"Faça parte do LegalAid, uma comunidade que se solidariza com o seu problema!"</h1>
          </div>
        </div>
        <div className="login-right">
          <div className="login-form-container">
            <h2>Faça login na sua conta</h2>
            <p>Acesse a maior comunidade de advogados, prontos para atender ao seu chamado.</p>
            <form>
              <div className="form-group">
                <label>Email*</label>
                <input type="email" placeholder="Digite seu email" required />
              </div>
              <div className="form-group">
                <label>Password</label>
                <div className="password-input">
                  <input type="password" placeholder="Digite a sua senha" required />
                  <button type="button" className="show-password">Show</button>
                </div>
              </div>
              <div className="form-group">
                <label className="checkbox-label">
                  <input type="checkbox" className="styled-checkbox" />
                  <span className="custom-checkbox"></span>
                  Eu concordo com os termos e condições
                </label>
              </div>
              <button type="submit" className="login-button">Entrar</button>
            </form>
            <div className="login-divider">Ou</div>
            <button className="google-login">
              <img src={google} alt="Google icon" className="icon" /> Faça login com o Google
            </button>
            <p className="signup-link">
              Não tem uma conta? <a href="/cadastro">Inscreva-se</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;