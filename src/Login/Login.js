import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import "./Login.css";
import Image1 from "../assets/image 1.png";
function Login({ locale }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("#f9f1f1");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login: username, password: password }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.status === "success") {
          navigate("/listado-de-cafes");
        }
      } else {
        setError("#CD3232");
      }
    } catch (error) {
      setError("#CD3232");
    }
  };

  return (
    <div className="container">
      <h1>El aroma mágico</h1>
      <div className="divider"></div>
      <img src={Image1} alt="Descripción de la imagen" />
      <div className="divider"></div>

      <div className="login-container">
        <div className="login-title-container">
          <label>
            <FormattedMessage id="Inicio_de_sesion" />
          </label>
        </div>

        <div className="form-container">
          <div className="form-container-content">
            <label>
              <FormattedMessage id="Nombre_de_usuario" />
            </label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <label>
              <FormattedMessage id="Contraseña" />
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="form-button">
              <button onClick={handleLogin}>
                <FormattedMessage id="Ingresar" />
              </button>
              <button
                onClick={() => {
                  setUsername("");
                  setPassword("");
                  setError("#f9f1f1");
                }}
              >
                <FormattedMessage id="Cancelar" />
              </button>
            </div>
              <label
                style={{
                  color: error,
                  fontFamily: "Inter",
                  fontWeight: "bold",
                  marginBottom: "0px",
                  marginTop: "5px",
                  fontSize: "15px"
                }}
              >
                <FormattedMessage id="Error" />
              </label>
          </div>
        </div>
        <div className="contact-info">
          <p>
            Contact us: +57 3102105253 - info@aromamagico.com - @elaromamagico
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
