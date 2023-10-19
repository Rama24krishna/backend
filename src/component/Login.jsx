import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";


function Login() {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>


            {/* Modal */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
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

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" required />
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
                        <div id="formError" style={{ display: "none" }}>
                            <p style={{ color: "red", fontWeight: "bolder" }}>
                                Wrong Credentials! Please try again... !
                            </p>
                        </div>
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
        let username = document.getElementById("formBasicUsername").value;
        let password = document.getElementById("formBasicPassword").value;
        console.log(username);
        console.log(password);

        let url = "http://localhost:8085/api/auth/signin";
        let body = { username: username, password: password };
        console.log(body);

        let error = "";
        try {
            axiosResponse = await axios.post(url, body).catch((err) => {
                if (err.response.status !== 200) {
                    console.log(err.response.status);
                    error = err.response.status;
                    throw new Error("WRONG CREDENTIALS PLEASE TRY AGAIN");
                }
                throw err;
            });
        } catch (err) {
            if (document.getElementById("formError").style.display == "none") {
                document.getElementById("formError").style.display = "block";
            }
        }
        if (error === "") {
            token = axiosResponse.data;
            console.log(axiosResponse);
            console.log(token.jwtToken);
            alert("SUCCESSFULLY LOGGED IN");
            sessionStorage.setItem("token", token.jwtToken);
            window.open("http://localhost:3000/", "_self");
            //<Navbar.Text>username</Navbar.Text>
        }
    } else {
        alert("YOU ARE ALREADY LOGGED IN");
    }
}
export default Login;