import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
import { config } from "../../utils/axiosConfig";



const getDoctors = async () => {
  const res = await axios.get(`${baseUrl}doctor/alldoctor`, config);

  return res.data;
};
const getADoctor = async (id) => {
  const res = await axios.get(`${baseUrl}doctor/searchdoctorbyid/${id}`, config);

  return res.data;
};




const doctorService = {
  getDoctors,
  getADoctor,

};

export default doctorService;
