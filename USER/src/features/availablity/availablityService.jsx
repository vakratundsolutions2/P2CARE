import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
import { config } from "../../utils/axiosConfig";

const allavailablity = async () => {
  const res = await axios.get(`${baseUrl}available/alltime`, config);

  return res.data;
};
const getavailablity = async (id) => {
  const res = await axios.get(
    `${baseUrl}available/searchdoctortime/${id}`,
    config
  );

  return res.data;
};

const availableService = {
  allavailablity,

  getavailablity,
};
export default availableService;
