import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import Nav from "../components/Nav/Nav"
import Cards from "../components/Cards/Cards";
import Form from "../components/Form/Form";

//import characters, { Rick } from '../data.js';

const Home = ({ games }) => {
  const navegacion = useNavigate();

  return (
    <>
   <div className={styles.Home}>
    <Nav />

    <button
        onClick={() => {
          navegacion("/form");
        }}
      >
        Create new videogame
      </button> 
      
    <Cards games={games} /></div> 

    
    </>
  );
};

export default Home;
