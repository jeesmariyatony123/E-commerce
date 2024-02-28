import React from 'react'
import Button from 'react-bootstrap/Button'

const Card = () => {

    const cardList = [
        {image:"https://img.gepur.com/products/45000/42240/webp/origins/42240_1_1.webp?1683532586", heading: "20% Off On Tank Tops", para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.", buttonof: "SHOP NOW" },
        {image:"https://img.ltwebstatic.com/images3_pi/2022/06/30/16565580415cca9bdea4f4fb26d6585c39f820374c_thumbnail_720x.webp", heading: "Latest Eyewear For You", para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.", buttonof: "SHOP NOW" },
        {image:"https://img.freepik.com/premium-photo/pink-female-sneakers-sport-shoes-womens-hand-blue-background_91908-7611.jpg", heading: "Let's Lorem Suit Up!", para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.", buttonof: "CHECK OUT" }
    ]
    return (
        <div className='card '>
            {cardList.map((item) => (
                <div className='card_container'>
                    <img className='card_image' src={item.image} />
                    <div className="card_overlay">
                        <h1>{item.heading}</h1>
                        <p>{item.para}</p>
                        <Button className='btn btn-light'>{item.buttonof}</Button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card