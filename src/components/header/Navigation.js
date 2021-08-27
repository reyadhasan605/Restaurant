import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt, faHome, faBars, faAddressBook, } from '@fortawesome/free-solid-svg-icons'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';

import { Link } from 'react-router-dom'


const Navigation = () => {

    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <div className="container">

                    <Nav className="mr-auto" navbar >
                        <NavItem>
                            <Link to="/" className="nav-link">Home <FontAwesomeIcon icon={faHome} size="lg" color="green" /></Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/menu" className="nav-link">Menu <FontAwesomeIcon icon={faBars} size="lg" /></Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/contact" className="nav-link">Contact us <FontAwesomeIcon icon={faAddressBook} size="lg" /></Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/about" className="nav-link">About us <FontAwesomeIcon icon={faUserAlt} size="lg" /></Link>
                        </NavItem>
                    </Nav>
                </div>

            </Navbar>
        </div>
    );
}
export default Navigation;