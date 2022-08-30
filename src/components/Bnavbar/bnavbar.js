import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../Images/logo.png";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
function BasicExample() {
  return (
    <div className="mainNavbb">
      <Navbar expand="lg" className="navbb navbar navbar-dark">
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/">
              <img className="BrandLogo" src={logo} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="navMar">
              <Link to="/" style={{ textDecoration: "none" }}>
                <Nav.Link href="#home">
                  <a
                    className="navItems"
                    style={{ color: "white", fontSize: "12px" }}
                  >
                    HOME
                  </a>
                </Nav.Link>
              </Link>
              <Link to="/jobs" style={{ textDecoration: "none" }}>
                <Nav.Link href="#link">
                  <a
                    className="navItems"
                    style={{ color: "white", fontSize: "12px" }}
                  >
                    JOBS
                  </a>
                </Nav.Link>
              </Link>
              <Link to="/recruitment" style={{ textDecoration: "none" }}>
                <Nav.Link href="#link">
                  <a
                    className="navItems"
                    style={{ color: "white", fontSize: "12px" }}
                  >
                    RECRUITMENT
                  </a>
                </Nav.Link>
              </Link>
              {/* <Link to="/about">
              <Nav.Link href="#link">
                <a
                  className="navItems"
                  style={{ color: "white", fontSize: "12px" }}
                >
                  GALLERY
                </a>
              </Nav.Link>
            </Link> */}
              <Link to="/blog" style={{ textDecoration: "none" }}>
                <Nav.Link href="#link">
                  <a
                    className="navItems"
                    style={{ color: "white", fontSize: "12px" }}
                  >
                    BLOG
                  </a>
                </Nav.Link>
              </Link>
              <Link to="/about" style={{ textDecoration: "none" }}>
                <Nav.Link href="#link">
                  <a
                    className="navItems"
                    style={{ color: "white", fontSize: "12px" }}
                  >
                    ABOUT
                  </a>
                </Nav.Link>
              </Link>

              <Link to="/contact" style={{ textDecoration: "none" }}>
                <Nav.Link href="#link">
                  <a
                    className="navItems"
                    style={{ color: "white", fontSize: "12px" }}
                  >
                    CONTACT
                  </a>
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default BasicExample;
