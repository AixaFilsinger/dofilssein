import React from "react";

const Inicio = ({ contactRef }) => {
  const handleScrollToContact = () => {
    if (contactRef && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="home" id="inicio">
      <div className="contenedor">
        <h1 className="home-title">
          Conectamos para
          <br />
          <span className="txt-share"> COMPARTIR</span>
        </h1>
        <p className="home-description">
          En Dofilssein ofrecemos servicios de desarrollo de páginas web
          diseñadas para que tu negocio crezca y destaque.
        </p>
        <button onClick={handleScrollToContact} className="btn-cotz" aria-label="Solicitar cotización">
          Solicitar Cotización
        </button>
      </div>
    </section>
  );
};

export default Inicio;
