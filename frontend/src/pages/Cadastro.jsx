import React, { useState } from "react";
import "../styles/Cadastro.css";

const Cadastro = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="cadastro-container">
      <div className="cadastro-left">
        <div className="cadastro-quote">
          <blockquote>
            "A poucos cliques de ingressar a maior rede de Especialistas Jurídicos"
          </blockquote>
        </div>
      </div>

      <div className="cadastro-right">
        {step === 1 && (
          <div className="cadastro-step">
            <h2>Junte-se a nós!</h2>
            <p>Para começar esta jornada, diga-nos que tipo de conta você abrirá.</p>
            <button onClick={nextStep}>Cliente</button>
            <button onClick={nextStep}>Advogado</button>
            <button onClick={nextStep}>Escritório de advocacia</button>
          </div>
        )}

        {step === 2 && (
          <div className="cadastro-step">
            <button className="voltar" onClick={prevStep}>&lt; Voltar</button>
            <h2>Registre uma conta de advogado!</h2>
            <form>
              <input type="text" placeholder="Seu nome completo*" required />
              <input type="email" placeholder="Endereço eletrônico*" required />
              <input type="password" placeholder="Criar senha*" required />
              <label>
                <input type="checkbox" required /> Eu concordo com os termos e condições
              </label>
              <button type="submit" onClick={nextStep}>Registrar Conta</button>
            </form>
          </div>
        )}

        {step === 3 && (
          <div className="cadastro-step">
            <button className="voltar" onClick={prevStep}>&lt; Voltar</button>
            <h2>Complete seu perfil!</h2>
            <form>
              <input type="text" placeholder="Número da licença de prática" required />
              <input type="text" placeholder="Nome do Escritório" required />
              <select required>
                <option>Ano de Acreditação</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
              </select>
              <button type="submit" onClick={nextStep}>Salvar e continuar</button>
            </form>
          </div>
        )}

        {step === 4 && (
          <div className="cadastro-step">
            <button className="voltar" onClick={prevStep}>&lt; Voltar</button>
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
  );
};

export default Cadastro;