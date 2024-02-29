import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
import { config } from "../../utils/axiosConfig";
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

const out = () => {
  localStorage.removeItem("USER");
};

const login3 = async (DATA) => {
  const res = await axios.post(`${baseUrl}user/check-verification`, DATA);
  if (res.data) {
    localStorage.setItem("USER", JSON.stringify(res.data?.unverifiedUser));
  }
  return res.data;
};
const getAuser = async (DATA) => {
  const res = await axios.get(`${baseUrl}user/getuser/${DATA}`, config);

  return res.data;
};
const updateUser = async (DATA) => {
  const res = await axios.put(
    `${baseUrl}user/update/${DATA?.id}`,
    DATA?.FDATA,
    config
  );

  await localStorage.setItem("USER", JSON.stringify(res.data?.udata));
  return res.data;
};
const getAppoinmentsUser = async (DATA) => {
  const res = await axios.get(
    `${baseUrl}book/appointmentsbyuser/${DATA}`,

    config
  );

  return res.data;
};
const forgotPassword = async (DATA) => {
  const res = await axios.post(
    `${baseUrl}user/forgot-password-token`,
DATA,
  );

  return res.data;
};
const resetPassword = async (DATA) => {
  const res = await axios.put(
    `${baseUrl}user/reset-password/${DATA.token}`,
    DATA,

  );

  return res.data;
};

const authService = {
  login,
  reg,
  out,
  login3,
  getAuser,
  updateUser,
  getAppoinmentsUser,
  forgotPassword,
  resetPassword
};

export default authService;
