import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const isAuthenticated = () => {
  const userToken = Cookies.get("user-token");
  return userToken;
};

const ProtectedRoute = ({ redirectTo = "/login" }) => {
  return isAuthenticated() ? <Outlet /> : <Navigate to={redirectTo} />;
};

export default ProtectedRoute;
