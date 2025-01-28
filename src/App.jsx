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
import { useRef } from "react";

function App() {
  const contactRef = useRef(null); // Referencia a la sección de contacto

  return (
    <>
      <Menu contactRef={contactRef} />
      <section className="mainSection">
        <Inicio contactRef={contactRef} />
        <Servicios />
        <Ofrecemos />
        <Elegirnos />
        <About />
        <div ref={contactRef}>
          <ContactUs />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
