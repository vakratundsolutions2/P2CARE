import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
import { config } from "../../utils/axiosConfig";

const doctorCategory = async (catData) => {
  const res = await axios.post(
    `${baseUrl}doctorcategory/addcategory`,
    catData,
    config
  );

  return res.data;
};

const getDoctorCategory = async () => {
  const res = await axios.get(`${baseUrl}doctorcategory/allcategory`, config);

  return res.data;
};

const deleteCategory = async (id) => {
  const response = await axios.delete(
    `${baseUrl}doctorcategory/deletecategory/${id}`,
    config
  );
  return response.data;
};
const updateCategory = async (catData) => {
  const response = axios.put(
    `${baseUrl}doctorcategory/updatecategory/${catData.id}`,
    catData.formData,
    config
  );
  return response.data;
};

const doctorCategoryService = {
  doctorCategory,
  getDoctorCategory,
  deleteCategory,
  updateCategory,
};

export default doctorCategoryService;
