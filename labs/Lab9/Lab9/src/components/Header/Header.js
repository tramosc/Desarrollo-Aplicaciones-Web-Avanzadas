
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Nav,Navbar, NavDropdown} from 'react-bootstrap';

import imgLogo from '../../assets/img/logo-tecsup.png';

const Header = props => {
    return(
        <Navbar bg="dark" expand="lg" variant="dark" id="header">
            <div className="container">
                <Link className="navbar-brand" to="/">
                <img src={imgLogo} alt="Tecsup Logo" />
                Tecsup App
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <NavLink to="/" exact className="nav-link">
                        Inicio
                        </NavLink>
                        <NavLink to="/login" className="nav-link">
                        Iniciar Sesion
                        </NavLink>
                        <NavDropdown title="Usuario" id="basic-nav-dropdown">
                            <NavLink to="/profile" className="dropdown-item">
                                Mi perfil
                            </NavLink>
                            <NavLink to="/chat" className="dropdown-item">
                                Chat
                            </NavLink>
                            <NavDropdown.Divider />
                        <NavLink to="/logout" className="nav-link">
                        Cerrar Sesion
                        </NavLink>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default Header;
