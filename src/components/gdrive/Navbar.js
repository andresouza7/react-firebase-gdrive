import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavbarComponent() {
    return (
        <Navbar className="bg-light justify-content-between">
            <Navbar.Brand as={Link} to="/">
                Gdrive
            </Navbar.Brand>
            <Nav>
                <Nav.Link as={Link} to="/user">
                    Profile
                </Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default NavbarComponent
