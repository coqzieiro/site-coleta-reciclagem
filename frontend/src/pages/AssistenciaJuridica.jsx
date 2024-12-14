import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Assistencia.css";

const AssistenciaJuridica = () => {
  return (
    <div className="assistencia-container">
      <Header />
      <main className="assistencia-main">
        <h1 className="form-title">Formulário de Assistência Jurídica</h1>
        <form className="assistencia-form">
          {/* Pergunta 1 */}
          <section>
            <label>1. Qual é a sua principal dúvida ou necessidade jurídica?</label>
            <p>Descreva a sua necessidade sobre alguma questão jurídica</p>
            <textarea
              placeholder="Escreva alguma coisa..."
              rows="5"
              required
            ></textarea>
          </section>

          {/* Pergunta 2 */}
          <section>
            <label>2. Qual é o tipo de problema jurídico?</label>
            <p>Explique qual o tipo de problema jurídico que você está enfrentando.</p>
            <div className="checkbox-group">
              <label>
                <input type="checkbox" /> Contratos
              </label>
              <label>
                <input type="checkbox" /> Direito trabalhista
              </label>
              <label>
                <input type="checkbox" /> Direito civil
              </label>
              <label>
                <input type="checkbox" /> Direito penal
              </label>
              <label>
                <input type="checkbox" /> Direito de família
              </label>
              <label>
                <input type="checkbox" /> Direito empresarial
              </label>
              <label>
                Outros (especificar abaixo)
              </label>
            </div>
            <textarea
              placeholder="Escreva alguma coisa..."
              rows="3"
              required
            ></textarea>
          </section>

          {/* Pergunta 3 */}
          <section>
            <label>3. O problema envolve:</label>
            <div className="radio-group">
              <label>
                <input type="radio" name="envolve" required /> Pessoa física
              </label>
              <label>
                <input type="radio" name="envolve" /> Pessoa jurídica
              </label>
              <label>
                <input type="radio" name="envolve" /> Ambas
              </label>
            </div>
          </section>

          {/* Pergunta 4 */}
          <section>
            <label>4. Já existem processos ou ações em andamento?</label>
            <div className="radio-group">
              <label>
                <input type="radio" name="processos" required /> Sim
              </label>
              <label>
                <input type="radio" name="processos" /> Não
              </label>
            </div>
          </section>

          {/* Pergunta 5 */}
          <section>
            <label>5. Qual o nível de urgência?</label>
            <div className="radio-group">
              <label>
                <input type="radio" name="urgencia" required /> Alto
              </label>
              <label>
                <input type="radio" name="urgencia" /> Médio
              </label>
              <label>
                <input type="radio" name="urgencia" /> Baixo
              </label>
            </div>
          </section>

          {/* Pergunta 6 */}
          <section>
            <label>6. Você já consultou outro advogado ou profissional jurídico?</label>
            <div className="radio-group">
              <label>
                <input type="radio" name="consultou" required /> Sim
              </label>
              <label>
                <input type="radio" name="consultou" /> Não
              </label>
            </div>
          </section>

          {/* Pergunta 7 */}
          <section>
            <label>7. Qual é a sua disponibilidade para uma consulta inicial?</label>
            <div className="availability">
              <div className="checkbox-group">
                <label>
                  <input type="checkbox" /> Segunda-feira
                </label>
                <label>
                  <input type="checkbox" /> Terça-feira
                </label>
                <label>
                  <input type="checkbox" /> Quarta-feira
                </label>
                <label>
                  <input type="checkbox" /> Quinta-feira
                </label>
                <label>
                  <input type="checkbox" /> Sexta-feira
                </label>
              </div>
              <div className="radio-group">
                <label>
                  <input type="radio" name="horario" /> 9:00 às 11:00
                </label>
                <label>
                  <input type="radio" name="horario" /> 13:00 às 14:00
                </label>
                <label>
                  <input type="radio" name="horario" /> 14:00 às 15:00
                </label>
                <label>
                  <input type="radio" name="horario" /> 15:00 às 16:00
                </label>
                <label>
                  <input type="radio" name="horario" /> 16:00 às 17:00
                </label>
              </div>
            </div>
          </section>

          <button type="submit" className="submit-button">
            Enviar
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default AssistenciaJuridica;