import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import { productList } from './productsList';


const Products = () => {

  const [items, setItems] = useState(productList)

  return (
    <div className='bg-white'>
      <h1 className='text-center text-dark ' style={{paddingTop:"10vh",}}>Featured Products</h1>
      <div className='products text-left '>
        {items.map((item) => (
          <div className=' d-inline-flex p-3 ' key={item.id}>
            <Card className='productindiv border-0 bg-white' style={{ width: '15rem' }}>
              <Card.Img className='productimg' variant="top" src={item.image} />
              <div className="panel">
                <a href="#" ><i className="icon fa-solid fa-heart "></i></a>
                <a href="#" ><i className="icon fa-solid fa-shopping-cart "></i></a>

              </div>
              
              <Card.Body className='text-start'>
                <Card.Title className='text-primary-emphasis'>{item.heading}</Card.Title>
                <Card.Text className='text-light '>{item.category} </Card.Text>
                <Card.Text className='text-secondary-emphasis '>{item.price} </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>


    </div>
  )
}

export default Products