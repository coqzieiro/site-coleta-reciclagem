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
      urgencia:"",
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
            urgencia:formData.urgencia,
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


          {/* Pergunta 5 */}
          <section>
            <label>4. Qual o nível de urgência?</label>
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