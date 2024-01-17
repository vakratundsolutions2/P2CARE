import axios from "axios";
import { config } from "../../utils/axiosConfig";
import { baseUrl } from "../../utils/baseUrl";


const allHospital = async () => {
  const res = await axios.get(
    `${baseUrl}hospital/allhospital`,
    
    config
  );

  return res.data;
};
const getAHospital = async (id) => {
  const res = await axios.get(
    `${baseUrl}hospital/searchhospitalbyid/${id}`,

    config
  );

  return res.data;
};


const hospitalService = {

  allHospital,

  getAHospital,
};
export default hospitalService;