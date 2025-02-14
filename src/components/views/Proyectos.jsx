import React, { useEffect, useState } from "react";
import { TiArrowForwardOutline } from "react-icons/ti";
import { Container } from "react-bootstrap";
import gesinco from "../../assets/gesinco.png";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const Proyectos = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const position = window.scrollY;
    const threshold = 200; // Ajusta el umbral para visibilidad
    if (position > threshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const titleStyles = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(20px)",
    transition: "opacity 1s ease-in-out, transform 1s ease-out",
  };

  const cardStyles = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0)" : "translateX(100%)",
    transition: "opacity 1s ease-in-out, transform 1s ease-out",
  };

  return (
    <Container className="proyectos mt-5 text-center" id="proyectos">
      <h2 className="subrayado my-5" style={titleStyles}>
        NUESTROS PROYECTOS
      </h2>
      <aside className="d-flex align-items-center justify-content-center">
        <MdOutlineArrowBackIosNew className="icon-py display-2" />
        <section className="card-proyecto" style={cardStyles}>
          <aside className="text-center mt-3">
            <h2 className="fw-semibold titulo-py pt-3">
              Gesinco <TiArrowForwardOutline />
            </h2>

            <img
              src={gesinco}
              alt="logo de la empresa gesinco gestion integral de cobranzas"
              width={250}
              className="img-proyecto"
            />
          </aside>
          <aside className="p-4 p-py">
            <p>
              Diseñamos la web de Gesinco, expertos en gestión de mora y
              recupero de activos. Creamos un sitio para resaltar los
              servicios que ofrece la empresa, junto a un formulario de
              contacto completo.
            </p>
          </aside>
        </section>
        <MdOutlineArrowForwardIos className="icon-py display-2" />
      </aside>
    </Container>
  );
};

export default Proyectos;
