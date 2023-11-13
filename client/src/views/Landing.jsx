import { useNavigate } from "react-router-dom";


//import characters, { Rick } from '../data.js';

const Landing = () => {
  const navegacion = useNavigate();

  return (
    <>
   
<div>Welcome to the Videogames world</div>
    
<div>

       <button
        onClick={() => {
          navegacion("/home");
        }}
      >
        Let the game begin!
      </button> 
</div>
    </>
  );
};

export default Landing;
