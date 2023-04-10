import {Form, Button, Row, Col, Container} from "react-bootstrap";
import '../App.css';
import Axios from "axios";
import {useNavigate} from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function Predictions() {

    const fixturePredictionInputs = []
    const navigate = useNavigate();
    const [fixturePredictions, setFixturePredictions] = useState([]);
    const [fixtures, setFixtures] = useState([{}])

    const submitPredictions = async (e) => {
        setFixturePredictions(fixturePredictions)
        e.preventDefault()
    }

    useEffect(() => {
        Axios.get("/weeklyFixtures/1").then(
            response => {
                setFixtures(response.data['Fixtures'])
            })
    }, [])

    return (
        <>
            <Container>
                <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">Predictions</h1>
                <Row className="mt-5">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                        <Form>
                            <Form.Group controlId="formBasicUsername">
                                {
                                    fixtures.map((value, key) => (
                                        <>
                                            <p className={"child"} key={key}>{value.home_team} VS {value.away_team}</p>
                                            <input className={"child"} type="number" min={0} max={20} id={"home_team"} name="home_team"/>
                                            <p className={"child"}>-</p>
                                            <input className={"child"} type="number" min={0} max={20} id="away_team" name="away_team"/>
                                        </>
                                    ))
                                }
                            </Form.Group>
                            <Button variant="success btn-block" type="submit" className="text-section-break">Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
            )
}
