import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import "../App.css";
import vk from "../images/vk.png";
import youtube from "../images/youtube.png";
import instagram from "../images/insta.png";
import pinterest from "../images/pinterest.png";

function OffcanvasExample() {
  return (
    <>
      <div className="col-lg-12 col-md-12 col-12">
        {["lg"].map((expand) => (
          <Navbar key={expand} expand={expand}  variant='dark'>
            <Container fluid>
              <Navbar.Brand></Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
                className="toggle-1"
               
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="top"
                className="h-100"
              >
                <Offcanvas.Header closeButton children>
                  <Offcanvas.Title
                    id={`offcanvasNavbarLabel-expand-${expand}`}
                  ></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="offcanvas-main">
                  <Nav className="ms-auto mt-3 fw-bolder first-navbar">
                    <Link
                      className="mx-2 first-navbar-block first-navbar-color"
                      to="/guide"
                    >
                      Buy my e-guide
                    </Link>
                    <Link to="/shop" className=" mx-3 first-navbar-color ">
                      Shop
                    </Link>
                    <Link
                      className="mx-3  first-navbar-color "
                      to="/commission"
                    >
                      Commissions
                    </Link>
                    <Link className="mx-3 first-navbar-color " to="/delivery">
                      Delivery
                    </Link>
                    <Link className="mx-3 first-navbar-color" to="/about">
                      About
                    </Link>
                    <Link className="mx-3 first-navbar-color" to="/contacts">
                      Contacts
                    </Link>
                  </Nav>
                  <Nav className="fw-bolder  mx-5  first-navbar ">
                    <Link className="me-5 mt-2" to="/guide ">
                      <Button className="fw-bold  first-navbar-button first-navbar-second-block ">
                        Buy e-guide
                      </Button>
                    </Link>
                    <Link
                      className="me-3 mt-3 first-navbar-second-block "
                      to="/english"
                    >
                      English
                    </Link>
                    <Link
                      className="mt-3  first-navbar-second-block "
                      to="/pyccknn"
                    >
                      Русский
                    </Link>
                  </Nav>

                  <div className="mt-3 first-navbar-block ">
                    <a
                      href="https://vk.com/humidpeach"
                      className="mx-2 first-navbar-block "
                    >
                      <img src={vk} alt="vk" />{" "}
                    </a>
                    <a
                      href="https://www.youtube.com/c/HumidPeach"
                      className="mx-2 large-block"
                    >
                      <img src={youtube} alt="youtube" />
                    </a>
                    <a
                      href="https://www.instagram.com/humid_peach/"
                      className="mx-2 large-block"
                    >
                      <img src={instagram} alt="youtube" />
                    </a>
                    <a
                      href="https://ru.pinterest.com/humid_peach/"
                      className="mx-2 large-block"
                    >
                      <img src={pinterest} alt="youtube" />
                    </a>
                  </div>

                  <div className="mt-3 ">
                    <a
                      className="me-1 mt-2  first-navbar-block  first-navbar-style text-dark"
                      href="/english"
                    >
                      English
                    </a>
                    <a
                      className="mt-2  first-navbar-block first-navbar-style text-dark"
                      href="/pyccknn"
                    >
                      Русский
                    </a>
                  </div>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </div>
    </>
  );
}

export default OffcanvasExample;
