import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../App.css";
function SecondNavbar() {
  return (
    <Navbar expand="lg" className="second-navbar">
      <Container>
        <Nav className="mx-auto text-center second-navbar-nav">
          <Link className=" mx-3 " to="/watercolour">
            WATERCOLOUR
          </Link>
          <Link className=" mx-3 second-navbar-link" to="/pencil">
            PENCIL
          </Link>
          <Link className=" mx-3 second-navbar-link" to="/acrylic">
            ACRYLIC
          </Link>
          <Link className=" mx-3 second-navbar-link" to="/oil">
            OIL
          </Link>
          <Link className=" mx-3 second-navbar-link" to="/guides">
            GUIDES
          </Link>
          <Link className=" mx-3 second-navbar-link" to="/sketchbooks">
            SKETCHBOOKS
          </Link>
          <Link className=" mx-3 second-navbar-link" to="/prints">
            PRINTS
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default SecondNavbar;
