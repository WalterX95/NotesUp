import {Container, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router";
import CreateNote from "./CreateNote";
import { Link } from "react-router-dom";

const MenuComponent = ({title}) => {
     return (
        <Navbar collapseOnSelect expand="md" className="bg-body-dark text-white" bg="dark">
        <Container>
          <Navbar.Brand className="text-white" href="#home">{title}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
            <BrowserRouter>
                  <Nav className="bg-dark p-3">
                    <Nav.Link as={Link} to="about" className="text-white">
                      Features
                    </Nav.Link>
                  </Nav>

                  <Routes>
                    <Route index element={<></>} />
                    <Route path="about" element={<CreateNote />} />
                  </Routes>
    </BrowserRouter>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     );
}

export default MenuComponent;