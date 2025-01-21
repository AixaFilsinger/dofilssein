import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';



const Elegirnos = () => {
  const titleStyles = {
    position: "relative",
    top: "10px",
    textAlign: "center",
    fontSize: "2rem",
  };

  const subrayadoTitulo = {
    display: "block",
    width: "20%",
    margin: "0 auto",
    borderBottom: "3px solid #286291",
    marginTop: "10px",
    animation: "subrayadoAnimaciones 1.2s ease-in-out",
  };

  const animationEstilos = `
    @keyframes subrayadoAnimaciones {
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

  const containerEstilos = {
    position: "relative",
    top: "20px",
  };

  const cardTitulo = {
    position: "relative",
    textAlign: "center",
    color: "#132f45",
    marginBottom: "15px",
    fontSize: "1.75rem",
  };

  const cardCuerpo = {
    backgroundColor: "#b8bacf",
    padding: "15px",
    borderRadius: "10px",
  };

  const cardTexto = {
    position: "relative",
    top: "20px",
    textAlign: "center",
    fontSize: "1.3rem",
  };

  const cardEstilos = {
    width: "100%",
    margin: "15px",
    border: "none",
  };

  const iconEstilos = {
    fontSize: "2.5rem",  
    color: "#286291",     
    display: "block",     
    margin: "20px auto",  
  };

  return (
    <>
      <style>
        {animationEstilos}
        {`
          #cardd:hover {
            transform: translateY(-5px);
            color: #132f45;
          }

          #cardd:hover::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: -5px;
            height: 3px;
            background-color:#132f45;
            animation: subrayadoLento 1.5s forwards ease-out;
          }
        `}
      </style>
      <section className="elegir" id="eleg"></section>
      <h2
        className="ele-title text-center mb-4"
        style={titleStyles}
        id="title-elegirnos"
      >
        ¿POR QUÉ ELEGIRNOS?
        <span style={subrayadoTitulo}></span>
      </h2>
      <Container className="mt-5" style={containerEstilos}>
        <Row className="gy-4">
          {/* CARD 1 */}
          <Col xs={12} sm={6} md={4}>
            <Card style={cardEstilos}>
              <Card.Body style={cardCuerpo}>
                <Card.Title style={cardTitulo} className="fs-4" id="cardd">
                  Impulsamos tu negocio
                </Card.Title>
              </Card.Body>
              <FontAwesomeIcon icon={faRocket} style={iconEstilos} />
              <Card.Text style={cardTexto} className="fs-5">
                Hacemos que tu negocio se destaque en los motores de búsqueda,
                conectando con más clientes y ayudándote a aumentar tus ventas
                de manera efectiva.
              </Card.Text>
            </Card>
          </Col>
          {/* CARD 2 */}
          <Col xs={12} sm={6} md={4}>
            <Card style={cardEstilos}>
              <Card.Body style={cardCuerpo}>
                <Card.Title style={cardTitulo} className="fs-4" id="cardd">
                  Somos los mejores en sistemas y diseño
                </Card.Title>
              </Card.Body>
              <FontAwesomeIcon icon={faCode} style={iconEstilos} />
              <Card.Text style={cardTexto} className="fs-5">
                Nos especializamos en sistemas innovadores y diseños únicos,
                creando plataformas atractivas, funcionales y fáciles de usar
                que se adaptan a las necesidades de tus clientes.
              </Card.Text>
            </Card>
          </Col>
          {/* CARD 3 */}
          <Col xs={12} sm={6} md={4}>
            <Card style={cardEstilos}>
              <Card.Body style={cardCuerpo}>
                <Card.Title style={cardTitulo} className="fs-4" id="cardd">
                  Te acompañamos en cada paso
                </Card.Title>
              </Card.Body>
              <FontAwesomeIcon icon={faHandHoldingHeart} style={iconEstilos}/>
              <Card.Text style={cardTexto} className="fs-5">
                Desde la idea inicial hasta el lanzamiento, estamos contigo para
                garantizar que obtengas la mejor solución, optimizada para el
                éxito de tu negocio.
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Elegirnos;
