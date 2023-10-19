
import React, { useState, useEffect } from "react";
import getalldeals from "./getalldeals";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import AddToCartDealsAxios from "./AddToCartDealsAxios";

const imageUrlFood = "/assets/11.jpg";
const imageUrlClothing = "/assets/12.jpg";
const imageUrlElectronics = "/assets/13.jpg";
const imageUrlRestaurant = "/assets/7.jpg";

function Deals()
{
    const [alldeals,setalldeals]= useState([])
    useEffect(()=>{
    getalldeals.getalldeals().then((value)=>{
        setalldeals(value)
        console.log(value)
    });
    console.log(alldeals)
    },[])

    
const cardItem = (item) => {
  let imageUrl;
  
  if (item.companyName === "tomsung") {
    imageUrl = imageUrlFood;
  } else if (item.companyName === "Cotorolla") {
    imageUrl = imageUrlClothing;
  } else if (item.companyName === "Designer Wear") {
    imageUrl = imageUrlElectronics;
  } else {
    imageUrl = imageUrlRestaurant;
  }
  const addtocart = () => {
    console.log(item.name)
    let body = {name:item.name, price:item.price,companyName:item.companyName,}
AddToCartDealsAxios.AddToCartDealsAxios(body).then(()=>{
  alert("item added to cart")

})
  }
    return (
<Card className="my-5 py-4" style={{ width: '18rem' }}>
<Card.Img className="card-img-top" variant="top" src={imageUrl} />
        <Card.Body className="text-center my-5">
         
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>₹{item.price}</Card.Text>
          <Card.Text>{item.companyName}</Card.Text>
          <Button onClick={addtocart} variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>
    )
    }
    return (
    <Container id="deals_all">
              <Row className="justify-content-around">
                {/* using React.childer to Arrya to set key automatically for the items of list */}
                {React.Children.toArray(alldeals.map(cardItem))}
              </Row>
            </Container>

)}
 export default Deals;