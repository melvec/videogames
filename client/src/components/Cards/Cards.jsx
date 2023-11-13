//This module will include the list of cards, Filter, Order options and pagination
//15 videogames per page or load when scrolling

import Card from "../Card/Card";
import styles from "./Cards.module.css";

export default function Cards(props) {
console.log(props.games);

  return (
    <div className={styles.container}>
      <div className={styles.items}>
         {props.games.map((game) => {
          return (
            <div className={styles.card} key={game.id}>
            <Card
              key={game.id}
              id={game.id}
              name={game.name}
              image={game.background_image}
              
            />
            </div>
          );
        })}  
      </div>
    </div>
  );
}
