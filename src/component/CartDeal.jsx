import getallcartdeal from "./getallcartdeal"
import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import getallcartcoupon from "./getallcartcoupon";
import changequantityaxios from "./changequantityaxios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import getpaymentlinkaxios from "./getpaymentlinkaxios";

const imageUrlFood = "/assets/6.jpg";
const imageUrlClothing = "/assets/7.jpg";
const imageUrlElectronics = "/assets/8.jpg";
const imageUrlRestaurant = "/assets/9.jpg";

const imageUrlTomsung = "/assets/11.jpg";
const imageUrlCotorolla = "/assets/12.jpg";
const imageUrlPant = "/assets/13.jpg";
const imageUrlTshirt = "/assets/7.jpg";

function CartDeal() {
    const [allcartdeal, setcartdeal] = useState([])
    const [allcartcoupon, setcartcoupon] = useState([])
    let totalprice = 0.0;
    useEffect(() => {
        getallcartdeal.getallcartdeal().then((value) => {
            setcartdeal(value)
            console.log(value)
        });
        getallcartcoupon.getallcartcoupon().then((value) => {
            setcartcoupon(value)
            console.log(value)
        });
        console.log(allcartdeal)
        console.log(allcartcoupon)
    }, [])
    const cardItemdeal = (item) => {
        let imageUrl;
  
  if (item.companyName === "tomsung") {
    imageUrl = imageUrlTomsung;
  } else if (item.companyName === "Cotorolla") {
    imageUrl = imageUrlCotorolla;
  } else if (item.companyName === "Designer Wear") {
    imageUrl = imageUrlPant;
  } else {
    imageUrl = imageUrlTshirt;
  }
        totalprice = totalprice + (item.price * item.quantity)
        const changequantity = (event) => {
            event.preventDefault()
            let qty = document.getElementById("formBasicQuantitydeals").value;
            let url = "http://localhost:8084/cart/cartdeal/changeQuantity/" + item.dealId + "/" + qty
            changequantityaxios.changequantityaxios(url).then((value) => {
                window.open("http://localhost:3000/cartdeal?", "_self")
            })
        }
        return (
            <Card className="my-5 py-4" style={{ width: '18rem' }}>
                <Card.Img className="card-img-top" variant="top" src={imageUrl} />
                <Card.Body className="text-center my-5">
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>₹{item.price}</Card.Text>
                    <Card.Text>{item.companyName}</Card.Text>
                    <Card.Text>Quantity : {item.quantity}</Card.Text>
                    <Form onSubmit={changequantity}>
                        <Form.Group className="mb-3" controlId="formBasicQuantitydeals">
                            <Form.Control type="number" placeholder="Enter quantity" required />
                        </Form.Group>
                        <Button
                            variant="outline-primary w-100 mt-5 fa fa-share"
                            type="submit"

                        >
                            {' '}+
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        )
    }

    const cardItemcoupon = (item) => {
        let imageUrl;
  
  if (item.companyName === "Sakura Pizza Bandi") {
    imageUrl = imageUrlFood;
  } else if (item.companyName === "Arya Stark RoyalWear") {
    imageUrl = imageUrlClothing;
  } else if (item.companyName === "Sasuke Gadgets") {
    imageUrl = imageUrlElectronics;
  } else {
    imageUrl = imageUrlRestaurant;
  }
        totalprice = totalprice + (item.price * item.quantity)
        const changequantity = (event) => {
            event.preventDefault()
            let qty = document.getElementById("formBasicQuantitycoupons").value;
            let url = "http://localhost:8084/cart/cartcoupon/changeQuantity/" + item.couponId + "/" + qty
            changequantityaxios.changequantityaxios(url).then((value) => {
                window.open("http://localhost:3000/cartdeal?", "_self")
            })
        }
        return (
            
            <Card className="my-5 py-4" style={{ width: "30rem" }}>
                <Card.Img src={imageUrl} />


                <Card.Body className="text-center my-5">
                    <Card.ImgOverlay>
                        <Card.Title>{item.offer}</Card.Title>
                        <Card.Text>Category : {item.category}</Card.Text>
                        <Card.Text> Company Name : {item.companyName}</Card.Text>
                        <Card.Text> Price : ₹{item.price}</Card.Text>
                        <Card.Text> Expiry Date : {item.expiryDate}</Card.Text>
                        <Card.Text>Quantity : {item.quantity}</Card.Text>
                    
                        
            
                    <Form onSubmit={changequantity}>
                        <Form.Group className="mb-3" controlId="formBasicQuantitycoupons">
                            <Form.Control type="number" placeholder="Enter quantity" required />
                        </Form.Group>
                        <Button
                            variant="outline-primary w-100 mt-5 fa fa-share"
                            type="submit"

                        >
                            {' '}+
                        </Button>
                    </Form>
                    </Card.ImgOverlay>
                </Card.Body>

            </Card>

                    

                    
                    
        )
    }

    const checkout = () => {
        getpaymentlinkaxios.getpaymentlinkaxios(totalprice).then((value) => {
            window.open(value)
        })
    }

    return (
        <Container id="deals_all">
            <Row className="justify-content-around">
                {/* using React.childer to Arrya to set key automatically for the items of list */}
                {React.Children.toArray(allcartdeal.map(cardItemdeal))}
                {React.Children.toArray(allcartcoupon.map(cardItemcoupon))}
                {totalprice > 0 &&
                    <>
                        <h5>Total Price : {totalprice}</h5>
                        <Button
                            variant="outline-primary w-100 mt-5 fa fa-share"
                            type="submit"
                            onClick={checkout}
                        >
                            {' '}Proceed to checkout
                        </Button>
                    </>
                }
            </Row>

        </Container>



    )
}
export default CartDeal;