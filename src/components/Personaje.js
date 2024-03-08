import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function personaje({personaje}) {
 return (
   <Card style={{ width: "18rem", height: "24rem" }} className="mb-3">
     <Card.Img
       style={{ height: "14rem" }}
       variant="top"
       src={personaje.image}
       alt={personaje.name}

     />
     <Card.Body>
       <Card.Title>
         <Link to={"/personajes/" + personaje.id} state={{personaje}}>
           {personaje.name}
         </Link>
       </Card.Title>
       <Card.Text>{personaje.species}</Card.Text>
     </Card.Body>
   </Card>
 );
}

export default personaje;