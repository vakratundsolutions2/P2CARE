import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
import { config } from "../../utils/axiosConfig";
const login = async (userData) => {
  const res = await axios.post(`${baseUrl}user/loginadmin`, userData);

  if (res.data) {
    localStorage.setItem("ADMIN", JSON.stringify(res.data?.data));
  }
  return res.data
};
const reg = async (userData) => {
  const res = await axios.post(`${baseUrl}user/addadmin`, userData);
  return res.data;
};
const allusers = async () => {
  const res = await axios.get(`${baseUrl}user/all`, config);
  return res.data;
};
const getusers = async (id) => {
  const res = await axios.get(`${baseUrl}user/getuser/${id}`, config);
  return res.data;
};
const deleteusers = async (id) => {
  const res = await axios.delete(`${baseUrl}user/delete/${id}`, config);
  return res.data;
};
const edituser = async (DATA) => {
  const res = await axios.put(
    `${baseUrl}user/update/${DATA.id}`,
    DATA.formData,
    config
  );
  return res.data;
};
const searchuser = async (DATA) => {
  const res = await axios.get(
    `${baseUrl}user/searchuserbyname/${DATA}`,
    config
  );
  return res.data;
};

const authService = {
  login,
  reg,
  deleteusers,
  allusers,
  getusers,
  edituser,
  searchuser,
};

export default authService;
