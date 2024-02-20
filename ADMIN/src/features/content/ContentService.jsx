import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
import { config } from "../../utils/axiosConfig";

const getcontact = async (data) => {
  const res = await axios.get(`${baseUrl}content/contact/${data}`);

  return res.data;
};
const updatecontact = async (data) => {
  const res = await axios.put(
    `${baseUrl}content/contact/${data.id}`,
    data.formData,
    config
  );

  return res.data;
};



const updateFaq = async (data) => {
  const res = await axios.put(
    `${baseUrl}content/faq/${data.id}`,
    data.formData,
    config
  );

  return res.data;
};
const getFaq = async (data) => {
  const res = await axios.get(
    `${baseUrl}content/faq/${data}`,
  );

  return res.data;
};
const getAllFaq = async () => {
  const res = await axios.get(
    `${baseUrl}content/faq`,
  );

  return res.data;
};
const addFaq = async (data) => {
  const res = await axios.post(
    `${baseUrl}content/faq`,data,config
  );

  return res.data;
};
const deleteFaq = async (data) => {
  const res = await axios.delete(
    `${baseUrl}content/faq/${data}`,config
  );

  return res.data;
};


// ============================ABOUT==========================
const getAbout = async (data) => {
  const res = await axios.get(`${baseUrl}content/about/${data}`);

  return res.data;
};
const addAbout = async (data) => {
  console.log(data);
  const res = await axios.post(`${baseUrl}content/about`, data,config);

  return res.data;
};
const updateAbout = async (data) => {
  const res = await axios.put(
    `${baseUrl}content/about/${data.id}`,
    data.formData,
    config
  );

  return res.data;
};
// ============================Home==========================
const getHome = async (data) => {
  const res = await axios.get(`${baseUrl}content/home/${data}`);

  return res.data;
};
const addHome = async (data) => {
  console.log(data);
  const res = await axios.post(`${baseUrl}content/home`, data, config);

  return res.data;
};
const updateHome = async (data) => {
  const res = await axios.put(
    `${baseUrl}content/home/${data.id}`,
    data.formData,
    config
  );

  return res.data;
};
// ============================privacypolicy==========================
const getprivacypolicy = async (data) => {
  const res = await axios.get(`${baseUrl}content/privacypolicy/${data}`);

  return res.data;
};

const updateprivacypolicy = async (data) => {
  const res = await axios.put(
    `${baseUrl}content/privacypolicy/${data.id}`,
    data.formData,
    config
  );

  return res.data;
};
// ============================termsandconditions==========================
const gettermsandconditions = async (data) => {
  const res = await axios.get(`${baseUrl}content/termsandconditions/${data}`);

  return res.data;
};

const updatetermsandconditions = async (data) => {
  const res = await axios.put(
    `${baseUrl}content/termsandconditions/${data.id}`,
    data.formData,
    config
  );

  return res.data;
};







const ContentService = {
  getcontact,
  updatecontact,
  updateFaq,
  getAllFaq,
  getFaq,
  addFaq,
  deleteFaq,
  addAbout,
  updateAbout,
  getAbout,
  updateHome,
  addHome,
  getHome,
  getprivacypolicy,
  updateprivacypolicy,
  gettermsandconditions,
  updatetermsandconditions,
};

export default ContentService;
