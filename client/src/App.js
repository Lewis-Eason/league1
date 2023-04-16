import {Routes, Route, Navigate} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import CreateAccount from "./pages/CreateAccount";
import Predictions from "./pages/Predictions";

function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to="/login" replace={true} />} />
                <Route path="/login" element={<Login />} />
                <Route path="/account" element={<CreateAccount />} />
                <Route path="/home" element={<Home />} />
                <Route path="/predictions" element={<Predictions />} />
            </Routes>
        </>
    );
}

export default App;