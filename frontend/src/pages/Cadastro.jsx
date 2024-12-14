import React, { useState } from "react";
import "../styles/Cadastro.css";
import "../styles/Main.css";
import Header from "../components/Header";
import advocacia from "../images/advocacia.png";

const Cadastro = () => {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState(""); // Tipo de usuário selecionado

  const nextStep = () => {
    // Controla as etapas com base no tipo de usuário
    if (userType === "cliente" && step === 2) setStep(4);
    else if (userType === "advogado" && step === 2) setStep(4);
    else setStep(step + 1);
  };

  const prevStep = () => setStep(1); // Sempre retorna para o primeiro passo

  const selectUserType = (type) => {
    setUserType(type);
    nextStep();
  };

  return (
    <div>
      <Header />
      <div className="cadastro-container">
        <div className="cadastro-left">
          <img src={advocacia} alt="advocacia" className="fundo transparente" />
          <div className="cadastro-quote">
            <blockquote>
            <h1>"A poucos cliques de ingressar a maior rede de Especialistas Jurídicos"</h1>
            </blockquote>
          </div>
        </div>

        <div className="cadastro-right">
          {/* Passo 1: Seleção do tipo de usuário */}
          {step === 1 && (
            <div className="cadastro-step">
              <h2>Junte-se a nós!</h2>
              <p>Para começar esta jornada, diga-nos que tipo de conta você abrirá.</p>
              <div className="account-type-buttons">
                <button onClick={() => selectUserType("cliente")}>
                  <i className="fas fa-user"></i> Cliente
                </button>
                <button onClick={() => selectUserType("advogado")}>
                  <i className="fas fa-gavel"></i> Advogado
                </button>
                <button onClick={() => selectUserType("escritorio")}>
                  <i className="fas fa-building"></i> Escritório de advocacia
                </button>
              </div>
            </div>
          )}

          {/* Passo 2: Registro personalizado com base no tipo de usuário */}
          {step === 2 && (
            <div className="cadastro-step">
              <button className="voltar" onClick={prevStep}>
                &lt; Voltar
              </button>
              <h2>
                {userType === "cliente" && "Registre uma conta de cliente!"}
                {userType === "advogado" && "Registre uma conta de advogado!"}
                {userType === "escritorio" && "Registre uma conta de escritório de advocacia!"}
              </h2>
              <form>
                <input type="text" placeholder="Seu nome completo*" required />
                <input type="email" placeholder="Endereço eletrônico*" required />
                <input type="password" placeholder="Criar senha*" required />
                {userType === "advogado" && (
                  <input type="text" placeholder="Número da licença de prática*" required />
                )}

                <label className="checkbox-label">
                  <input type="checkbox" className="styled-checkbox" required />
                  <span className="custom-checkbox"></span>
                  Eu concordo com os termos e condições
                </label>
                <button type="submit" onClick={nextStep}>
                  Registrar Conta
                </button>
              </form>
            </div>
          )}

          {/* Passo 3: Apenas para Escritório */}
          {step === 3 && userType === "escritorio" && (
            <div className="cadastro-step">
              <button className="voltar" onClick={prevStep}>
                &lt; Voltar
              </button>
              <h2>Complete seu perfil!</h2>
              <form>
                <input type="text" placeholder="Número da licença de prática" required />
                <input type="text" placeholder="Nome do Escritório" required />
                <select required>
                  <option>Ano de Acreditação</option>
                  <option value="antes">Antes</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                </select>
                <button type="submit" onClick={nextStep}>
                  Salvar e continuar
                </button>
              </form>
            </div>
          )}

          {/* Passo 4: Confirmação */}
          {step === 4 && (
            <div className="cadastro-step">
              <button className="voltar" onClick={prevStep}>
                &lt; Voltar
              </button>
              <h2>Complete seu perfil!</h2>
              <form>
                <label>Celular</label>
                <div className="phone-input">
                  <span>+55</span>
                  <input type="tel" placeholder="(DDD) 00000-0000" required />
                </div>
                <button type="submit">Salvar e continuar</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cadastro;