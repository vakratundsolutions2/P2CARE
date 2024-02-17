import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
import { config } from "../../utils/axiosConfig";
const login = async (userData) => {
  const res = await axios.post(`${baseUrl}user/logindoctor`, userData);

  if (res.data) {
    sessionStorage.setItem("DOCTOR", JSON.stringify(res.data?.data));
  }
  return res.data;
};

const loginOTP = async (userData) => {
  const res = await axios.post(`${baseUrl}user/check-verification`, userData);

  if (res.data) {
    localStorage.setItem("DOCTOR", JSON.stringify(res.data?.unverifiedUser));
  }
  return res.data;
};




const editData = async (userData) => {
  var data = JSON.parse(sessionStorage.getItem("DOCTOR"));
  if (userData.Password === "") {
    delete userData.Password;
  }
  const res = await axios.put(`${baseUrl}user/editdoctor/${data._id}`, userData, config);

  
  if (res.data) {
    sessionStorage.setItem("DOCTOR", JSON.stringify(res.data?.udata));
  }
  return res.data;
};

const logout = () => {
  return sessionStorage.removeItem("DOCTOR");
}

const doctorupdate = async (userData) => {
  const res = await axios.put(
    `${baseUrl}doctor/updatedoctor/${userData?.id}`,
    userData?.formData,
    config
  );
  console.log(res.data);

  if (res.data) {
    sessionStorage.setItem("DOCTOR", JSON.stringify(res.data?.data));
  }
  return res.data;
};


const authService = {
  login,
  editData,
  loginOTP,
  doctorupdate,
  logout,
};

export default authService;
