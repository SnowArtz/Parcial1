import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DetalleDeCafe from '../DetalleDeCafe/DetalleDeCafe';

function ListadoDeCafes() {
    const [cafeSeleccionado, setCafeSeleccionado] = useState(null);

    const cafes = [
        { nombre: 'Café Especial para ti', tipo: 'Blend', region: 'Angelópolis, Antioquia', fechaDeCultivo: "2023-01-18", imagen:"", notas: "Panela, durazno, caramelo", altura:1920 },
        { nombre: 'Café Especial Navegante', tipo: 'Café de Origen', region: 'Guatapé, Antioquia', fechaDeCultivo: "2022-03-11", imagen:"", notas: "Arroz, Canela, Arequipe", altura:2350  },
    ];

    return (
        <div className="container mt-5">
            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Tipo</th>
                        <th>Región</th>
                    </tr>
                </thead>
                <tbody>
                    {cafes.map((cafe, index) => (
                        <tr key={index} onClick={() => setCafeSeleccionado(cafe)}>
                            <td>{cafe.nombre}</td>
                            <td>{cafe.tipo}</td>
                            <td>{cafe.region}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <DetalleDeCafe cafe={cafeSeleccionado} />
        </div>
    );
}

export default ListadoDeCafes;
