import React, {useEffect, useState} from 'react';
import Axios from "axios";
import {Container, Nav, Navbar, Table} from "react-bootstrap";
import '../App.css';

function Home() {

    const [backendData, setBackendData] = useState([{}])
    const username = localStorage.getItem("user");
    // const [user, setUser] = useState({})

    // const getBackendData = () => {
    //     Axios.get("/api")
    //         .then(response => {
    //             setBackendData(response.data)
    //         })
    // }

    useEffect(() => {
        Axios.get("/api").then(
            response => {
                setBackendData(response.data)
            })
    }, [])

    // useEffect(() => {
    //     Axios.get("/user").then(
    //         response => {
    //             setUser(response.data)
    //         })
    // }, [])

            return (
                <div className="App">
                <>
                    <Navbar bg="primary" variant="dark">
                        <Container>
                            <Navbar.Brand href="/home">Welcome, {username}</Navbar.Brand>
                            <Nav className="me-auto">
                                <Nav.Link href="/home">Home</Nav.Link>
                                <Nav.Link href="#features">Predictions</Nav.Link>
                                <Nav.Link href="#pricing">Pricing</Nav.Link>
                                <Nav.Link href="/login">Log Out</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
                <div className="title">
                    League 1 table
                </div>
                    <div className="custom-container text-section-break">
                        <Table className="table table-bordered text-center table-responsive">
                            <thead>
                            <tr>
                                <th className="text-center">Position</th>
                                <th className="text-center">Club</th>
                                <th className="text-center">MP</th>
                                <th className="text-center">Wins</th>
                                <th className="text-center">Draws</th>
                                <th className="text-center">Losses</th>
                                <th className="text-center">GF</th>
                                <th className="text-center">GA</th>
                                <th className="text-center">Points</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                backendData.map((value, key) => (
                                    <tr>
                                        <td>{value.id}</td>
                                        <td>{value.team}</td>
                                        <td>{value.matches_played}</td>
                                        <td>{value.wins}</td>
                                        <td>{value.draws}</td>
                                        <td>{value.losses}</td>
                                        <td>{value.for}</td>
                                        <td>{value.against}</td>
                                        <td>{value.points}</td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </Table>
                    </div>
                </>
                </div>
            );
}

export default Home;