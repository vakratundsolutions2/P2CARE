import axios from "axios";
 import {baseUrl} from '../../utils/baseUrl'
import { config } from "../../utils/axiosConfig";
const getPatient = async () => {
  const res = await axios.get(`${baseUrl}patient/allpatient`, config);
  return res.data;
};
const getAPatient = async (id) => {
  const res = await axios.get(
    `${baseUrl}patient/searchpatientbyid/${id}`,
    config
  );
  return res.data;
};

const createPatient = async (patientData) => {
 const response = await axios.post(
   `${baseUrl}patient/addpatient`,
   patientData,
   config
 );

 return response.data;
}
const deletePatient = async (id) => {
  const response = await axios.delete(
    `${baseUrl}patient/deletepatient/${id}`,
    config
  );

  return response.data;
};
const updatePatient = async (patientData) => {

  const response = await axios.put(

    `${baseUrl}patient/editpatient/${patientData.id}`,
    patientData.values,
    config
  );

  return response.data;
};

const patientService = {
  getPatient,
  deletePatient,
  createPatient,
  updatePatient,
  getAPatient,
};

export default patientService;
