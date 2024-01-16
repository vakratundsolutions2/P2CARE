import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
import { config } from "../../utils/axiosConfig";
const AddBlogCategory = async (DATA) => {
  console.log(DATA);
  const res = await axios.post(
    `${baseUrl}blogcategory/addcategory`,
    DATA,
    config
  );

  return res.data;
};
const ALLBlogCategory = async () => {
  const res = await axios.get(`${baseUrl}blogcategory/allcategory`, config);

  return res.data;
};
const ABlogCategory = async (id) => {
  const res = await axios.get(
    `${baseUrl}blogcategory/searchcategorybyid/${id}`,
    config
  );

  return res.data;
};

const delBlogCategory = async (id) => {
  const res = await axios.delete(
    `${baseUrl}blogcategory/deletecategory/${id}`,
    config
  );

  return res.data;
};
const updateBlogCategory = async (DATA) => {
  const res = await axios.put(
    `${baseUrl}blogcategory/updatecategory/${DATA.id}`,
    DATA.formData,
    config
  );

  return res.data;
};
const BlogCategoryService = {
  AddBlogCategory,
  ALLBlogCategory,
  delBlogCategory,
  updateBlogCategory,
  ABlogCategory,
};

export default BlogCategoryService;
