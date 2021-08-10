import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';


const Navigation = () => {

    return (
        <div>
            <Navbar dark color="dark">
                <div class="container">
                    <NavbarBrand href="/">reactstrap</NavbarBrand>
                </div>
            </Navbar>
        </div>
    );

}
export default Navigation;