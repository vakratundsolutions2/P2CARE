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
const getAblog = async (id) => {
  const res = await axios.get(`${baseUrl}blog/searchblogbyid/${id}`, config);

  return res.data;
};


const blogService = {
  addblog,
  allblogs,
  
  getAblog,
};
export default blogService;
