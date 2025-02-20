import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Card from "react-bootstrap/Card";
import { motion } from "framer-motion";

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
      0% { width: 0%; }
      100% { width: 20%; }
    }
  `;

  const containerStyles = {
    position: "relative",
    bottom: "60px",
  };

  const cardTitle = {
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
    textAlign: "center",
    fontSize: "1.3rem",
  };

  const cardStyles = {
    width: "100%",
    border: "none",
  };

  // Variantes de animación para el "pop" al hacer scroll
  const popEffect = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <article className="serviciosf">
      <style>{animationStyles}</style>
      <motion.section
        className="services"
        id="servicios"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          className="servicio-title text-center mb-3 mt-5"
          style={titleStyles}
          id="title-services"
          variants={fadeInUp}
        >
          NUESTROS SERVICIOS
          <span style={subrayadoTitulo}></span>
        </motion.h2>

        <Container className="mt-5" style={containerStyles}>
          <Row className="gy-4">
            {/* CARD 1 */}
            <Col xs={12} sm={6} md={4}>
              <motion.div
                variants={popEffect}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <Card
                  style={cardStyles}
                  onMouseEnter={() => setHoveredCard(0)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <Card.Body style={cardBody}>
                    <Card.Title style={cardTitle} className="fs-4">1. Sitios Web</Card.Title>
                    <Card.Text style={cardText} className="fs-5">
                      Creamos sitios web personalizados y completos, adaptados a las
                      necesidades de tu negocio o emprendimiento. Landing Page,
                      Aplicaciones Web, Sistemas Web, E-Commerce, Blogs, ¡Y mucho más!
                    </Card.Text>
                    <DotLottieReact
                      src="https://lottie.host/5cf051ad-f74c-416c-afbe-95ec16c9a0b3/19k3L5LqHn.lottie"
                      loop
                      autoplay
                    />
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>

            {/* CARD 2 */}
            <Col xs={12} sm={6} md={4}>
              <motion.div
                variants={popEffect}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <Card
                  style={cardStyles}
                  onMouseEnter={() => setHoveredCard(1)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <Card.Body style={cardBody}>
                    <Card.Title style={cardTitle} className="fs-4">2. Traducción ES/ENG - ENG/ESP</Card.Title>
                    <Card.Text style={cardText} className="fs-5">
                      Ofrecemos servicios de traducción de alta calidad para sitios web. 
                      Nos especializamos en garantizar precisión, claridad y adaptación cultural 
                      en ambos idiomas, ayudándote a conectar tu negocio con una audiencia global.
                    </Card.Text>
                    <DotLottieReact
                      src="https://lottie.host/d310720a-4250-44b6-ae42-2d614ad2bbd2/Kcp5LpQiH9.lottie"
                      loop
                      autoplay
                    />
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>

            {/* CARD 3 */}
            <Col xs={12} sm={6} md={4}>
              <motion.div
                variants={popEffect}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <Card
                  style={cardStyles}
                  onMouseEnter={() => setHoveredCard(2)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <Card.Body style={cardBody}>
                    <Card.Title style={cardTitle} className="fs-4">3. Marketing Digital</Card.Title>
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
              </motion.div>
            </Col>
          </Row>
        </Container>
      </motion.section>
    </article>
  );
};

export default Servicio;
