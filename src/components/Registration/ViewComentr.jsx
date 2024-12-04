import React, { useEffect, useState } from "react";

function ViewPlants() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("plants")) || [];
    setPlants(storedData);
  }, []);

  return (
    <div>
      <h1>Registros de Plantas</h1>
      <ul>
        {plants.map((plant, index) => (
          <li key={index}>
            <strong>Nombre:</strong> {plant.name} <br />
            <strong>Correo:</strong> {plant.type} <br />
            <strong>Respuesta:</strong> {plant.label} <br />
            <strong>Comentario:</strong> {plant.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewPlants;
