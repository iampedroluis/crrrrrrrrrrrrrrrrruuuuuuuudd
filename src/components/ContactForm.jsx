import React from "react";
import { useForm } from "../hooks/useForm";

const initialForm = {
    name:"",
    email:"",
    subject:"",
    comments:""
};

const validationsForm = (form) => {
    let errors = {}
    if(!form.name.trim()){
        errors.name = "El campo 'Nombre' es requerido"
    }
    return errors
};

let styles = {
    fontWeight: "bold",
    color: '#dc3545'
}

export const ContactForm = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);


  return (
    <div>
      <h2>Formulario de Contacto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Escribe tu nombre"
          onChange={handleChange}
          value={form.name}
          required
          onBlur={handleBlur}
        />
        {errors.name && <p style={styles}>{errors.name}</p>}
        <input
          type="email"
          name="email"
          placeholder="Escribe tu E-mail"
          onChange={handleChange}
          value={form.email}
          required
          onBlur={handleBlur}
        />
        {errors.email && <p style={styles}>{errors.email}</p>}
        <input
          type="text"
          name="subject"
          placeholder="Asunto a tratar"
          onChange={handleChange}
          value={form.subject}
          required
          onBlur={handleBlur}
        />
        {errors.subject && <p style={styles}>{errors.subject}</p>}
        <textarea
          name="comments"
          cols="50"
          rows="5"
          placeholder="Escribe tus comentarios"
          onChange={handleChange}
          value={form.comments}
          required
          onBlur={handleBlur}
        ></textarea>
        {errors.comments && <p style={styles}>{errors.comments}</p>}
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};
