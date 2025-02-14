import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../assets/logo.jpg";
import { GoGoal } from "react-icons/go";
import { ImEyePlus } from "react-icons/im";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";

const About = () => {
  // Detectar cuando los elementos están en vista
  const { ref: quienesSomosRef, inView: quienesSomosInView } = useInView({
    triggerOnce: true, // Se activa solo una vez
    threshold: 0.5, // 50% del elemento debe estar en vista
  });

  const { ref: imagenRef, inView: imagenInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: misionRef, inView: misionInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: visionRef, inView: visionInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  // Animaciones para los elementos
  const fadeIn = useSpring({
    opacity: quienesSomosInView ? 1 : 0,
    transform: quienesSomosInView ? "translateY(0)" : "translateY(20px)",
    config: { tension: 220, friction: 120 },
  });

  const fadeInImage = useSpring({
    opacity: imagenInView ? 1 : 0,
    transform: imagenInView ? "translateY(0)" : "translateY(20px)",
    config: { tension: 220, friction: 120 },
  });

  const slideFromLeft = useSpring({
    opacity: misionInView ? 1 : 0,
    transform: misionInView ? "translateX(0)" : "translateX(-100%)",
    config: { tension: 220, friction: 120 },
  });

  const slideFromRight = useSpring({
    opacity: visionInView ? 1 : 0,
    transform: visionInView ? "translateX(0)" : "translateX(100%)",
    config: { tension: 220, friction: 120 },
  });

  return (
    <>
      <section
        className="quienesSomos text-center mt-5 mb-5 me-lg-4"
        ref={quienesSomosRef}
        id="nosotros"
      >
        <animated.h2 style={fadeIn} className="subrayado">
          ¿QUIÉNES SOMOS?
        </animated.h2>
        <Container className="mt-5">
          <Row>
            <Col
              xs={{ order: 2, span: 12 }}
              md={{ order: 1, span: 6 }}
              ref={imagenRef}
            >
              <animated.img
                src={logo}
                alt="logo de Dofilssein con fondo blanco"
                width={300}
                className="img-logo-about img-fluid"
                style={fadeInImage}
              />
            </Col>
            <Col
              xs={{ order: 1, span: 12 }}
              md={{ order: 2, span: 6 }}
              className="mb-3"
            >
              <p>
                Somos Rocío, Aixa y Shaila, tres técnicas en programación
                egresadas de la Universidad Tecnológica Nacional de Tucumán. A
                través de <span className="resaltado">Dofilssein</span>, nuestro
                objetivo es simplificar y solucionar tus desafíos digitales con
                servicios especializados.
              </p>
              <h3 className="fs-4 resaltado">
                ¡Planificamos, resolvemos y desarrollamos!
              </h3>
              <p>
                Dofilssein nació de la pasión por resolver problemas
                tecnológicos de manera eficiente, buscando soluciones para las
                necesidades individuales y empresariales.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <article className="mt-5 about-section">
        <div className="row">
          {/* Misión */}
          <div
            className="col-md-12 d-flex justify-content-start"
            ref={misionRef}
          >
            <animated.div
              style={slideFromLeft}
              className="card-custom mission d-flex flex-column justify-content-center text-light"
            >
              <h2 className="fw-bold display-4 ms-2">MISIÓN</h2>
              <p className="p-2 fs-5 fw-semibold">
                Conectar con individuos y empresas que requieren soluciones de
                software a pequeña escala, brindando servicios eficientes y
                personalizados.
              </p>
              <div className="text-center">
                <GoGoal className="display-1" />
              </div>
            </animated.div>
          </div>

          {/* Visión */}
          <div
            className="col-md-12 d-flex justify-content-end"
            ref={visionRef}
          >
            <animated.div
              style={slideFromRight}
              className="card-custom vision d-flex flex-column justify-content-center align-items-end text-light"
            >
              <h2 className="fw-bold display-4 me-3">VISIÓN</h2>
              <p className="m-5 fs-5 fw-semibold">
                Ser pioneras en la provincia de Tucumán en el desarrollo de
                soluciones de software innovadoras, destacando por nuestra
                creatividad y calidad técnica.
              </p>
              <ImEyePlus className="display-1" />
            </animated.div>
          </div>
        </div>
      </article>
    </>
  );
};

export default About;
