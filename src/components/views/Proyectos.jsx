import { TiArrowForwardOutline } from "react-icons/ti";
import { Container} from "react-bootstrap";
import gesinco from "../../assets/gesinco.png";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIosNew } from "react-icons/md";


const Proyectos = () => {
  return (
    <Container className="proyectos mt-5 text-center ">
      <h2 className="subrayado my-5">NUESTROS PROYECTOS</h2>
      <aside className="d-flex align-items-center justify-content-center"><MdOutlineArrowBackIosNew className="icon-py display-2" />
         <section className="card-proyecto ">
          
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
            
          </section><MdOutlineArrowForwardIos className="icon-py display-2" />
      </aside>
         
    </Container>
  );
};

export default Proyectos;