import React, {useEffect, useState} from 'react';

function App() {

    const [backendData, setBackendData] = useState([{}])

    useEffect(() => {
        fetch("/api").then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data)
            }
        )
    }, [])

    return (
        <div>
            {
                backendData.users.map((user, i) => (
                    <p key={i}>{user}</p>
                ))
            }
        </div>
    );
}

export default App;