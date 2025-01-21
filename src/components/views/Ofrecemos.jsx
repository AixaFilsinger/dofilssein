import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const Ofrecemos = () => {
  const titleStyles = {
    position: "relative",
    textAlign: "center",
    bottom: "15px",
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

        @keyframes subrayadoLento {
          0% {
            width: 0;
          }
          100% {
            width: 100%;
          }
        }
      `;

  const containerStyles = {
    position: "relative",
  };

  const cardTitle = {
    position: "relative",
    textAlign: "center",
    color: "#286291",
    marginBottom: "15px",
    fontSize: "1.75rem",
    transition: "transform 0.5s ease, color 0.5s ease",
  };

  const cardBody = {
    backgroundColor: "#ffff",
    padding: "20px",
  };

  const cardText = {
    position: "relative",
    textAlign: "center",
    fontSize: "1.3rem",
  };

  const cardStyles = {
    margin: "0 auto", 
    border: "none",
    maxWidth: "600px", 
  };

  return (
    <>
      <style>
        {animationStyles}
        {`
          .card-title:hover {
            transform: translateY(-5px);
            color: #286291;
          }
          
          .card-title:hover::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: -5px;
            height: 3px;
            background-color:#286291;
            animation: subrayadoLento 0.5s forwards ease-out;
          }
        `}
      </style>
      <section className="elegirnos" id="ele"></section>
      <h2
        className="elegirnos-title text-center mb-4"
        style={titleStyles}
        id="title-elegirnos"
      >
        OFRECEMOS
        <span style={subrayadoTitulo}></span>
      </h2>
      <Container className="mt-5" style={containerStyles}>
        {/* CARD 1 */}
        <Row className="gy-4">
          <Col xs={12}>
            <Card style={cardStyles}>
              <Card.Body style={cardBody}>
                <Card.Title style={cardTitle} className="fs-4 card-title">
                  1. Presupuesto sin costo
                </Card.Title>
                <Card.Text style={cardText} className="fs-5">
                  Compartinos tu necesidad, y te brindamos una solución
                  personalizada junto con un presupuesto completamente gratuito.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* CARD 2 */}
        <Row className="gy-4">
          <Col xs={12}>
            <Card style={cardStyles}>
              <Card.Body style={cardBody}>
                <Card.Title style={cardTitle} className="fs-4 card-title">
                  2. SEO
                </Card.Title>
                <Card.Text style={cardText} className="fs-5">
                  Desarrollamos sitios con técnicas avanzadas de SEO para
                  ayudarte a destacar en los primeros resultados de búsqueda.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* CARD 3 */}
        <Row className="gy-4">
          <Col xs={12}>
            <Card style={cardStyles}>
              <Card.Body style={cardBody}>
                <Card.Title style={cardTitle} className="fs-4 card-title">
                  3. Google Analytics
                </Card.Title>
                <Card.Text style={cardText} className="fs-5">
                  Con nuestras páginas, tendrás acceso a datos en vivo sobre el
                  tráfico y comportamiento de los usuarios en tu sitio.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* CARD 4 */}
        <Row className="gy-4">
          <Col xs={12}>
            <Card style={cardStyles}>
              <Card.Body style={cardBody}>
                <Card.Title style={cardTitle} className="fs-4 card-title">
                  4. Velocidad
                </Card.Title>
                <Card.Text style={cardText} className="fs-5">
                  Creamos páginas web diseñadas para ofrecer tiempos de carga
                  ultrarrápidos, asegurando la mejor experiencia para tus
                  visitantes.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Ofrecemos;
