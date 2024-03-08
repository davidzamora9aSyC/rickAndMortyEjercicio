import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Detail() {
  let { state } = useLocation();

  const personaje = state.personaje;

  return (
    <div>
      <h1>I am {personaje.name}</h1>
      <img
        style={{ width: "18rem", height: "24rem" }}
        className="mb-3"
        src={personaje.image}
        alt={personaje.name}
      />
      <div>
        <h2>
          <Link to={"/personajes/" + personaje.id}>
            {personaje.name}
          </Link>
        </h2>
        <p>{personaje.species}</p>
      </div>
      
    </div>
  );
}
