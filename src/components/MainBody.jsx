import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

const MainBody = () => {
    return (

        <div className='mainimage'>
            <Container className='text-start'>
                <Row>
                    <Col></Col>
                    <Col className='mainpara'>
                        <h1>Raining Offers For <br /> Hot Summer!</h1>
                        <p>25% Off On All Products</p>
                        <Button className='me-2'>SHOP NOW</Button>
                        <button className='btn btn-outline-primary'>FIND MORE</button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MainBody