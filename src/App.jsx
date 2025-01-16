import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./assets/styles/Inicio.css";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Inicio from "./components/views/Inicio";
import About from "./components/views/About";
import ContactUs from "./components/views/ContactUs";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Menu></Menu>
      <section className="mainSection">
        <Inicio></Inicio>
        <About></About>
        <ContactUs></ContactUs>
      </section>
      <Footer></Footer>
    </>
  );
}

export default App;
