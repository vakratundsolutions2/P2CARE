import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
import { config } from "../../utils/axiosConfig";


const getavailablity = async (DATA) => {

  const res = await axios.get(
    `${baseUrl}available/searchdoctortime/${DATA?.ID}?date=${DATA?.DATE}`
  );


  return res.data;
};

const availableService = {
  getavailablity,
};
export default availableService;
