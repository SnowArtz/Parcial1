import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import ListadoDeCafes from "./ListadoDeCafes/ListadoDeCafes";
import "./App.css";

function App({ locale }) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login locale={locale} />} />
        <Route
          path="/listado-de-cafes"
          element={<ListadoDeCafes locale={locale} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
