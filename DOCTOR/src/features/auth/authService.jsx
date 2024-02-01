import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
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
  const res = await axios.put(`${baseUrl}user/editdoctor/${data._id}`, userData, {
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `${data.token}`
    },
  });

  console.log(res);
  if (res.data) {
    sessionStorage.setItem("DOCTOR", JSON.stringify(res.data?.udata));
  }
  return res.data;
};

const logout = () => {
  return sessionStorage.removeItem("DOCTOR");
}

const profuleUpdateData = async (userData) => {

  var data = JSON.parse(sessionStorage.getItem("DOCTOR"));
  const res = await axios.put(`${baseUrl}doctor/updatedoctor/${data.DRdata._id}` , userData, {
    headers: {
      'Content-Type': 'application/json',
      "authorization": `${data.token}`
    },
  });
  console.log(res);


  if (res.data) {
    sessionStorage.setItem("DOCTOR", JSON.stringify(res.data?.data));
  }
  return res.data;
};


const authService = {
  login,
  editData,
  loginOTP,
  profuleUpdateData,
  logout,
};

export default authService;
