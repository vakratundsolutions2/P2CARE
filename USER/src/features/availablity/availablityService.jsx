import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
import { config } from "../../utils/axiosConfig";
import { data } from "jquery";

const allavailablity = async () => {
  const res = await axios.get(`${baseUrl}available/alltime`, config);

  return res.data;
};
const getavailablity = async (DATA) => {
  const res = await axios.get(
    `${baseUrl}available/searchdoctortime/${DATA.id}?date=${DATA.date} `,

    config
  );

  return res.data;
};

const availableService = {
  allavailablity,

  getavailablity,
};
export default availableService;
