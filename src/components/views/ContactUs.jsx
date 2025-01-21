import React, { useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    nombre: "",
    asunto: "",
    correo: "",
    mensaje: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    // Aquí puedes enviar los datos al backend o realizar otra acción
  };

  return (
    <section className="contact-section">
        <div className="contenedor-titulo">
            <h2 className="title-box">Trabajemos juntos</h2>
            <p className="intro-contact">Confía en nosotros para desarrollar tus proyectos. </p>
        </div>
        <div className="contenedor-form">
            <form onSubmit={handleSubmit}>
            <p>
            ¡Hola! mi nombre es{" "}
            <input
                type="text"
                name="nombre"
                placeholder="Tu nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
            />
            , y me gustaría{" "}
            <input
                type="text"
                name="asunto"
                placeholder="Especificar asunto"
                value={formData.asunto}
                onChange={handleChange}
                required
            />
            . Pueden contactarme a mi correo{" "}
            <input
                type="email"
                name="correo"
                placeholder="Tu correo"
                value={formData.correo}
                onChange={handleChange}
                required
            />
            para hablar en detalle sobre{" "}
            <textarea
                name="mensaje"
                placeholder="Escribe tu mensaje aquí"
                value={formData.mensaje}
                onChange={handleChange}
                required
            ></textarea>
            .
            </p>
            <button type="submit">
            Enviar
            </button>
        </form>
        </div>
    </section>
  );
}

export default ContactUs;