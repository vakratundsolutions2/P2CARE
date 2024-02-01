import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
import { config } from "../../utils/axiosConfig";

const getAppoinment = async (DATA) => {
  const res = await axios.get(
    `${baseUrl}book/doctorappointment/${DATA} `,

    config
  );

  return res.data;
};
const getAppoinmentBYID = async (DATA) => {
  const res = await axios.get(
    `${baseUrl}book/appointment/${DATA} `,

    config
  );

  return res.data;
};

const UpdateAppoinment = async (DATA) => {
  const res = await axios.put(
    `${baseUrl}book/reschedulebooking/${DATA?.id} `,
    DATA?.formData,
    config
  );

  return res.data;
};
const AcceptAppoinment = async (DATA) => {
  console.log(DATA);
  const res = await axios.put(
    `${baseUrl}book/acceptappoinment/${DATA} `,
    { Accepted: true },
    config
  );

  return res.data;
};
const AcceptAllAppoinment = async (data) => {
  const res = await axios.get(
    `${baseUrl}book/acceptedappointment/${data?.ID}?isAccepted=${data.accpted} `,

    config
  );

  return res.data;
};

const appoinmentService = {
  getAppoinment,
  getAppoinmentBYID,
  UpdateAppoinment,
  AcceptAllAppoinment,
  AcceptAppoinment,
};
export default appoinmentService;
