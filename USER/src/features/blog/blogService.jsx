import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
import { config } from "../../utils/axiosConfig";
const addblog = async (DATA) => {

  const res = await axios.post(`${baseUrl}blog/addblog`, DATA, config);

  return res.data;
};
const allblogs = async () => {
  const res = await axios.get(`${baseUrl}blog/allblog`, config);

  return res.data;
};
const delBlog = async (id) => {
  const res = await axios.delete(`${baseUrl}blog/deleteblog/${id}`, config);

  return res.data;
};
const delAllBlog = async () => {
  const res = await axios.delete(`${baseUrl}blog/deleteallblog`, config);

  return res.data;
};
const updBlog = async (DATA) => {
  const res = await axios.put(`${baseUrl}blog/editblog/${DATA.id}`,DATA.formData ,config);

  return res.data;
};


const blogService = {
  addblog,
  allblogs,
  delBlog,
  delAllBlog,
  updBlog,
};
export default blogService;
