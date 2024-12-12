import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Cadastro from './pages/Cadastro.jsx';
import Assistencia from './pages/AssistenciaJuridica.jsx';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/assistencia" element={<Assistencia />} />
        </Routes>
    </Router>
  );
}

export default App;