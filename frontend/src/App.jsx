import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Cadastro from './pages/Cadastro.jsx';
import Contato from './pages/Contato.jsx';
import Assistencia from './pages/AssistenciaJuridica.jsx';
import VisualizarAssistencia from './pages/VisualizarAssistencias.jsx';
import { AuthProvider, AuthContext } from './authContext';
import { useContext } from 'react';


function App() {
     const PrivateRoute = ({children}) => {
        const {user} = useContext(AuthContext)
        if (!user || user.user_type !== 'Cliente') {
          return <Navigate to='/login' />
        }
        return children
     }

  return (
       <AuthProvider>
            <Router>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/cadastro" element={<Cadastro />} />
                  <Route path="/contato" element={<Contato />} />
                  <Route path="/assistencia" element={<PrivateRoute><Assistencia /></PrivateRoute>} />
                  <Route path="/visualizar" element={<PrivateRoute><VisualizarAssistencia /></PrivateRoute>} />
                </Routes>
            </Router>
       </AuthProvider>
  );
}

export default App;