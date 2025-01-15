import { Container, Row } from 'react-bootstrap';
import logoDofilssein from '../../assets/LOGO BLANCO Y CELESTE PNG.png'
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";


const Footer = () => {
    return (
        <footer className="text-light">
        <Container>
          <Row>
            
            <aside className="col-12 col-md-4 text-center">
              
              <ul className=" ps-0 mt-5 list-unstyled">
                <li className="ps-0 fw-semibold">Más información</li>
                <li className="ps-0"><a href="./index.html" className="text-decoration-none text-light">Inicio</a></li>
                <li className="ps-0"><a href="#sobreNosotros" className="text-decoration-none text-light">Servicios</a></li>
                <li className="ps-0"><a href="#clientes" className="text-decoration-none text-light">Proyectos</a></li>
                <li className="ps-0"><a href="#clientes" className="text-decoration-none text-light">Sobre Nosotros</a></li>
                <li className="ps-0"><a href="#contacto" className="text-decoration-none text-light">Contacto</a></li>
                <li className="ps-0"><p className='m-0 p-0'>Email:</p> Dofilssein@gmail.com</li>
              </ul>
            </aside>
            <aside className="col-12 col-md-4 text-center">
            <img src={logoDofilssein} width={300} alt="Logo de Dofilssein" className="mt-5" loading="lazy"/>
              
            </aside>
            <aside className="col-12 col-md-4 text-center">
            <h5 className="mt-5 fw-semibold fs-4">¡Seguinos en nuestras redes!</h5>
              <div className="text-center fs-3">
                <a href="https://www.facebook.com/gesinco" className="text-light"><BsFacebook/></a>
                <a href="https://www.instagram.com/gesincoar?igsh=cm5ycHptNGtzbW1o" className="text-light mx-2"><BsInstagram></BsInstagram></a>
                <a href="https://www.linkedin.com/company/gesinco/" className="text-light"><BsLinkedin /></a>
              </div>
    
            </aside>
          </Row>
        </Container>
        <section className=" text-center dfs">
        <ul className="list-unstyled mt-3">
          
          <li className="mb-0 p-0">© Todos los derechos reservados</li>
          
        </ul>
      </section>
      </footer>
    
      
    );
};

export default Footer;