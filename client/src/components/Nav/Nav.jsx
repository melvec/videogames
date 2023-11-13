import styles from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar";
import Logo from '../../assets/logo.png';
import { Link } from "react-router-dom";

const Nav = () => {
   
return(
    <>
         <nav className={styles.navbar}>
       <div className={styles.logo}><img src={Logo} alt="" /> </div>
      
      

       
       <div className={styles.searchBar}><SearchBar /></div>
      
      <div className={styles.navbarlinks}>
        <ul>
         
        
          <li>
          
            <Link to="/home">
            <a href="#">Home </a>
             
            </Link>
          </li>
          <li>
         
            <Link to="/home">
            
              <a href="#">Register </a>
            </Link>
          </li>
          
        </ul>
      </div>
    </nav>
    </>
)
}
export default Nav;

