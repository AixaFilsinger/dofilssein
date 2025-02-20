import React, { useState, useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion"; // Importar motion

function ContactUs({ constactRef }) {
  const [formData, setFormData] = useState({
    nombre: "",
    asunto: "",
    correo: "",
    mensaje: "",
  });

  const [status, setStatus] = useState("");
  const recaptchaRef = useRef(null);

  useEffect(() => {
    // cargar automáticamente el recaptcha con el script
    const loadRecaptcha = () => {
      const recaptchaScript = document.createElement("script");
      recaptchaScript.src = "https://www.google.com/recaptcha/api.js";
      recaptchaScript.async = true;
      recaptchaScript.defer = true;
      document.body.appendChild(recaptchaScript);
    };
    loadRecaptcha();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // obtener el token
    const recaptchaToken = document.querySelector(".g-recaptcha-response").value;

    if (!recaptchaToken) {
      setStatus("Por favor, completa el reCAPTCHA antes de enviar el formulario.");
      return;
    }
    setStatus("Enviando formulario...");
    sendEmail(recaptchaToken);
  };

  const sendEmail = (recaptchaToken) => {
    const templateParams = {
      nombre: formData.nombre,
      correo: formData.correo,
      asunto: formData.asunto,
      mensaje: formData.mensaje,
      "g-recaptcha-response": recaptchaToken,
    };

    emailjs
      .send(
        "service_201lake", // ID del servicio
        "contact_form_dfs", // ID de la plantilla
        templateParams,
        "qKy8ASEjZ9zoJlTVT" // Public Key de EmailJS
      )
      .then(
        (response) => {
          console.log("Correo enviado con éxito:", response.status, response.text);
          setStatus("Correo enviado con éxito. ¡Gracias por contactarnos!");
          setFormData({ nombre: "", asunto: "", correo: "", mensaje: "" });
        },
        (error) => {
          console.error("Error al enviar el correo:", error);
          setStatus("Hubo un error al enviar el correo. Intente nuevamente.");
        }
      );
  };

  return (
    <section className="contact-section" id="contact-us">
      <div className="contenedor-titulo">
        <h2 className="title-box">Trabajemos juntos</h2>
        <p className="intro-contact">
          Confía en nosotros para desarrollar tus proyectos.
        </p>
      </div>

      {/* Motion component con animación fade-in */}
      <motion.div
        className="contenedor-form"
        initial={{ opacity: 0 }}  // Estado inicial invisible
        animate={{ opacity: 1 }}  // Estado final visible
        transition={{ duration: 1 }} // Duración de la animación
      >
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
          <div
            className="g-recaptcha"
            data-sitekey="6LdL98UqAAAAAKC3Mzn2g73s6vuFvTaiywSJrvUN"
          ></div>
          <input
            type="hidden"
            ref={recaptchaRef}
            name="g-recaptcha-response"
          />

          <button type="submit">Enviar</button>
        </form>
        {status && <p className="status-mensaje">{status}</p>}
      </motion.div>
    </section>
  );
}

export default ContactUs;
