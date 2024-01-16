import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
import { config } from "../../utils/axiosConfig";
const getAllTime = async () => {
  const res = await axios.get(`${baseUrl}time/alltime`, config);

  return res.data;
};
const getATime = async (id) => {
  const res = await axios.get(`${baseUrl}time/searchtime/${id}`, config);

  return res.data;
};
const AddNewTime = async (Data) => {
  const res = await axios.post(`${baseUrl}time/addtime`, Data, config);

  return res.data;
};
const DeleteTime = async (Data) => {
  const res = await axios.delete(`${baseUrl}time/deletetime/${Data}`, config);

  return res.data;
};
const updateTime = async (Data) => {
  const res = await axios.put(
    `${baseUrl}time/updatetime/${Data.id}`,
    Data.formData,
    config
  );

  return res.data;
};

const timeService = {
  getAllTime,
  AddNewTime,
  DeleteTime,
  updateTime,
  getATime,
};
export default timeService;
