import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
import { config } from "../../utils/axiosConfig";
const addTest = async (DATA) => {
  const res = await axios.post(
    `${baseUrl}testimonial/addtestimonial`,
    DATA,
    config
  );

  return res.data;
};
const getAllTest = async () => {
  const res = await axios.get(
    `${baseUrl}testimonial/alltestimonial`,

    config
  );

  return res.data;
};
const getATest = async (id) => {
  const res = await axios.get(
    `${baseUrl}testimonial/searchtestimonialbyid/${id}`,

    config
  );

  return res.data;
};

const delTest = async (DATA) => {
  const res = await axios.delete(
    `${baseUrl}testimonial/deletetestimonial/${DATA}`,
    
    config
  );

  return res.data;
};
const delAllTest = async () => {
  const res = await axios.delete(
    `${baseUrl}testimonial/deletealltestimonial`,

    config
  );

  return res.data;
};
const updTest = async (DATA) => {
  const res = await axios.put(
    `${baseUrl}testimonial/edittestimonial/${DATA.id}`,
    DATA.formData,
    config
  );

  return res.data;
};



const testimonialService = {
  addTest,
  delTest,
  delAllTest,
  getAllTest,
  updTest,
  getATest,
};
export default testimonialService