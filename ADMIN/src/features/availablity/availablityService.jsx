import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
import { config } from "../../utils/axiosConfig";
const getAvail = async () => {
  const res = await axios.get(`${baseUrl}available/alltime`, config);
  return res.data;
};
const getAavail = async (id) => {
  const res = await axios.get(`${baseUrl}available/doctortime/${id}`, config);
  return res.data;
};
const addAvail = async (DATA) => {
  const res = await axios.post(`${baseUrl}available/time`, DATA, config);
  return res.data;
};
const editAvail = async (DATA) => {

console.log(DATA);

  const res = await axios.put(
    `${baseUrl}available/updatetime/${DATA.id}`,
    DATA.formData,
    config
  );
  return res.data;
};
const delAvail = async (DATA) => {
  console.log(DATA);
  const res = await axios.delete(
    `${baseUrl}available/deletetime/${DATA}`,

    config
  );
  return res.data;
};



const availablityService = {
  getAvail,
  addAvail,
  editAvail,
  delAvail,
  getAavail,
};

export default availablityService;
