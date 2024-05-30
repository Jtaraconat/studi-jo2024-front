import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import ShoppingCartPage from "./Pages/ShoppingCartPage";
import AdminPage from "./Pages/AdminPage";
import TicketsPage from "./Pages/TicketsPage";
import AuthConnPage from "./Pages/AuthConnPage";
import PaymentPage from "./Pages/PaymentPage";
import PaymentSuccessfullPage from "./Pages/PaymentSuccessfullPage";
import Footer from "./Components/Footer";
import ProtectedRoute from "./Utils/ProtectedRoute";
import ProtectedAdminRoute from "./Utils/ProtectedAdminRoute";
import ModifyTicket from "./Components/HandleTickets/ModifyTicket";
import AddTicket from "./Components/HandleTickets/AddTicket";

function App() {
  return (
    <div className="App font-rem">
      <Router>
        <Navbar />

        <Routes>
          <Route element={<ProtectedRoute redirectTo="/login" />}>
            <Route exact path="/shopping-cart" element={<ShoppingCartPage />} />
            <Route exact path="/payment" element={<PaymentPage />} />
            <Route
              exact
              path="/payment-success"
              element={<PaymentSuccessfullPage />}
            />
          </Route>

          <Route element={<ProtectedAdminRoute />}>
            <Route exact path="/admin" element={<AdminPage />} />
            <Route path="/admin/modify-ticket/:id" element={<ModifyTicket />} />
            <Route exact path="/admin/add-ticket" element={<AddTicket />} />
          </Route>

          <Route exact path="/tickets" element={<TicketsPage />} />
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/login" element={<AuthConnPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
