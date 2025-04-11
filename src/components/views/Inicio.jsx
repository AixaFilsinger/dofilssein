import React from "react";
import { motion } from "framer-motion";

const Inicio = ({ contactRef }) => {
  const handleScrollToContact = () => {
    if (contactRef?.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="home" id="inicio">
      <div className="cont-secc">
        <div className="contenedor">
          <motion.h1
            className="home-title"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Conectamos para
            <br />
            <motion.span
              className="txt-share"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            >
              COMPARTIR
            </motion.span>
          </motion.h1>

          <motion.p
            className="home-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            En Dofilssein ofrecemos servicios de desarrollo de páginas web
            diseñadas para que tu negocio crezca y destaque.
          </motion.p>

          <motion.button
            onClick={handleScrollToContact}
            className="btn-cotz"
            aria-label="Solicitar cotización"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Solicitar Cotización
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Inicio;

