import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
import { config } from "../../utils/axiosConfig";
const getAssign = async () => {
  const res = await axios.get(`${baseUrl}asign/allasign`, config);
  return res.data;
};
const addAssign = async (DATA) => {
  const res = await axios.post(`${baseUrl}asign/add`, DATA, config);
  return res.data;
};


const assignService = {
  getAssign,
  addAssign,
};

export default assignService;