import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if(username === 'admin' && password === 'pass') {
        navigate("/listado-de-cafes");
    } else {
      setError('Error de autenticación. Revise sus credenciales.');
    }
  };

  return (
    <div>
        <h1>El aroma mágico</h1>
        <img src="ruta-de-imagen" alt="Descripción de la imagen" />
        <label>Inicio de sesión</label>
        
        <label>
          Nombre de usuario:
          <input 
            type="text" 
            name="username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        
        <label>
           Contraseña:
          <input 
            type="password" 
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        
        {error && <p style={{color: 'red'}}>{error}</p>}
        
        <button onClick={handleLogin}>Ingresar</button>
        <button onClick={() => {setUsername(''); setPassword(''); setError('')}}>Cancelar</button>
        <p>Contact us: +57 3102105253 - info@aromamagico.com - @elaromamagico</p>
    </div>
  );
}

export default Login;
