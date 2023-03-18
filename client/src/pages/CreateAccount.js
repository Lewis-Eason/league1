import {Form, Button, Row, Col, Container} from "react-bootstrap";
import '../App.css';
import Axios from "axios";
import {useNavigate} from "react-router-dom";
import { useState } from "react";

function CreateAccount() {

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const createAccount = async (e) => {
        e.preventDefault();
        if(password !== confirmPassword) {
            setErrorMsg("Passwords do not match");
            return;
        }
        Axios.post("/register", {
            username: username,
            password: password,
        }).then(() => {
            localStorage.setItem("user", username);
            navigate('/home');
        })
    }

    return (
        <>
            <Container>
                <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">Create Account</h1>
                <Row className="mt-5">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                        <Form onSubmit={createAccount}>
                            <p className="error">{errorMsg}</p>
                            <Form.Group controlId="formBasicUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Username" id="username" name="username" onChange={(event) => {
                                    setUsername(event.target.value);
                                }}/>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword" className="text-section-break">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" id="password" name="password" onChange={(event) => {
                                    setPassword(event.target.value);
                                }}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicConfirmPassword" className="text-section-break">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" placeholder="Confirm Password" id="confirmPassword" name="confirmPassword" onChange={(event) => {
                                    setConfirmPassword(event.target.value);
                                }}/>
                            </Form.Group>
                            <Button variant="success btn-block" type="submit" className="text-section-break">Register</Button>
                            <p className="text-section-break">Already a member? <a href="/login">Click here</a> to sign in.</p>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default CreateAccount;