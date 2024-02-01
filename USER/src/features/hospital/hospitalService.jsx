import axios from "axios";
import { config } from "../../utils/axiosConfig";
import { baseUrl } from "../../utils/baseUrl";


const allHospital = async () => {
  const res = await axios.get(
    `${baseUrl}hospital/allhospital`,

    config
  );

  return res.data;
};
const getAHospital = async (id) => {
  const res = await axios.get(
    `${baseUrl}hospital/searchhospitalbyid/${id}`,

    config
  );

  return res.data;
};
const filterHospital = async (DATA) => {
  const { name, category, sort, page, limit, star, service } = DATA
  const res = await axios.get(
    `${baseUrl}hospital/searchHospitalByFilters/?page=${page}&limit=${limit}&sort=${sort}&name=${name}&rating=${star}&category=${category}&service=${service}`,
    config
  );
  return res.data;
};
const ratinghospital = async (DATA) => {
  const res = await axios.put(`${baseUrl}hospital/rating`, DATA, config);

  return res.data;
};
const hospitalService = {
  allHospital,
  getAHospital,
  filterHospital,
  ratinghospital,
};
export default hospitalService;