import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Header.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { debounce } from "debounce";
import img from "../../assets/react.svg"

const Header = () => {
  const [show, setShow] = useState(false);

  const timer = debounce(() => {
    setShow(false);
    console.log(false);
  }, 200);

  let timeout = setTimeout(timer, 200);

  const onEnter = debounce(() => {
    if (!show) {
      setShow(true);
      console.log("entered:" + show);
    }
  }, 500);

  const onLeave = debounce(() => {
    if (show) {
      clearTimeout(timeout);
      timeout;
    }
  }, 500);
  return (
    <div
      style={{
        position: "fixed",
        zIndex: "999",
        width: "100vw",
      }}
    >
      <Navbar bg="transparent" className="nav-container">
        <Container>
          <Navbar.Brand f="#home">
            <img
              alt=""
              src={img}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            React Bootstrap
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link
                to="/"
                className="link"
                onMouseOver={onEnter}
                onMouseLeave={onLeave}
                style={{
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  padding: "0.4rem",
                  borderRadius: "7px",
                }}
              >
                <span class="material-symbols-rounded">home</span>
                <span style={{ fontSize: "1.2rem" }}>home</span>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/store"
                className="link"
              >
                <span class="material-symbols-rounded">store</span>
                <span style={{ fontSize: "1.2rem" }}>Store</span>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/diet"
                className="link"
              >
                <span class="material-symbols-rounded">nutrition</span>
                <span style={{ fontSize: "1.2rem" }}>Diet</span>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/blogs"
                className="link"
              >
                <span class="material-symbols-rounded">article</span>
                <span style={{ fontSize: "1.2rem" }}>Blogs</span>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/tools"
                className="link"
              >
                <span class="material-symbols-rounded">body_fat</span>
                <span style={{ fontSize: "1.2rem" }}>Tools</span>
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {show && (
        <div className="category-container" onMouseEnter={onEnter}>
          {show}
        </div>
      )}
    </div>
  );
};

export default Header;
