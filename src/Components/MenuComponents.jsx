import {Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import  menuData  from "../data/menuData.json";
import { FaAndroid } from "react-icons/fa";

const MenuComponent = ({title}) => {
     return (
        <Navbar collapseOnSelect expand="md" className="bg-body-tertiary" bg="dark">
        <Container>
          <Navbar.Brand href="#home">{title}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                <FaAndroid/>
                {menuData.map((link) => {
                    return(
                        <NavDropdown.Item key={link.id} href={link.link}>{link.label}</NavDropdown.Item>
                    )
                })}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     );
}

export default MenuComponent;