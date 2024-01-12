import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
import { config } from "../../utils/axiosConfig";
const getAllService = async () => {
  const res = await axios.get(`${baseUrl}service/allservice`, config);
  return res.data;
};

const createService = async (Data) => {
    console.log(Data);
  const response = await axios.post(
    `${baseUrl}service/addservice`,
    Data,
    config
  );

  return response.data;
};
const deleteService = async (Data) => {
    // console.log(Data);
  const response = await axios.delete(
    `${baseUrl}service/deleteservice/${Data}`,
    
    config
  );

  return response.data;
};
const updateService = async (Data) => {
    // console.log(Data);
  const response = await axios.put(
    `${baseUrl}service/editservice/${Data?.id}`,
    Data.formData,
    config
  );

  return response.data;
};
const Service = {
  createService,
  getAllService,
  deleteService,
  updateService,
};

export default Service;