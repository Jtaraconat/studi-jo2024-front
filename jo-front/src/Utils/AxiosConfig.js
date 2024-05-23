import Cookies from "js-cookie";

const token = Cookies.get("user-token");
const config = {
  headers: { Authorization: `Bearer ${token}` },
};

export default config;
