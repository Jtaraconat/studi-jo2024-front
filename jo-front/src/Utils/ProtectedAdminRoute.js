import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useGlobalContext } from "./GlobalContext";
import axios from "axios";
import Cookies from "js-cookie";

export default function ProtectedAdminRoute({ redirectTo = "/" }) {
  const { userRole, updateUserRole } = useGlobalContext();
  const userId = Cookies.get("user-id");
  const navigate = useNavigate();

  async function getUser() {
    const res = await axios.get(
      `https://studi24-backend-540631c3ca2e.herokuapp.com/api/user/${userId}`
    );
    updateUserRole(res.data.role);
  }

  getUser();

  if (userRole === "ADMIN") {
    return <Outlet />;
  } else {
    navigate(redirectTo);
  }
}
