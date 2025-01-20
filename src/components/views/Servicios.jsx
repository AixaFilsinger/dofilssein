import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Card from "react-bootstrap/Card";

const Servicio = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const titleStyles = {
    position: "relative",
    textAlign: "center",
    bottom: "100px",
    fontSize: "2rem",
  };

  const subrayadoTitulo = {
    display: "block",
    width: "20%",
    margin: "0 auto",
    borderBottom: "3px solid #286291",
    marginTop: "10px",
    animation: "subrayadoAnimacion 0.6s ease-in-out",
  };

  const animationStyles = `
    @keyframes subrayadoAnimacion {
      0% {
        width: 0%;
      }
      100% {
        width: 20%;
      }
    }
  `;

  const containerStyles = {
    position: "relative",
    bottom: "60px",
  };

  const cardTitle = {
    position: "relative",
    textAlign: "center",
    color: "#286291",
    marginBottom: "15px",
    fontSize: "1.75rem",
  };

  const cardBody = {
    backgroundColor: "#f9fbf2",
    padding: "20px",
  };

  const cardText = {
    position: "relative",
    textAlign: "center",
    fontSize: "1.3rem",
  };
  const cardStyles = (index) => ({
    width: "100%",
    margin: "initial",
    border: "none",
    transition: "transform 0.3s ease", 
    transform: hoveredCard === index ? "translateY(-10px)" : "translateY(0)",
  });

  return (
    <>
      <style>{animationStyles}</style>
      <section className="services" id="servicio"></section>
      <h2
        className="servicio-title text-center mb-4"
        style={titleStyles}
        id="title-services"
      >
        NUESTROS SERVICIOS
        <span style={subrayadoTitulo}></span>
      </h2>
      <Container className="mt-5" style={containerStyles}>
        <Row className="gy-4">
          {/* CARD 1 */}
          <Col xs={12} sm={6} md={4}>
            <Card
              style={cardStyles(0)} 
              onMouseEnter={() => setHoveredCard(0)} 
              onMouseLeave={() => setHoveredCard(null)} 
            >
              <Card.Body style={cardBody}>
                <Card.Title style={cardTitle} className="fs-4">
                  1. Sitios Web
                </Card.Title>
                <Card.Text style={cardText} className="fs-5">
                  Creamos sitios web personalizados y completos, adaptados a las
                  necesidades de tu negocio o emprendimiento. Landing Page,
                  Aplicaciones Web, Sistemas Web, E-Commerce, Blogs, ¡Y mucho
                  más!
                </Card.Text>
                <DotLottieReact
                  src="https://lottie.host/5cf051ad-f74c-416c-afbe-95ec16c9a0b3/19k3L5LqHn.lottie"
                  loop
                  autoplay
                />
              </Card.Body>
            </Card>
          </Col>
          {/* CARD 2 */}
          <Col xs={12} sm={6} md={4}>
            <Card
              style={cardStyles(1)} 
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)} 
            >
              <Card.Body style={cardBody}>
                <Card.Title style={cardTitle} className="fs-4">
                  2. Traducción ES/ENG - ENG/ESP
                </Card.Title>
                <Card.Text style={cardText} className="fs-5">
                  Ofrecemos servicios de traducción de alta calidad para sitios
                  web. Nos especializamos en garantizar precisión, claridad y
                  adaptación cultural en ambos idiomas, ayudándote a conectar tu
                  negocio con una audiencia global.
                </Card.Text>
                <DotLottieReact
                  src="https://lottie.host/d310720a-4250-44b6-ae42-2d614ad2bbd2/Kcp5LpQiH9.lottie"
                  loop
                  autoplay
                />
              </Card.Body>
            </Card>
          </Col>
          {/* CARD 3 */}
          <Col xs={12} sm={6} md={4}>
            <Card
              style={cardStyles(2)} 
              onMouseEnter={() => setHoveredCard(2)} 
              onMouseLeave={() => setHoveredCard(null)} 
            >
              <Card.Body style={cardBody}>
                <Card.Title style={cardTitle} className="fs-4">
                  3. Marketing Digital
                </Card.Title>
                <Card.Text style={cardText} className="fs-5">
                  Impulsa tu marca al siguiente nivel con nuestras soluciones de
                  Marketing Digital. Diseñamos campañas personalizadas para
                  redes sociales, publicidad online y posicionamiento SEO,
                  enfocándonos en maximizar tu alcance, atraer clientes y
                  aumentar tus ventas.
                </Card.Text>
                <DotLottieReact
                  src="https://lottie.host/7a01d254-2d0a-400d-a5d7-c8085ca23634/u8qcQyt7MY.lottie"
                  loop
                  autoplay
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Servicio;
