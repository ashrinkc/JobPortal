import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../Images/logo.png";
import { Link } from "react-router-dom";
function BasicExample() {
  return (
    <Navbar expand="lg" className="navbb navbar navbar-dark">
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/">
            <img className="BrandLogo" src={logo} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navMar">
            <Link to="/">
              <Nav.Link href="#home">
                <a
                  className="navItems"
                  style={{ color: "white", fontSize: "12px" }}
                >
                  HOME
                </a>
              </Nav.Link>
            </Link>
            <Link to="/jobs">
              <Nav.Link href="#link">
                <a
                  className="navItems"
                  style={{ color: "white", fontSize: "12px" }}
                >
                  JOBS
                </a>
              </Nav.Link>
            </Link>
            <Link to="/recruitment">
              <Nav.Link href="#link">
                <a
                  className="navItems"
                  style={{ color: "white", fontSize: "12px" }}
                >
                  RECRUITMENT
                </a>
              </Nav.Link>
            </Link>
            <Link to="/blog">
              <Nav.Link href="#link">
                <a
                  className="navItems"
                  style={{ color: "white", fontSize: "12px" }}
                >
                  BLOG
                </a>
              </Nav.Link>
            </Link>
            <Link to="/about">
              <Nav.Link href="#link">
                <a
                  className="navItems"
                  style={{ color: "white", fontSize: "12px" }}
                >
                  ABOUT
                </a>
              </Nav.Link>
            </Link>
            <Link to="/contact">
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
  );
}

export default BasicExample;
