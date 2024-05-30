import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const GlobalContext = createContext();

export function useGlobalContext() {
  return useContext(GlobalContext);
}

export function GlobalProvider({ children }) {
  const [userRole, setUserRole] = useState("");
  const userId = Cookies.get("user-id");
  const updateUserRole = (role) => {
    setUserRole(role);
  };

  async function getUser() {
    if (userId !== undefined) {
      const res = await axios.get(
        `https://studi24-backend-540631c3ca2e.herokuapp.com/api/user/${userId}`
      );
      updateUserRole(res.data.role);
    }
  }
  getUser();

  return (
    <GlobalContext.Provider value={{ userRole, updateUserRole }}>
      {children}
    </GlobalContext.Provider>
  );
}
