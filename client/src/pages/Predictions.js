import {Form, Button, Row, Col, Container} from "react-bootstrap";
import '../App.css';
import Axios from "axios";
import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";

export default function Predictions() {

    const [fixtures, setFixtures] = useState([{}])
    const [confirmationMsg, setConfirmationMsg] = useState("");
    const username = localStorage.getItem("user");

    const submitPredictions = async (e) => {
        e.preventDefault();
        for (let i = 1; i <= fixtures.length; i++) {
            const inputElements = document.getElementById(`fixture${i}`)
                .getElementsByTagName("input")
            let prediction = {
                "home_team": inputElements[0].id,
                "away_team": inputElements[1].id,
                "result": `${inputElements[0].value}-${inputElements[1].value}`
            }
            fixturePredictions.push(prediction);
        }
        Axios.put(`/predictions/${username}/${id}`, {
            predictions: fixturePredictions
        }).then(() =>
            {
                fixturePredictions.length = 0;
                setConfirmationMsg("Predictions successfully updated.");
            })
    }

    const fixturePredictions = []

    // Create function to determine which round of fixtures to show
    const id = 1;

    useEffect(() => {
        Axios.get(`/weeklyFixtures/${id}`).then(
            response => {
                setFixtures(response.data['Fixtures'])
            })
    }, [])

    if (fixtures === undefined) return "Loading fixtures. Please wait..."

    return (
        <>
            <NavBar />
            <Container>
                <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">Predictions</h1>
                <Row className="mt-5">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                        <Form onSubmit={submitPredictions}>
                            <p className="success">{confirmationMsg}</p>
                            <Form.Group controlId="formFixtures" className={"child"}>
                                <h2 className={"title"}>Weekday {id}</h2>
                                {
                                    fixtures.map((value, key) => (
                                        <div id={`fixture${key + 1}`}>
                                            <p className={"child"} key={key}>{value.home_team} VS {value.away_team}</p>
                                            <input className={"child"} type="number" min={0} max={100} id={`${value.home_team}`} required/>
                                            <p className={"child"}>-</p>
                                            <input className={"child"} type="number" min={0} max={100} id={`${value.away_team}`} required/>
                                        </div>
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
