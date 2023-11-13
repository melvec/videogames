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
    platforms: "",
  });
  const submitHandler = (event) => {
    event.preventDefault();
    console.log("game created");
    //createGame(form);
  };
  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [property]: value });
    validate({ ...form, [property]: value }, errors, setErrors);
  };

  return (
    <>
      <div className={style.form - container}>
        <form onSubmit={submitHandler}>
          <label htmlFor="email">Name: </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className={errors.name ? style.error : style.success}
          />
        </form>

        
      </div>
    </>
  );
}

export default Form;
