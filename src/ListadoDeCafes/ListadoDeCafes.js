import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DetalleDeCafe from "../DetalleDeCafe/DetalleDeCafe";
import Image1 from "../assets/image 1.png";
import { FormattedMessage } from "react-intl";

function ListadoDeCafes({ locale }) {
  const [cafeSeleccionado, setCafeSeleccionado] = useState(null);
  const [cafes, setCafes] = useState([]);

  useEffect(() => {
    const fetchCafes = async () => {
      try {
        const response = await fetch("http://localhost:3001/cafes");

        if (!response.ok) {
          throw new Error("Error al obtener los cafés");
        }

        const cafesData = await response.json();
        setCafes(cafesData);
      } catch (error) {
        console.error("Hubo un error al obtener los cafés: ", error);
      }
    };

    fetchCafes();
  }, []);

  const handleCafeClick = async (cafeId) => {
    try {
      const response = await fetch(`http://localhost:3001/cafes/${cafeId}`);

      if (!response.ok) {
        throw new Error("Error al obtener el café seleccionado");
      }

      const cafeData = await response.json();
      setCafeSeleccionado(cafeData);
    } catch (error) {
      console.error("Hubo un error al obtener el café seleccionado: ", error);
    }
  };

  return (
    <div className="container">
      <h1>El aroma mágico</h1>
      <div className="divider"></div>
      <img src={Image1} alt="Descripción de la imagen" />
      <div className="divider"></div>
      <div
        className="content-row"
        style={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <table className="table" style={{ width: "63%" }}>
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">
                <FormattedMessage id="Nombre" />
              </th>
              <th scope="col">
                <FormattedMessage id="Tipo" />
              </th>
              <th scope="col">
                <FormattedMessage id="Region" />
              </th>
            </tr>
          </thead>
          <tbody>
            {cafes.map((cafe, index) => (
              <tr key={index} onClick={() => handleCafeClick(cafe.id)}>
                <th scope="row">{index + 1}</th>
                <td>{cafe.nombre}</td>
                <td>{cafe.tipo}</td>
                <td>{cafe.region}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ width: "25%" }}>
          <DetalleDeCafe cafe={cafeSeleccionado} locale={locale} />
        </div>
      </div>
      <div className="contact-info">
        <p>
          Contact us: +57 3102105253 - info@aromamagico.com - @elaromamagico
        </p>
      </div>
    </div>
  );
}

export default ListadoDeCafes;
