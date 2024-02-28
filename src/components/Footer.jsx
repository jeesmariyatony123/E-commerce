import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';


const Footer = () => {
    return (
        <div  className="bg-primary">
            <Container className='py-5'>
                <Row>
                    <Col>
                        <h1 className='pb-2 syne-tactile-regular fs-1 pt-3'>BrandStore</h1>
                        <p>The best look anytime, anywhere.</p>
                    </Col>
                    <Col>
                        <h4 className='pb-2'>For Her</h4>
                        <h6>Women Jeans</h6>
                        <h6>Tops and Shirts</h6>
                        <h6>Women Jackets</h6>
                        <h6>Heels and Flats</h6>
                        <h6>Women Accessories</h6>
                    </Col>
                    <Col>
                        <h4 className='pb-2'>For Him</h4>
                        <h6>Men Jeans</h6>
                        <h6>Men Shirts</h6>
                        <h6>Men Shoes</h6>
                        <h6>Men Accessories</h6>
                        <h6>Men Jackets</h6></Col>
                    <Col>
                        <h4 className='pb-3'>Subscribe</h4>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3 opacity-75 "
                        >
                            <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                        <Button className='btn btn-outline-light text-white'>SUBSCRIBE</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer