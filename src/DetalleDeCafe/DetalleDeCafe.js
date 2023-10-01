import React from "react";
import "./DetalleDeCafe.css";
import { FormattedMessage, FormattedDate } from "react-intl";

function DetalleDeCafe({ cafe }, { locale }) {
  if (!cafe) return <></>;

  return (
    <div className="detalle-de-cafe">
      <h2>{cafe.nombre}</h2>
      <p className="fecha-de-cultivo">
        <FormattedDate
          value={new Date(cafe.fecha_cultivo)}
          year="numeric"
          month="2-digit"
          day="numeric"
        />
      </p>
      <img src={cafe.imagen} alt={cafe.nombre} />
      <p className="notas">
        <FormattedMessage id="Notas" /> {<br />} {cafe.notas}
      </p>
      <p className="altura">
        <FormattedMessage id="Cultivado" />
        {<br />}
        {cafe.altura} <FormattedMessage id="msnm" />
      </p>
    </div>
  );
}

export default DetalleDeCafe;
