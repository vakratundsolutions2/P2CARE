import { useFormik } from "formik";
import CustomInput from "../../components/CustomInput";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GetAllBlogCategory } from "../../features/blogCategory/BlogCategorySlice";
import {
  AddBlogs,
  GetABlog,
  UpdateBlog,
  resetState,
} from "../../features/blog/blogSlice";
import { useLocation } from "react-router-dom";

let schema = yup.object().shape({
  title: "",
  blogcontent: "",
  author: "",
  slug: "",
  blogtags: "",
  metatag: "",
  metatitle: "",
});
const AddBlog = () => {
  const location = useLocation();
  const blogId = location.pathname.split("/")[3];
  const dispatch = useDispatch();

  useEffect(() => {
    if (blogId !== undefined) {
      dispatch(GetABlog(blogId));
      dispatch(resetState());
    } else {
      dispatch(resetState());
    }
  }, [blogId]);

  useEffect(() => {
    dispatch(GetAllBlogCategory());
    dispatch(resetState());
  }, []);

  const AllCategory = useSelector(
    (state) => state.blogCategory?.BlogCategories
  );
  const BlogState = useSelector((state) => state.blog);
  const { SingleBlog } = BlogState;

  console.log(SingleBlog);

  const formik = useFormik({
    enableReinitialize: true,

    initialValues: {
      title: SingleBlog?.title || "",
      blogcontent: SingleBlog?.blogcontent || "",
      author: SingleBlog?.author || "",
      slug: SingleBlog?.slug || "",
      blogtags: SingleBlog?.blogtags || "",
      metatag: SingleBlog?.metatag || "",
      metatitle: SingleBlog?.metatitle || "",
      ogmetatitle: SingleBlog?.ogmetatitle || "",
      metadescription: SingleBlog?.metadescription || "",
      ogmetadescription: SingleBlog?.ogmetadescription || "",
      blogimage: SingleBlog?.blogimage || "",
      ogmetaimage: SingleBlog?.ogmetaimage || "",
      category: SingleBlog?.category || "",
      status: SingleBlog?.status || "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      const {
        title,
        blogcontent,
        author,
        slug,
        blogtags,
        metatag,
        metatitle,
        ogmetatitle,
        metadescription,
        ogmetadescription,
        blogimage,
        ogmetaimage,
        category,
        status,
      } = values;
      const formData = new FormData();
      formData.append("title", title);
      formData.append("blogcontent", blogcontent);
      formData.append("author", author);
      formData.append("slug", slug);
      formData.append("blogtags", blogtags);
      formData.append("metatag", metatag);
      formData.append("metatitle", metatitle);
      formData.append("ogmetatitle", ogmetatitle);
      formData.append("metadescription", metadescription);
      formData.append("ogmetadescription", ogmetadescription);
      formData.append("blogimage", blogimage);
      formData.append("ogmetaimage", ogmetaimage);
      formData.append("category", category);
      formData.append("status", status);

      if (blogId === undefined || "") {
        dispatch(AddBlogs(formData));
        formik.resetForm();
        setTimeout(() => {
          dispatch(resetState());
        }, 300);
      } else {
        dispatch(UpdateBlog({ id: blogId, formData: formData }));
      }
    },
  });
  return (
    <>
      <div>
        <h3 className="mb-4 title">
          {" "}
          {blogId !== undefined || "" ? "Edit" : "Add New"} Blog Post
        </h3>
        <div>
          <form onSubmit={formik.handleSubmit} className="mb-4 ">
            <div className="row">
              <div className="col-12">
                <CustomInput
                  type="text"
                  label="Title "
                  name="title"
                  onChng={formik.handleChange("title")}
                  onBlr={formik.handleBlur("title")}
                  val={formik.values.title}
                />
                <div className="error">
                  {formik.touched.title && formik.errors.title}
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder=""
                    id="floatingTextarea"
                    name="blogcontent"
                    onChange={formik.handleChange("blogcontent")}
                    value={formik.values.blogcontent}
                  />
                  <label className="mx-3" htmlFor="floatingTextarea">
                    Content
                  </label>
                </div>
                <div className="error">
                  {formik.touched.blogcontent && formik.errors.blogcontent}
                </div>
              </div>
              <div className="col-6">
                <CustomInput
                  type="text"
                  label="P Author "
                  name="author"
                  onChng={formik.handleChange("author")}
                  onBlr={formik.handleBlur("author")}
                  val={formik.values.author}
                />
                <div className="error">
                  {formik.touched.author && formik.errors.author}
                </div>
              </div>

              <div className="col-6">
                <CustomInput
                  type="text"
                  label="Doctor slug "
                  name="slug"
                  onChng={formik.handleChange("slug")}
                  onBlr={formik.handleBlur("slug")}
                  val={formik.values.slug}
                />
                <div className="error">
                  {formik.touched.slug && formik.errors.slug}
                </div>
              </div>

              <div className="col-6">
                <CustomInput
                  type="text"
                  label="Blog Tags "
                  name="blogTags"
                  onChng={formik.handleChange("blogtags")}
                  onBlr={formik.handleBlur("blogtags")}
                  val={formik.values.blogtags}
                />
                <div className="error">
                  {formik.touched.blogtags && formik.errors.blogtags}
                </div>
              </div>

              <div className="col-6">
                <CustomInput
                  type="text"
                  label="Meta Tag "
                  name="metatag"
                  onChng={formik.handleChange("metatag")}
                  onBlr={formik.handleBlur("metatag")}
                  val={formik.values.metatag}
                />
                <div className="error">
                  {formik.touched.metatag && formik.errors.metatag}
                </div>
              </div>

              <div className="col-6">
                <CustomInput
                  type="text"
                  label="Meta Title "
                  name="metatitle"
                  onChng={formik.handleChange("metatitle")}
                  onBlr={formik.handleBlur("metatitle")}
                  val={formik.values.metatitle}
                />
                <div className="error">
                  {formik.touched.metatitle && formik.errors.metatitle}
                </div>
              </div>

              <div className="col-6">
                <CustomInput
                  type="text"
                  label="Og Meta Title "
                  name="ogmetatitle"
                  onChng={formik.handleChange("ogmetatitle")}
                  onBlr={formik.handleBlur("ogmetatitle")}
                  val={formik.values.ogmetatitle}
                />
                <div className="error">
                  {formik.touched.ogmetatitle && formik.errors.ogmetatitle}
                </div>
              </div>

              <div className="col-6 ">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    name="metadescription"
                    onChange={formik.handleChange("metadescription")}
                    value={formik.values.metadescription}
                  />
                  <label className="mx-3" htmlFor="floatingTextarea">
                    Meta Description
                  </label>
                </div>
                <div className="error">
                  {formik.touched.metadescription &&
                    formik.errors.metadescription}
                </div>
              </div>

              <div className="col-6 ">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    name="ogmetadescription"
                    onChange={formik.handleChange("ogmetadescription")}
                    value={formik.values.ogmetadescription}
                  ></textarea>
                  <label className="mx-3" htmlFor="floatingTextarea">
                    Og Meta Description
                  </label>
                </div>
                <div className="error">
                  {formik.touched.ogmetadescription &&
                    formik.errors.ogmetadescription}
                </div>
              </div>

              <div className="col-6 ">
                <CustomInput
                  type="file"
                  label="Blog Image "
                  accept="image/*"
                  id="formFile"
                  name="blogimage"
                  onChng={(e) =>
                    formik.setFieldValue("blogimage", e.target.files[0])
                  }
                />
                <div className="error">
                  {formik.touched.blogimage && formik.errors.blogimage}
                </div>
              </div>

              <div className="col-6 ">
                <CustomInput
                  type="file"
                  accept="image/*"
                  id="formFile"
                  label="Or Meta image "
                  name="ogmetaimage"
                  onChng={(e) =>
                    formik.setFieldValue("ogmetaimage", e.target.files[0])
                  }
                />
                <div className="error">
                  {formik.touched.ogmetaimage && formik.errors.ogmetaimage}
                </div>
              </div>

              <div className="mb-3">
                <select
                  className="form-control form-select py-3 px-4"
                  name="category"
                  onChange={formik.handleChange("category")}
                  value={formik.values.category}
                >
                  <option selected>Select Category</option>
                  {AllCategory?.map((el) => {
                    return (
                      <>
                        <option key={el._id} value={el?.name}>
                          {el?.name}
                        </option>
                      </>
                    );
                  })}
                </select>
                <div className="error">
                  {formik.touched.category && formik.errors.category}
                </div>
              </div>

              <div className="mb-3">
                <select
                  className="form-control form-select py-3 px-4"
                  name="status"
                  onChange={formik.handleChange("status")}
                  value={formik.values.status}
                >
                  <option value={""}>Status</option>
                  <option value="publish">Publish</option>
                  <option value="draft">Draft</option>
                </select>
                <div className="error">
                  {formik.touched.status && formik.errors.status}
                </div>
              </div>

              <div className="p-3 w-full ">
                <button type="submit" className="btn btn-primary ">
                  {blogId !== undefined || "" ? "Edit" : "Add New"} Post
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddBlog;
