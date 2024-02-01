import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";

const AddInquary = async (DATA) => {
  var data = {
    "name": DATA.get("name"),
    "email": DATA.get("email"),
    "mobile": DATA.get("mobileNo"),
    "comment": DATA.get("message")
  }
  const res = await axios.post(`${baseUrl}inquary/addcomment`, data);
  return res.data;
};

const inquaryService = {
  AddInquary
};

export default inquaryService;
