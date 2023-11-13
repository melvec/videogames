// This module will display a card
// -  Sector en el que se vea un listado de cards con los videojuegos. Al iniciar deberá cargar los primeros resultados obtenidos desde la ruta **`GET /videogames`** y deberá mostrar su:
// -  Imagen.  background_image
// -  Nombre.  name
// -  Géneros. genres

import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export function Card(props) {

  return (
    <>
      <div className={styles.card}>
        
        <Link to={`/detail/${props.id}`}>
          <div>
            <img src={props.image}  alt={props.name} />
            <h1>{props.name}</h1>
          </div>

          <div>
            <h2>{props.genre}</h2>
            
          </div>
        </Link>
      </div>
    </>
  );
}



export default Card;