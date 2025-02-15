import {Container, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router";
import CreateNote from "./CreateNote";

const MenuComponent = ({title}) => {
     return (
        <Navbar collapseOnSelect expand="md" className="bg-body-dark text-white" bg="dark">
        <Container>
          <Navbar.Brand className="text-white" href="#home">{title}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
            <Nav.Link className="text-white" href="#features">Features</Nav.Link>
            <BrowserRouter>
            <Routes>
                    <Route index element={<CreateNote/>} />
                    <Route path="about" element={<></>} />
                    
                  </Routes>
            </BrowserRouter>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     );
}

export default MenuComponent;