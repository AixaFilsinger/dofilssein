import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import About from "./components/views/About";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Menu></Menu>
      <section className="mainSection">
        <About></About>
      </section>
      <Footer></Footer>
    </>
  );
}

export default App;
