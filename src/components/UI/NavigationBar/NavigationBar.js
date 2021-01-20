import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const NavigationBar = (props) => {
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand eventKey='home' as={NavLink} to="/" style={{fontFamily: 'Game of Thrones'}}>GOTPEDIA</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" style={{fontFamily: 'Merriweather'}}>
                    <Nav className="mr-auto">
                        <Nav.Link eventKey='seasons' as={NavLink} to="/seasons">Seasons</Nav.Link>
                        <Nav.Link eventKey='episodes' as={NavLink} to="/episodes">Episodes</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link eventKey='houses' as={NavLink} to="/houses">Houses</Nav.Link>
                        <Nav.Link eventKey='characters' as={NavLink} to="/characters">Characters</Nav.Link>
                        {/* <Nav.Link eventKey='locations' as={NavLink} to="/locations">Locations</Nav.Link> */}
                        {/* <Nav.Link eventKey='quotes' as={NavLink} to="/quotes">Quotes</Nav.Link> */}
                        <Nav.Link eventKey='about' as={NavLink} to="/about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar