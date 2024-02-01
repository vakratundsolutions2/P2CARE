import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
const registerData = async (userData) => {
  const res = await axios.post(`${baseUrl}user/adddoctor`, userData);
  return res.data;
};




const registerService = {
    registerData,
   
}
export default registerService