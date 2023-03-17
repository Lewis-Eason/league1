import {BrowserRouter, Routes, Route} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import Login from "./pages/Login";
import Home from "./pages/Home";
import CreateAccount from "./pages/CreateAccount";

function App() {

    return (
        <BrowserRouter>
            <ToastContainer />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/account" element={<CreateAccount />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;