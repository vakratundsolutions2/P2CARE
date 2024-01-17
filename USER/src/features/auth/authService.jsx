import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
const login = async (userData) => {
  const res = await axios.post(`${baseUrl}user/login`, userData);
  
  
  if (res.data) {
    localStorage.setItem("USER", JSON.stringify(res.data?.data));
  }
  return res.data;
};
const reg = async (userData) => {
  const res = await axios.post(`${baseUrl}user/add`, userData);
  return res.data;
};

const out =  () => {
       localStorage.removeItem("USER");
 
};


const authService = {
  login,
  reg,
  out
};

export default authService;
