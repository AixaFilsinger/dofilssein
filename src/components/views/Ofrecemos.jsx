import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { motion } from "framer-motion";

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
    animation: "subrayadoAnimacion 1s ease-in-out",
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
    transition: "transform 1s ease, color 0.5s ease",
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
          #cardtitle1:hover {
            transform: translateY(-5px);
            color: #286291;
          }
          
          #cardtitle1:hover::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: -5px;
            height: 3px;
            background-color:#286291;
            animation: subrayadoLento 1.5s forwards ease-out;
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
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.6 }}
            >
              <Card style={cardStyles}>
                <Card.Body style={cardBody}>
                  <Card.Title style={cardTitle} className="fs-4 card-title" id="cardtitle1">
                    1. Presupuesto sin costo
                  </Card.Title>
                  <Card.Text style={cardText} className="fs-5">
                    Compartinos tu necesidad, y te brindamos una solución
                    personalizada junto con un presupuesto completamente gratuito.
                  </Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
        {/* CARD 2 */}
        <Row className="gy-4">
          <Col xs={12}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.6 }}
            >
              <Card style={cardStyles}>
                <Card.Body style={cardBody}>
                  <Card.Title style={cardTitle} className="fs-4 card-title" id="cardtitle1">
                    2. SEO
                  </Card.Title>
                  <Card.Text style={cardText} className="fs-5">
                    Desarrollamos sitios con técnicas avanzadas de SEO para
                    ayudarte a destacar en los primeros resultados de búsqueda.
                  </Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
        {/* CARD 3 */}
        <Row className="gy-4">
          <Col xs={12}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.6 }}
            >
              <Card style={cardStyles}>
                <Card.Body style={cardBody}>
                  <Card.Title style={cardTitle} className="fs-4 card-title" id="cardtitle1">
                    3. Google Analytics
                  </Card.Title>
                  <Card.Text style={cardText} className="fs-5">
                    Con nuestras páginas, tendrás acceso a datos en vivo sobre el
                    tráfico y comportamiento de los usuarios en tu sitio.
                  </Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
        {/* CARD 4 */}
        <Row className="gy-4">
          <Col xs={12}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.6 }}
            >
              <Card style={cardStyles}>
                <Card.Body style={cardBody}>
                  <Card.Title style={cardTitle} className="fs-4 card-title" id="cardtitle1">
                    4. Velocidad
                  </Card.Title>
                  <Card.Text style={cardText} className="fs-5">
                    Creamos páginas web diseñadas para ofrecer tiempos de carga
                    ultrarrápidos, asegurando la mejor experiencia para tus
                    visitantes.
                  </Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Ofrecemos;
