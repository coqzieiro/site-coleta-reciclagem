import React from "react";
import "../styles/Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-quote">
          <h1>A poucos cliques de ingressar a maior rede de Especialistas Jurídicos</h1>
        </div>
      </div>
      <div className="login-right">
        <div className="login-form-container">
          <h2>Faça login na sua conta</h2>
          <p>Faça login para acessar a maior comunidade de advogados, prontos para atender ao seu chamado.</p>
          <form>
            <label>Email*</label>
            <input type="email" placeholder="Digite seu email" required />
            <label>Password</label>
            <div className="password-input">
              <input type="password" placeholder="Digite a sua senha" required />
              <button type="button" className="show-password">Show</button>
            </div>
            <label>
              <input type="checkbox" /> Eu concordo com os termos e condições
            </label>
            <button type="submit" className="login-button">Entrar</button>
          </form>
          <div className="login-divider">Ou</div>
          <button className="google-login">
            <img src="/path/to/google-icon.png" alt="Google Icon" /> Faça login com o Google
          </button>
          <p className="signup-link">
            Não tem uma conta? <a href="#">Inscreva-se</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;