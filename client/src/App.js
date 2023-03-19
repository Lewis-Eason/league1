import {Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import CreateAccount from "./pages/CreateAccount";
import NavBar from "./components/NavBar";

function App() {

    return (
        <>
        <NavBar />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/account" element={<CreateAccount />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </>
    );
}

export default App;