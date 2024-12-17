import React, { useState } from "react";
  import "../styles/Cadastro.css";
  import "../styles/Main.css";
  import Header from "../components/Header";
  import advocacia from "../images/advocacia.png";

  const Cadastro = () => {
      const [step, setStep] = useState(1);
      const [userType, setUserType] = useState("");
      const [formData, setFormData] = useState({
          full_name: "",
          email: "",
          password: "",
          practice_license_number: "",
          formacao: "",
           fichaCriminal:""
      });
      const [error, setError] = useState(null);
      const [loading, setLoading] = useState(false);
      const [emailExists, setEmailExists] = useState(false);

      const nextStep = () => {
          if (userType === "cliente" && step === 2) setStep(3);
          else if (userType === "advogado" && step === 2) setStep(3);
          else setStep(step + 1);
      };

      const prevStep = () => setStep(1);

      const handleInputChange = (e) => {
          const { name, value } = e.target;
          setFormData({ ...formData, [name]: value });
            setEmailExists(false) // reset error each time
            setError(null)
      };

        const checkEmailExists = async (email) => {
            try{
               const response = await fetch(`http://localhost:8000/api/check_email?email=${email}`);
               if(response.ok) {
                   const data = await response.json()
                   setEmailExists(data.exists)
                   if (data.exists) {
                       setError('Email já cadastrado')
                   }
               } else {
                   throw new Error("Error checking email")
               }
            } catch (err) {
                setError('Erro ao verificar o email')
                console.error(err)
            }
        }
      const selectUserType = (type) => {
          setUserType(type);
          nextStep();
      };

      const handleSubmit = async (e) => {
            e.preventDefault();
           setLoading(true);
           setError(null);
            try {
               await checkEmailExists(formData.email);
               if(emailExists) {
                   setLoading(false);
                   return;
               }
               const response = await fetch("http://localhost:8000/api/register", {
                   method: "POST",
                   headers: {
                       "Content-Type": "application/json",
                   },
                   body: JSON.stringify({
                       userType: userType,
                       ...formData
                   }),
               });
                if (!response.ok) {
                   let errorMessage;
                    try {
                       const errorJson = await response.clone().json();
                        errorMessage = errorJson.error || "Erro ao registrar usuário"
                   }
                    catch(jsonError) {
                       errorMessage = await response.clone().text() || "Erro ao registrar usuário";
                    }
                    throw new Error(errorMessage);
                }
               const responseData = await response.json();
               console.log("Usuário registrado com sucesso", responseData);
               // Handle success here (e.g., redirect or show a success message)
            } catch (err) {
                setError(err.message);
                console.error("Falha no registro", err);
            } finally {
                setLoading(false);
            }
      };

      return (
          <div>
              <Header />
              <div className="cadastro-container">
                  <div className="cadastro-left">
                      <img src={advocacia} alt="advocacia" className="fundo transparente" />
                      <div className="cadastro-quote">
                          <blockquote>
                              <h1>
                                  "A poucos cliques de ingressar a maior rede de Especialistas
                                  Jurídicos"
                              </h1>
                          </blockquote>
                      </div>
                  </div>

                  <div className="cadastro-right">
                      {/* Passo 1: Seleção do tipo de usuário */}
                      {step === 1 && (
                          <div className="cadastro-step">
                              <h2>Junte-se a nós!</h2>
                              <p>
                                  Para começar esta jornada, diga-nos que tipo de conta você
                                  abrirá.
                              </p>
                              <div className="account-type-buttons">
                                  <button onClick={() => selectUserType("cliente")}>
                                      <i className="fas fa-user"></i> Cliente
                                  </button>
                                  <button onClick={() => selectUserType("advogado")}>
                                      <i className="fas fa-gavel"></i> Advogado
                                  </button>
                              </div>
                          </div>
                      )}

                      {/* Passo 2: Registro personalizado com base no tipo de usuário */}
                      {step === 2 && (
                          <div className="cadastro-step">
                              <button className="voltar" onClick={prevStep}>
                                  Voltar
                              </button>
                              <h2>
                                  {userType === "cliente" && "Registre uma conta de cliente!"}
                                  {userType === "advogado" && "Registre uma conta de advogado!"}
                              </h2>
                              <form onSubmit={handleSubmit}>
                                  <input
                                      type="text"
                                      name="full_name"
                                      placeholder="Seu nome completo*"
                                      required
                                      onChange={handleInputChange}
                                  />
                                  <input
                                      type="email"
                                      name="email"
                                      placeholder="Endereço eletrônico*"
                                      required
                                      onChange={handleInputChange}
                                         onBlur={(e) => checkEmailExists(e.target.value)}
                                  />
                                  <input
                                      type="password"
                                      name="password"
                                      placeholder="Criar senha*"
                                      required
                                      onChange={handleInputChange}
                                  />
                                 {userType === "cliente" && (
                                      <input
                                          type="text"
                                          name="fichaCriminal"
                                          placeholder="Ficha Criminal"
                                          onChange={handleInputChange}
                                      />
                                  )}
                                  {userType === "advogado" && (
                                      <input
                                          type="text"
                                          name="practice_license_number"
                                          placeholder="Número da licença de prática*"
                                          required
                                          onChange={handleInputChange}
                                      />
                                  )}
                                 {userType === "advogado" && (
                                      <input
                                          type="text"
                                          name="formacao"
                                          placeholder="Formação"
                                          required
                                          onChange={handleInputChange}
                                      />
                                  )}
                                  <label className="checkbox-label">
                                      <input type="checkbox" className="styled-checkbox" required />
                                      <span className="custom-checkbox"></span>
                                      Eu concordo com os termos e condições
                                  </label>
                                  <button type="submit">Registrar Conta</button>
                              </form>
                              {error && <p>Erro: {error}</p>}
                              {loading && <p>Carregando...</p>}
                          </div>
                      )}


                  </div>
              </div>
          </div>
      );
  };

  export default Cadastro;