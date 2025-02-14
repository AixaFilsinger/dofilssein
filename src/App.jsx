import { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./styles/Inicio.css";
import "./styles/ContactUs.css";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Inicio from "./components/views/Inicio";
import About from "./components/views/About";
import ContactUs from "./components/views/ContactUs";
import Servicios from "./components/views/Servicios";
import Ofrecemos from "./components/views/Ofrecemos";
import Elegirnos from "./components/views/Elegirnos";
import Proyectos from "./components/views/Proyectos";

function App() {
  const contactRef = useRef(null); // Referencia a la sección de contacto

  return (
    <>
      <Menu contactRef={contactRef} />
      <section className="mainSection">
        <Inicio></Inicio>
        <Servicios></Servicios>
        <Ofrecemos></Ofrecemos>
        <Elegirnos></Elegirnos>
        <Proyectos></Proyectos>
        <About></About>
        <ContactUs></ContactUs>
      </section>
      <Footer />
    </>
  );
}

export default App;
