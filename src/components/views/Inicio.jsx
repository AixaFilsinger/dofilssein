import React from "react";
import { motion } from "framer-motion";

const Inicio = ({ contactRef }) => {
  const handleScrollToContact = () => {
    if (contactRef && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="home" id="inicio">
      <div className="contenedor">
        {/* Animación para el título */}
        <motion.h1
          className="home-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileInView={{ opacity: 1, y: 0 }} // Cuando entra en vista
          exit={{ opacity: 0, y: -50 }} // Cuando sale de la vista
        >
          Conectamos para
          <br />
          <motion.span
            className="txt-share"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            whileInView={{ opacity: 1, x: 0 }} // Cuando entra en vista
            exit={{ opacity: 0, x: -20 }} // Cuando sale de la vista
          >
            COMPARTIR
          </motion.span>
        </motion.h1>

        {/* Animación para la descripción */}
        <motion.p
          className="home-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          whileInView={{ opacity: 1, y: 0 }} // Cuando entra en vista
          exit={{ opacity: 0, y: 20 }} // Cuando sale de la vista
        >
          En Dofilssein ofrecemos servicios de desarrollo de páginas web
          diseñadas para que tu negocio crezca y destaque.
        </motion.p>

        {/* Animación para el botón */}
        <motion.button
          onClick={handleScrollToContact}
          className="btn-cotz"
          aria-label="Solicitar cotización"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }} // Pequeño efecto al pasar el mouse
          whileTap={{ scale: 0.95 }} // Efecto al hacer click
          whileInView={{ opacity: 1, scale: 1 }} // Cuando entra en vista
          exit={{ opacity: 0, scale: 0.8 }} // Cuando sale de la vista
        >
          Solicitar Cotización
        </motion.button>
      </div>
    </section>
  );
};

export default Inicio;
