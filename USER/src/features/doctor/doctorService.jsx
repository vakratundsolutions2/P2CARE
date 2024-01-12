import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
import { config } from "../../utils/axiosConfig";


const getDoctors = async () => {
  const res = await axios.get(`${baseUrl}doctor/alldoctor`, config);

  return res.data;
};
const updateDoctor = async (DrData) => {
  console.log(DrData);
  const response = await axios.put(
    `${baseUrl}doctor/updatedoctor/${DrData.id}`,
    DrData.formData,
    config
  );
  return response.data;
};

const AllAvailable = async () => {
  const response = await axios.get(`${baseUrl}available/alltime`, config);
  return response.data;
};




const doctorService = {
  getDoctors,
  updateDoctor,
  AllAvailable,
};

export default doctorService;
