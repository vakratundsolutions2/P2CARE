import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
import { config } from "../../utils/axiosConfig";

const getcontact = async () => {
  const data = "65ca130f8cea85c2dff194dc";
  const res = await axios.get(`${baseUrl}content/contact/${data}`);

  return res.data;
};
const getAllFaq = async () => {
  const res = await axios.get(`${baseUrl}content/faq`);

  return res.data;
};
const getabout = async () => {
  const data = "65cb4c03297c66d95a61dc44";

  const res = await axios.get(`${baseUrl}content/about/${data}`);

  return res.data;
};
const gethome = async () => {
  const data = "65cbeaf40c59cc6417dc7e7d";

  const res = await axios.get(`${baseUrl}content/home/${data}`);

  return res.data;
};

const ContentService = {
  getcontact,
  getAllFaq,
  getabout,
  gethome,
};

export default ContentService;
