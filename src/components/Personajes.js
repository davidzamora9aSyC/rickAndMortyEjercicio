import React, { useEffect, useState } from "react";
import Personaje from "./Personaje";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";

function Personajes() {
  const [personajes, setPersonajes] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    const URL = "https://rickandmortyapi.com/api/character";
    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        setPersonajes(data.results);
      });
  }, []);

  const personajesFiltrados = personajes.filter((personaje) =>
    personaje.name.toLowerCase().includes(busqueda.toLowerCase())
  );


  const handleBusquedaChange = (event) => {
    setBusqueda(event.target.value);
  };

  return (
    <div className="container">
      <div>
        <h2>Busca tu personaje aquí:</h2>
        <Form>
          <Form.Control
            type="text"
            placeholder="Ej: Rick Sanchez"
            value={busqueda}
            onChange={handleBusquedaChange}
          />
        </Form>
      </div>
      <hr />
      <h2>Listado de personajes</h2>
      <Row>
        {personajesFiltrados.map((personaje) => (
          <Col key={personaje.id}>
            <Personaje personaje={personaje} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Personajes;
