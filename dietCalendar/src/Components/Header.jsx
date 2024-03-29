import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand
            href="/"
            className="logo"
            style={{
              fontSize: "25px",
              background: "-webkit-linear-gradient(left, #0092ff, #ffffff)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            <b>EatWise</b>
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link href="/meal">
              <Button className="m-2" variant="primary">
                Meal Planner
              </Button>
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
