import React from 'react';

function DetalleDeCafe({ cafe }) {
  if(!cafe) return <></>;

  return (
    <div>
      <h2>{cafe.nombre}</h2>
      <p>Fecha de cultivo: {cafe.fechaDeCultivo}</p>
      <img src={cafe.imagen} alt={cafe.nombre} />
      <p>Notas: {cafe.notas}</p>
      <p>Altura del cultivo: {cafe.altura}m</p>
    </div>
  );
}

export default DetalleDeCafe;
