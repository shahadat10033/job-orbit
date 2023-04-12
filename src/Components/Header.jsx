import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <Navbar expand="lg" style={{ backgroundColor: "#FAF8FF  " }}>
        <Container fluid>
          <Link to="/" className="text-decoration-none fw-bold">
            <Navbar.Brand> JOB ORBIT</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link
                to="/statistics"
                className="text-decoration-none text-secondary"
              >
                <span className="me-3 ">Statistics</span>
              </Link>
              <Link
                to="/appliedJob"
                className="text-decoration-none text-secondary"
              >
                <span className="me-4 ">Applied Jobs</span>
              </Link>
              <Link to="/blog" className="text-decoration-none text-secondary">
                <span className="me-3 ">Blog</span>
              </Link>
            </Nav>
            <Link to="/appliedJob">
              <button
                className="btn text-white "
                style={{ backgroundColor: "#8A82FF" }}
              >
                Start Applying
              </button>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
