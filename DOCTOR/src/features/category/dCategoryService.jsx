import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
import { config } from "../../utils/axiosConfig";



const getDoctorCategory = async () => {
  const res = await axios.get(`${baseUrl}doctorcategory/allcategory`, config);

  return res.data;
};
const getDoctorACategory = async (id) => {
  const res = await axios.get(
    `${baseUrl}doctorcategory/searchcategorybyid/${id}`,
    config
  );

  return res.data;
};


const doctorCategoryService = {
  getDoctorCategory,
  
  getDoctorACategory,
};

export default doctorCategoryService;
