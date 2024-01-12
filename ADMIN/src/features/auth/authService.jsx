import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
const login = async (userData) => {
  console.log(userData);
  const res = await axios.post(`${baseUrl}user/login`, userData);

  console.log(res.data.data.user.Role)
  ;
  if (res.data.data.user.Role === 'ADMIN') {
    const resData = { accessToken: res.data?.data };
    localStorage.setItem("user", JSON.stringify(resData));
  }
  return res.data
};

const authService = {
  login,
};

export default authService;
