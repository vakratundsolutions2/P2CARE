import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
import { config } from "../../utils/axiosConfig";
const getAllBookings = async () => {
  const res = await axios.get(`${baseUrl}book/allbookappointment`, config);
  return res.data;
};
const getBookingByID = async (id) => {
  const res = await axios.get(`${baseUrl}book/appointment/${id}`, config);
  return res.data;
};
const DeleteBookings = async (id) => {
  const res = await axios.delete(`${baseUrl}book/appointment/${id}`, config);
  return res.data;
};
const AllInq = async () => {
  const res = await axios.get(`${baseUrl}inquary/allcomment`, config);
  return res.data;
};
const getInq = async (id) => {
  const res = await axios.get(`${baseUrl}inquary/getcomment/${id}`, config);
  return res.data;
};
const editInq = async (DATA) => {
  const res = await axios.put(`${baseUrl}inquary/editcomment/${DATA?.id}`, DATA.formData, config);
  return res.data;
};
const deleteInq = async (DATA) => {
  const res = await axios.delete(`${baseUrl}inquary/editcomment/${DATA?.id}`,  config);
  return res.data;
};
const ReportService = {
  getInq,
  getAllBookings,
  AllInq,
  deleteInq,
  editInq,
  getBookingByID,
  DeleteBookings,
};

export default ReportService;


