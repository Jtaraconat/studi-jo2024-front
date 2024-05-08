import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import User from "./Pages/User";
import Admin from "./Pages/Admin";
import Tickets from "./Pages/Tickets";
import AuthConn from "./Pages/AuthConn";
import Footer from "./Components/Footer";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route exact path="/user" element={<User />} />
            <Route exact path="/admin" element={<Admin />} />
            <Route exact path="/tickets" element={<Tickets />} />
          </Route>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<AuthConn />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
