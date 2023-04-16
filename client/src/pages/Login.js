import {Form, Button, Row, Col, Container} from "react-bootstrap";
import '../App.css';
import Axios from "axios";
import {useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";

function Login() {

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const login = async (e) => {
        e.preventDefault();
        Axios.post("/validateLogin", {
            username: username,
            password: password,
        }).then((response) => {
            if (response.data.length > 0) {
                localStorage.setItem("user", username);
                navigate('/home');
            } else {
                setErrorMsg("Invalid login");
            }
        })
    }

    useEffect(() => {
        localStorage.clear();
    }, [])

    return (
        <>
            <Container>
                <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">Login</h1>
                <Row className="mt-5">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                        <Form onSubmit={login}>
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

                            <Button variant="success btn-block" type="submit" className="text-section-break">Login</Button>
                            <p className="text-section-break"><a href="#">Forgot your password?</a></p>
                            <p className="text-section-break">Not a member? <a href="/account">Click here</a> to create an account.</p>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Login;