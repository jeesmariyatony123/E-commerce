import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-primary ">
                <Container>
                    <Navbar.Brand className='text-white syne-tactile-regular fs-2' href="#home">BrandStore</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='text-white' href="#home">EVERYTHING</Nav.Link>
                            <Nav.Link className='text-white' href="#link">WOMEN</Nav.Link>
                            <Nav.Link className='text-white' href="#link">MEN</Nav.Link>
                            <Nav.Link className='text-white' href="#link">ACCESSORIES</Nav.Link>

                        </Nav>
                        <Nav className="d-flex ">
                            <Nav.Link className='text-white px-2' href="#home">ABOUT</Nav.Link>
                            <Nav.Link className='text-white px-2' href="#link">CONTACT US</Nav.Link>
                            <Nav.Link className='text-white px-2' href="#link">$0.00</Nav.Link>
                            <Nav.Link className='text-white px-2' href="#link"> <i className="fa" style={{ fontSize: "24px" }}  >&#xf07a;</i><span className='badge badge-warning' id='lblCartCount'> 0 </span></Nav.Link>
                            <Nav.Link className='text-white px-2' href="#link"><i className="fa-solid fa-user"></i></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar