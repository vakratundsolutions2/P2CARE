import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
const login = async (userData) => {
  const res = await axios.post(`${baseUrl}user/login`, userData);

  if (res.data?.data?.user?.Role === 'ADMIN') {
    const resData = { ADMIN: res.data?.data };

    localStorage.setItem("ADMIN", JSON.stringify(resData));
  }
  return res.data
};

const authService = {
  login,
};

export default authService;
