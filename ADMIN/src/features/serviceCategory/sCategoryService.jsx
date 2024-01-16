import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
import { config } from "../../utils/axiosConfig";

const getServiceCategory = async () => {
  const res = await axios.get(`${baseUrl}servicecategory/allcategory`, config);

  return res.data;
};

const getAServiceCategory = async (id) => {
  const res = await axios.get(
    `${baseUrl}servicecategory/searchcategorybyid/${id}`,
    config
  );

  return res.data;
};
const createServiceCategory = async (catdata) => {
  const res = await axios.post(
    `${baseUrl}servicecategory/addcategory`,
    catdata,
    config
  );

  return res.data;
};

const deleteCategory = async (id) => {
  const response = await axios.delete(
    `${baseUrl}servicecategory/deletecategory/${id}`,
    config
  );
  return response.data;
};


const updateCategory = async (catData) => {
  const response = axios.put(
    `${baseUrl}servicecategory/updatecategory/${catData.id}`,
    catData.formData,
    config
  );
  return response.data;
};
const sCategoryService = {
  getServiceCategory,
  createServiceCategory,
  deleteCategory,
  updateCategory,
  getAServiceCategory,
};

export default sCategoryService;
