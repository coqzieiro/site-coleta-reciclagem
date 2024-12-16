import React, { useState, useContext } from "react";
import "../styles/Login.css";
import "../styles/Main.css";
import google from "../images/google-icon.png";
import Header from "../components/Header";
import { AuthContext } from "../authContext";
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const {login} = useContext(AuthContext)
     const navigate = useNavigate()

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      setLoading(true)
    setError(null)
    try {
      const response = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
         if (!response.ok) {
            let errorMessage;
             try {
                const errorJson = await response.clone().json();
                 errorMessage = errorJson.error || "Erro ao logar o usuário"
            }
             catch(jsonError) {
                errorMessage = await response.clone().text() || "Erro ao logar o usuário";
             }
             throw new Error(errorMessage);
         }
      const responseData = await response.json();
      login(responseData) // set user context
      navigate("/") // redirect to home
      console.log("Login successful", responseData);
      // Handle success (e.g., redirect, set user context)
    } catch (err) {
        setError(err.message)
      console.error("Login failed", err);
    } finally {
        setLoading(false)
    }
  };

    const handleShowPassword = (e) => {
       const passwordInput = e.target.parentNode.querySelector('input[type="password"]')
        passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password'
    }
  return (
    <div>
      <Header />
      <div className="login-container">
        <div className="login-left">
          <div className="login-quote">
            <h1>"Faça parte do Direito ao Direito, uma comunidade que se solidariza com o seu problema!"</h1>
          </div>
        </div>
        <div className="login-right">
          <div className="login-form-container">
            <h2>Faça login na sua conta</h2>
            <p>Acesse a maior comunidade de advogados, prontos para atender ao seu chamado.</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Email*</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Digite seu email"
                  required
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <div className="password-input">
                  <input
                    type="password"
                    name="password"
                    placeholder="Digite a sua senha"
                    required
                    onChange={handleInputChange}
                  />
                  <button type="button" className="show-password" onClick={handleShowPassword}>Show</button>
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
              {error && <p>Erro: {error}</p>}
                {loading && <p>Carregando...</p>}
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