import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
import { config } from "../../utils/axiosConfig";



const getDoctors = async () => {
  const res = await axios.get(`${baseUrl}doctor/alldoctor`, config);

  return res.data;
};
const getADoctor = async (id) => {
  const res = await axios.get(`${baseUrl}doctor/searchdoctorbyid/${id}`, config);

  return res.data;
};
const filterDoctor = async (DATA) => {
  console.log(DATA);
  const { category, name, Sort, valuePrice, page, limit, gender, star , avail } = DATA;
  const res = await axios.get(
    `${baseUrl}doctor/searchDoctorByFilters/?specialities=${category}&name=${name}&sort=${Sort}&minAmount=${valuePrice[0]}&maxAmount=${valuePrice[1]}&page=${page}&limit=${limit}&rating=${star}&gender=${gender}&mydate=${avail[0]}&diff=${avail[1]}`,
    config
  );

  return res.data;
};
const ratingDoctor = async (DATA) => {
  const res = await axios.put(`${baseUrl}doctor/rating/`, DATA, config);

  return res.data;
};
const BookingDetails = async (paymentId) => {
  const bookingData = localStorage.getItem("bookingDetails");
  var data = JSON.parse(bookingData);
  data["transactionid"] = paymentId;
  const res = await axios.post(`${baseUrl}book/bookappointment`, data ,config);
  return res.data;
};



const doctorService = {
  getDoctors,
  getADoctor,
  ratingDoctor,
  filterDoctor,
  BookingDetails
};

export default doctorService;
