import axios from "axios";
import { config } from "../../utils/axiosConfig";
import { baseUrl } from "../../utils/baseUrl";

const addHospital = async (hospital) => {
  const res = await axios.post(
    `${baseUrl}hospital/addhospital`,
    hospital,
    config
  );

  return res.data;
};
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
const deleteHospital = async (id) => {
  const res = await axios.delete(
    `${baseUrl}hospital/deletehospital/${id}`,

    config
  );

  return res.data;
};
const uppdateHospital = async (DATA) => {
  const res = await axios.put(
    `${baseUrl}hospital/edithospital/${DATA.id}`,
    DATA.formData,
    config
  );

  return res.data;
};


const hospitalService = {
  addHospital,
  allHospital,
  uppdateHospital,
  deleteHospital,
  getAHospital,
};
export default hospitalService;