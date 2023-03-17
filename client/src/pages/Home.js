import React, {useEffect, useState} from 'react';
import Axios from "axios";

function Home() {

    const [backendData, setBackendData] = useState([{}])

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

    return (
        <div>
            {backendData.map((value, key) => {
                return (
                    <p key={key}>{value.team} </p>
                );
            })}
        </div>
    );
}

export default Home;