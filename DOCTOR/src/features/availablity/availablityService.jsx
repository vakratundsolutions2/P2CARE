import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
import { config } from "../../utils/axiosConfig";


const getavailablity = async (DATA) => {

  const res = await axios.get(
    `${baseUrl}available/searchdoctortime/${DATA?.ID}?date=${DATA?.DATE}`
  );


  return res.data;
};
const allTime = async () => {

  const res = await axios.get(`${baseUrl}time/alltime`);


  return res.data;
};

const addAvail = async (DATA) => {
  console.log(DATA);
  // const res = await axios.post(`${baseUrl}available/time`, DATA, config);
  // return res.data;
};

const getAavail = async (id) => {
  const res = await axios.get(`${baseUrl}available/doctortime/${id}`, config);
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


const availableService = {
  getavailablity,
  allTime,
  addAvail,
  editAvail,
  getAavail,
};
export default availableService;
