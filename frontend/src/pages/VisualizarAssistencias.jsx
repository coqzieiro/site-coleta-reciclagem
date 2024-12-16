import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/VisualizarAssistencia.css";

const VisualizarAssistencia = () => {
  // Simulando alguns casos
  const assistencias = [
    {
      id: 1,
      descricao: "Solicitação de revisão do valor mensal da pensão alimentícia devido a mudanças na renda.",
      tipoProblema: "Direito de família",
      envolve: "Pessoa física",
      processos: "Não",
      urgencia: "Médio",
      consultou: "Sim",
      disponibilidade: "Segunda-feira, 9:00 às 11:00",
      status: "Em análise",
    },
    {
      id: 2,
      descricao: "Criação de um contrato de locação de imóvel residencial com cláusulas específicas.",
      tipoProblema: "Contratos",
      envolve: "Pessoa jurídica",
      processos: "Não",
      urgencia: "Baixo",
      consultou: "Não",
      disponibilidade: "Terça-feira, 13:00 às 14:00",
      status: "Concluído",
    },
    {
      id: 3,
      descricao: "Defesa contra multa de velocidade em via urbana.",
      tipoProblema: "Direito de trânsito",
      envolve: "Pessoa física",
      processos: "Sim",
      urgencia: "Alto",
      consultou: "Sim",
      disponibilidade: "Quarta-feira, 15:00 às 16:00",
      status: "Pendente de Documentação",
    },
  ];

  return (
    <div className="visualizar-assistencia-container">
      <Header />

      <section className="assistencia-section">
        <h2 className="assistencia-title">Seus Casos Jurídicos</h2>
        <p className="assistencia-subtitle">
          Aqui estão listados todos os casos jurídicos que você solicitou através da nossa plataforma.
        </p>

        <div className="assistencia-cards-container">
          {assistencias.map((assistencia) => (
            <div className="assistencia-card" key={assistencia.id}>
              <h3 className="assistencia-card-title">Caso #{assistencia.id}</h3>
              <p><strong>Descrição:</strong> {assistencia.descricao}</p>
              <p><strong>Tipo de Problema:</strong> {assistencia.tipoProblema}</p>
              <p><strong>Envolve:</strong> {assistencia.envolve}</p>
              <p><strong>Processos em andamento:</strong> {assistencia.processos}</p>
              <p><strong>Urgência:</strong> {assistencia.urgencia}</p>
              <p><strong>Consultou outro advogado:</strong> {assistencia.consultou}</p>
              <p><strong>Disponibilidade:</strong> {assistencia.disponibilidade}</p>
              <span className={`assistencia-card-status status-${assistencia.status.toLowerCase().replace(/\s+/g, "-")}`}>
                {assistencia.status}
              </span>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default VisualizarAssistencia;