// **📍 FORM PAGE |**: en esta vista se encontrará el formulario para crear un nuevo videojuego.

// Este formulario debe ser **controlado completamente con JavaScritp**. No se pueden utilizar validaciones HTML, ni utilizar librerías especiales para esto. Debe contar con los siguientes campos:

// -  Nombre.
// -  Imagen.
// -  Descripción.
// -  Plataformas.
// -  Fecha de lanzamiento.
// -  Rating.
// -  Posibilidad de seleccionar/agregar varios géneros en simultáneo.
// -  Botón para crear el nuevo videojuego.

// > [**IMPORANTE**]: es requisito que el formulario de creación esté validado sólo con JavaScript. Puedes agregar las validaciones que consideres. Por ejemplo: que el nombre del videojuego no pueda contener símbolos, o que el rating no pueda exceder determinado valor, etc.

import React from "react";
import { useState } from "react";
import style from "./Form.module.css";


const validate = (form, errors, setErrors) => {
    if (!form.name) setErrors({ ...errors, name: "Name cannot be empty" });
    if (!form.password) setErrors({ ...errors, password: "Password cannot be empty. Type: 1234" });
  
  };




function Form() {
  const [form, setForm] = useState({
    name: "",
    image: "",
    description: "",
    release: "",
    rating: "",
    platforms: [], // Change to an array to allow multiple platforms
    genres: [], // New field for selecting/aggregating multiple genres
  });

  const [errors, setErrors] = useState({
    name: "",
    image: "",
    description: "",
    release: "",
    rating: "",
    platforms: "",
    genres: "", // New field for genres
  });

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("game created");
    // createGame(form);
  };


  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
  
    // For handling multiple platforms and genres
    if (property === "platforms" || property === "genres") {
      const selectedOptions = event.target.selectedOptions;
      const selectedValues = Array.from(selectedOptions, (option) => option.value);
  
      setForm({ ...form, [property]: selectedValues });
    } else {
      setForm({ ...form, [property]: value });
    }
  
    validate({ ...form, [property]: value }, errors, setErrors);
  };
  

  
  return (
    <>
      <div className={style.formContainer}>
        <form onSubmit={submitHandler}>
          

        <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className={errors.name ? style.error : style.success}
          />

          <label htmlFor="image">Image URL: </label>
          <input
            type="text"
            name="image"
            value={form.image}
            onChange={handleChange}
            className={errors.image ? style.error : style.success}
          />

          <label htmlFor="description">Description: </label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className={errors.description ? style.error : style.success}
          ></textarea>

          <label htmlFor="release">Release Date: </label>
          <input
            type="date"
            name="release"
            value={form.release}
            onChange={handleChange}
            className={errors.release ? style.error : style.success}
          />

          <label htmlFor="rating">Rating: </label>
          <input
            type="number"
            name="rating"
            value={form.rating}
            onChange={handleChange}
            className={errors.rating ? style.error : style.success}
          />


          
          <label htmlFor="platforms">Platforms:  </label>
          <select
            name="platforms"
            value={form.platforms}
            onChange={handleChange}
            multiple
            className={errors.platforms ? style.error : style.success}
          >
            <option value="xbox">Xbox</option>
            <option value="pc">PC</option>
            <option value="playStation">PlayStation</option>
          </select>

          <label htmlFor="genres">Genres: </label>
          <select
            name="genres"
            value={form.genres}
            onChange={handleChange}
            multiple
            className={errors.genres ? style.error : style.success}
          >
            {/* Add options for different genres */}
            <option value="action">Action</option>
            <option value="adventure">Adventure</option>
            {/* Add more genres as needed */}
          </select>

          <button type="submit">Create</button>
        </form>
      </div>
    </>
  );
}

export default Form;
