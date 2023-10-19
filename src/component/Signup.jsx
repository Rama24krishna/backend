import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";

function Signup() {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>


            {/* Modal */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Signup</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <Button variant="primary w-100 mb-4">
            <span className="fa fa-google me-2"> Sign in with Google</span>
          </Button>
          <Button variant="primary w-100 mb-4">
            <span className="fa fa-facebook-official me-2">
              {" "}
              Sign in with Facebook
            </span>
          </Button> */}
                    <Form onSubmit={authenticate}>
                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter Email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Password" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPhone">
                            <Form.Label>Phone No.</Form.Label>
                            <Form.Control type="phone" placeholder="Enter Phone No." required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>


                        <Button
                            variant="outline-primary w-100 mt-5 fa fa-share"
                            type="submit"

                        >
                            {' '}Submit
                        </Button>
                        
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

async function authenticate(event) {
    let token;
    let axiosResponse;
    event.preventDefault();
    if (
        sessionStorage.getItem("token") === "" ||
        sessionStorage.getItem("token") === null
    ) {
        let email = document.getElementById("formBasicEmail").value;
        let password = document.getElementById("formBasicPassword").value;
        let username = document.getElementById("formBasicUsername").value;
        let phone = document.getElementById("formBasicPhone").value;
        console.log(email);
        console.log(password);
        console.log(username);
        console.log(phone);

        let url = "http://localhost:8085/api/auth/signup";
        let body = { username: username, password: password, email: email, phone: phone };
        console.log(body);

        let error = "";
        try {
            axiosResponse = await axios.post(url, body).catch((err) => {
                if (err.response.status !== 200) {
                    console.log(err.response.status);
                    error = err.response.status;
                    throw new Error("CANNOT SIGN UP");
                }
                throw err;
            });
        } catch (err) {
            if (document.getElementById("formError").style.display == "none") {
                document.getElementById("formError").style.display = "block";
            }
        }
        if (error === "") {
            
            alert("SUCCESSFULLY SIGNED IN");
            
            window.open("http://localhost:3000/", "_self");
        }
    } else {
        alert("YOU ARE ALREADY SIGNED IN");
    }
}
export default Signup;