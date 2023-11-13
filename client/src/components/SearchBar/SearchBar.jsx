
import { useState } from "react";
import styles from "./SearchBar.module.css"

const SearchBar = () => {
    const [name, setName] = useState("");
    const handleChange = () => {
        setName(event.target.value);
        console.log(event.target.value);
      };
    const clearInput = () => {
        setName("");
    };
return(
    <div className={styles.SearchBar}>
      <input
        name="name"
        type="search"
        value={name}
        onChange={handleChange}
        placeholder="Search"
      />
      <button
        onClick={() => {
          console.log("searched name " + name);
          onSearch(name);
          clearInput();
        }}
      >
        Search
      </button>
    </div>
  
);
}

export default SearchBar;