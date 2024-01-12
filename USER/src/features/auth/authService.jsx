import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
const login = async (userData) => {
  const res = await axios.post(`${baseUrl}user/login`, userData);
  
  if (res.data) {
    const resData = { accessToken: res.data?.data, role: "client" };
    localStorage.setItem("user", JSON.stringify(resData));
  }
  return res.data;
};
const reg = async (userData) => {
  const res = await axios.post(`${baseUrl}user/add`, userData);
  return res.data;
};

const authService = {
  login,
  reg,
};

export default authService;
