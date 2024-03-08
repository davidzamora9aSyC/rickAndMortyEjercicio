import Personaje from "./Personaje";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import 'bootstrap/dist/css/bootstrap.min.css';

const { useEffect, useState } = require("react");

function Personajes() {
 const [personajes, setPersonajes] = useState([]);
 useEffect(() => {
   const URL =
     "https://rickandmortyapi.com/api/character";
   fetch(URL)
     .then((data) => data.json())
     .then((data) => {
       setPersonajes(data.results);
     });
 }, []);

 return (
   <div className="container">
     <h2 className="mt-2">Listado de personajes</h2>
     <hr></hr>
     <Row>
       {personajes.map((personaje) => (
         <Col key={personaje.id}>
           <Personaje personaje={personaje} />
         </Col>
       ))}
     </Row>
   </div>
 );
}

export default Personajes;