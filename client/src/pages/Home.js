import React, {useEffect, useState} from 'react';
import Axios from "axios";
import {Table} from "react-bootstrap";
import '../App.css';
import NavBar from "../components/NavBar";

function Home() {

    const [backendData, setBackendData] = useState([{}])

    useEffect(() => {
        Axios.get("/leagueOneData").then(
            response => {
                setBackendData(response.data)
            })
    }, [])

    if (backendData === undefined) return "Loading table. Please wait..."

    return (
        <>
            <NavBar />
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
                            <tr key={key}>
                                <td>{key + 1}</td>
                                <td key={`team_${key}`}>{value.team}</td>
                                <td key={`matches_${key}`}>{value.matches_played}</td>
                                <td key={`wins_${key}`}>{value.wins}</td>
                                <td key={`draws_${key}`}>{value.draws}</td>
                                <td key={`losses_${key}`}>{value.losses}</td>
                                <td key={`for_${key}`}>{value.for}</td>
                                <td key={`against_${key}`}>{value.against}</td>
                                <td key={`points_${key}`}>{value.points}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </Table>
            </div>
        </>
    );
}

export default Home;