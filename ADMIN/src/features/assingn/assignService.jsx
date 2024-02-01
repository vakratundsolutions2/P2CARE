import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
import { config } from "../../utils/axiosConfig";
const getAssign = async () => {
  const res = await axios.get(`${baseUrl}asign/allasign`, config);
  return res.data;
};
const getsingleAssign = async (id) => {
  const res = await axios.get(`${baseUrl}asign/getasign/${id}`, config);
  return res.data;
};
const addAssign = async (DATA) => {
  const res = await axios.post(`${baseUrl}asign/add`, DATA, config);
  return res.data;
};
const editAsign = async (DATA) => {
  const res = await axios.put(`${baseUrl}asign/editasign/${DATA.id}`, DATA.formData, config);
  return res.data;
};
const delAsign = async (DATA) => {
  console.log(DATA);
  const res = await axios.delete(
    `${baseUrl}asign/deleteasign/${DATA}`,

    config
  );
  return res.data;
};



const assignService = {
  getAssign,
  addAssign,
  editAsign,
  delAsign,
  getsingleAssign,
};

export default assignService;