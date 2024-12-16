import React, { useState, useContext } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Assistencia.css";
import { AuthContext } from "../authContext";

const AssistenciaJuridica = () => {
  const [formData, setFormData] = useState({
    descricao: "",
    tipoProblema: "",
      envolve:"",
      processos:"",
      urgencia:"",
      consultou:"",
      disponibilidade:""
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
    const {user} = useContext(AuthContext);


  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value
    setFormData({ ...formData, [name]: val });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      setLoading(true)
       setError(null)
    try {
      const response = await fetch("http://localhost:8000/api/solicitacao", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            user_id: user.user_id,
          descricao: formData.descricao,
           tipoProblema: formData.tipoProblema,
            envolve:formData.envolve,
            processos:formData.processos,
            urgencia:formData.urgencia,
            consultou:formData.consultou,
            disponibilidade:formData.disponibilidade,
        }),
      });
      if (!response.ok) {
        let errorMessage;
         try {
            const errorJson = await response.clone().json();
             errorMessage = errorJson.error || "Erro ao enviar solicitação"
        }
         catch(jsonError) {
            errorMessage = await response.clone().text() || "Erro ao enviar solicitação";
         }
         throw new Error(errorMessage);
        }
      const responseData = await response.json();
      alert("Solicitação enviada com sucesso! Aguarde um advogado entrar em contato.");
      console.log("Solicitação enviada com sucesso", responseData);
      // Handle success (e.g., redirect or clear form)
    } catch (err) {
        setError(err.message)
      console.error("Failed to send request", err);
    } finally {
        setLoading(false)
    }
  };


  return (
    <div className="assistencia-container">
      <Header />
      <main className="assistencia-main">
        <h1 className="form-title">Formulário de Assistência Jurídica</h1>
        <form className="assistencia-form" onSubmit={handleSubmit}>
          {/* Pergunta 1 */}
          <section>
            <label>1. Qual é a sua principal dúvida ou necessidade jurídica?</label>
            <p>Descreva a sua necessidade sobre alguma questão jurídica</p>
            <textarea
              placeholder="Escreva alguma coisa..."
              rows="5"
              required
              name="descricao"
              onChange={handleInputChange}
            ></textarea>
          </section>

          {/* Pergunta 2 */}
          <section>
            <label>2. Qual é o tipo de problema jurídico?</label>
            <p>Explique qual o tipo de problema jurídico que você está enfrentando.</p>
            <div className="checkbox-group">
              <label>
                <input type="checkbox" value="Contratos"  name="tipoProblema" onChange={handleInputChange}/> Contratos
              </label>
              <label>
                <input type="checkbox" value="Direito trabalhista"  name="tipoProblema" onChange={handleInputChange}/> Direito trabalhista
              </label>
              <label>
                <input type="checkbox" value="Direito civil" name="tipoProblema" onChange={handleInputChange} /> Direito civil
              </label>
              <label>
                <input type="checkbox" value="Direito penal" name="tipoProblema" onChange={handleInputChange} /> Direito penal
              </label>
              <label>
                <input type="checkbox" value="Direito de família" name="tipoProblema" onChange={handleInputChange}/> Direito de família
              </label>
              <label>
                <input type="checkbox" value="Direito empresarial" name="tipoProblema" onChange={handleInputChange}/> Direito empresarial
              </label>
              <label>
                Outros (especificar abaixo)
              </label>
            </div>
            <textarea
              placeholder="Escreva alguma coisa..."
              rows="3"
              required
                name="tipoProblema"
              onChange={handleInputChange}
            ></textarea>
          </section>

          {/* Pergunta 3 */}
          <section>
            <label>3. O problema envolve:</label>
            <div className="radio-group">
              <label>
                <input type="radio" name="envolve" value="Pessoa física" required onChange={handleInputChange} /> Pessoa física
              </label>
              <label>
                <input type="radio" name="envolve" value="Pessoa jurídica" onChange={handleInputChange} /> Pessoa jurídica
              </label>
              <label>
                <input type="radio" name="envolve" value="Ambas" onChange={handleInputChange} /> Ambas
              </label>
            </div>
          </section>

          {/* Pergunta 4 */}
          <section>
            <label>4. Já existem processos ou ações em andamento?</label>
            <div className="radio-group">
              <label>
                <input type="radio" name="processos" value="True" required onChange={handleInputChange} /> Sim
              </label>
              <label>
                <input type="radio" name="processos" value="False" onChange={handleInputChange}/> Não
              </label>
            </div>
          </section>

          {/* Pergunta 5 */}
          <section>
            <label>5. Qual o nível de urgência?</label>
            <div className="radio-group">
              <label>
                <input type="radio" name="urgencia" value="Alto" required onChange={handleInputChange}/> Alto
              </label>
              <label>
                <input type="radio" name="urgencia" value="Médio" onChange={handleInputChange}/> Médio
              </label>
              <label>
                <input type="radio" name="urgencia" value="Baixo" onChange={handleInputChange}/> Baixo
              </label>
            </div>
          </section>

          {/* Pergunta 6 */}
          <section>
            <label>6. Você já consultou outro advogado ou profissional jurídico?</label>
            <div className="radio-group">
              <label>
                <input type="radio" name="consultou"  value="True" required onChange={handleInputChange}/> Sim
              </label>
              <label>
                <input type="radio" name="consultou" value="False" onChange={handleInputChange}/> Não
              </label>
            </div>
          </section>

          {/* Pergunta 7 */}
          <section>
            <label>7. Qual é a sua disponibilidade para uma consulta inicial?</label>
            <div className="availability">
              <div className="checkbox-group">
                <label>
                  <input type="checkbox" name="disponibilidade" value="Segunda-feira"  onChange={handleInputChange}/> Segunda-feira
                </label>
                <label>
                  <input type="checkbox" name="disponibilidade" value="Terça-feira"  onChange={handleInputChange}/> Terça-feira
                </label>
                <label>
                  <input type="checkbox" name="disponibilidade" value="Quarta-feira" onChange={handleInputChange} /> Quarta-feira
                </label>
                <label>
                  <input type="checkbox" name="disponibilidade" value="Quinta-feira" onChange={handleInputChange} /> Quinta-feira
                </label>
                <label>
                  <input type="checkbox" name="disponibilidade" value="Sexta-feira" onChange={handleInputChange} /> Sexta-feira
                </label>
              </div>
              <div className="radio-group">
                <label>
                  <input type="radio" name="horario" value="9:00 às 11:00" onChange={handleInputChange}/> 9:00 às 11:00
                </label>
                <label>
                  <input type="radio" name="horario" value="13:00 às 14:00" onChange={handleInputChange}/> 13:00 às 14:00
                </label>
                <label>
                  <input type="radio" name="horario" value="14:00 às 15:00" onChange={handleInputChange}/> 14:00 às 15:00
                </label>
                <label>
                  <input type="radio" name="horario" value="15:00 às 16:00" onChange={handleInputChange}/> 15:00 às 16:00
                </label>
                <label>
                  <input type="radio" name="horario" value="16:00 às 17:00" onChange={handleInputChange}/> 16:00 às 17:00
                </label>
              </div>
            </div>
          </section>

          <button type="submit" className="submit-button">
            Enviar
          </button>
            {error && <p>Erro: {error}</p>}
                {loading && <p>Carregando...</p>}
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default AssistenciaJuridica;