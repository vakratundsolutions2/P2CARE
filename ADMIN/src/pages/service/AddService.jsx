import { useNavigate } from "react-router-dom";
import CustomInput from "../../components/CustomInput";
import { IoArrowBack } from "react-icons/io5";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  allServiceCategory,
  
} from "../../features/serviceCategory/sCategorySlice";
import {
  createAService,
  getAllServices,
  resetState,
  updateAService,
} from "../../features/service/serviceSlice";

const AddService = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
    const ServiceId = location.pathname.split("/")[3];

  useEffect(() => {
    dispatch(allServiceCategory());
    dispatch(getAllServices());
    dispatch(resetState());
  }, []);
  const cat = useSelector((state) => state.sCategory?.sCategories);


    const ServiceData = useSelector((state) => state?.service?.Services);
      const updateData = ServiceData?.filter((e) => {
        return e._id === ServiceId;
      });  




  const formik = useFormik({
    initialValues: {
      title: updateData ? updateData[0]?.title : "",
      description: updateData ? updateData[0]?.description : "",
      expert: updateData ? updateData[0]?.expert : "",
      slug: updateData ? updateData[0]?.slug : "",
      metatitle: updateData ? updateData[0]?.metatitle : "",
      ogmetadescription: updateData ? updateData[0]?.ogmetadescription : "",
      ogmetatitle: updateData ? updateData[0]?.ogmetatitle : "",
      metadescription: updateData ? updateData[0]?.metadescription : "",
      metatag: updateData ? updateData[0]?.metatag : "",
      ogmetaimage: updateData ? updateData[0]?.ogmetaimage : "",
      category: updateData ? updateData[0]?.category : "",
      icontype: updateData ? updateData[0]?.icontype : "",
      order: updateData ? updateData[0]?.order : "",
      image: updateData ? updateData[0]?.image : "",
      status: updateData ? updateData[0]?.status : "",
      iconimage: updateData ? updateData[0]?.iconimage : "",
    },

    onSubmit: async (values) => {
      // console.log(values);
      const {
        title,
        description,
        expert,
        slug,
        metatitle,
        ogmetatitle,
        metadescription,
        metatag,
        ogmetaimage,
        category,
        icontype,
        order,
        image,
        ogmetadescription,
        status,
        iconimage,
      } = values;
      const formData = new FormData();

      formData.append("title", title);
      formData.append("description", description);
      formData.append("expert", expert);
      formData.append("slug", slug);
      formData.append("metatitle", metatitle);
      formData.append("ogmetatitle", ogmetatitle);
      formData.append("metadescription", metadescription);
      formData.append("metatag", metatag);
      formData.append("ogmetaimage", ogmetaimage);
      formData.append("category", category);
      formData.append("icontype", icontype);
      formData.append("order", order);
      formData.append("image", image);
      formData.append("status", status);
      formData.append("iconimage", iconimage);
      formData.append("ogmetadescription", ogmetadescription);
      if (ServiceId === undefined || "") {
        dispatch(createAService(formData));
      } else {
        dispatch(updateAService({ id: ServiceId, formData: formData }));
      }
    },
  });

  return (
    <>
      <div className="container-xxl mb-5">
        <div className="mb-4">
          <button
            className="ms-3 fs-2 btn  bg-transparent border-0"
            onClick={() => navigate(-1)}
          >
            <IoArrowBack />
          </button>
        </div>
        <div className="row ">
          <div className="card p-4 px-5">
            <h3 className="px-4 py-4 my-4">
              {ServiceId ? "Edit" : "Add"} Service
            </h3>
            <form
              className="row align-items-center"
              onSubmit={formik.handleSubmit}
              encType="multipart/form-data"
            >
              <div className="col-4 mb-3">
                <CustomInput
                  type="text"
                  label="Enater Title "
                  name="title"
                  onChng={formik.handleChange("title")}
                  onBlr={formik.handleBlur("title")}
                  val={formik.values.title}
                />
                <div className="error">
                  {formik.touched.title && formik.errors.title}
                </div>
              </div>
              <div className="col-4 mb-3">
                <CustomInput
                  type="text"
                  label="Enater Description "
                  name="description"
                  onChng={formik.handleChange("description")}
                  onBlr={formik.handleBlur("description")}
                  val={formik.values.description}
                />
                <div className="error">
                  {formik.touched.description && formik.errors.description}
                </div>
              </div>
              <div className="col-4 mb-3">
                <CustomInput
                  type="text"
                  label="Enater Expert "
                  name="expert"
                  onChng={formik.handleChange("expert")}
                  onBlr={formik.handleBlur("expert")}
                  val={formik.values.expert}
                />
                <div className="error">
                  {formik.touched.expert && formik.errors.expert}
                </div>
              </div>

              <div className="col-4 mb-3">
                <CustomInput
                  type="text"
                  label="Enater Slug "
                  name="slug"
                  onChng={formik.handleChange("slug")}
                  onBlr={formik.handleBlur("slug")}
                  val={formik.values.slug}
                />
                <div className="error">
                  {formik.touched.slug && formik.errors.slug}
                </div>
              </div>

              <div className="col-4 mb-3">
                <CustomInput
                  type="text"
                  label="Enater Metatitle "
                  name="metatitle"
                  onChng={formik.handleChange("metatitle")}
                  onBlr={formik.handleBlur("metatitle")}
                  val={formik.values.metatitle}
                />
                <div className="error">
                  {formik.touched.metatitle && formik.errors.metatitle}
                </div>
              </div>
              <div className="col-4 mb-3">
                <CustomInput
                  type="text"
                  label="Enater Ogmetatitle "
                  name="ogmetatitle"
                  onChng={formik.handleChange("ogmetatitle")}
                  onBlr={formik.handleBlur("ogmetatitle")}
                  val={formik.values.ogmetatitle}
                />
                <div className="error">
                  {formik.touched.ogmetatitle && formik.errors.ogmetatitle}
                </div>
              </div>
              <div className="col-4 mb-3">
                <CustomInput
                  type="text"
                  label="Enater ogmetadescription "
                  name="ogmetadescription"
                  onChng={formik.handleChange("ogmetadescription")}
                  onBlr={formik.handleBlur("ogmetadescription")}
                  val={formik.values.ogmetadescription}
                />
                <div className="error">
                  {formik.touched.ogmetadescription &&
                    formik.errors.ogmetadescription}
                </div>
              </div>
              <div className="col-4 mb-3">
                <CustomInput
                  type="text"
                  label="Enater Metadescription "
                  name="metadescription"
                  onChng={formik.handleChange("metadescription")}
                  onBlr={formik.handleBlur("metadescription")}
                  val={formik.values.metadescription}
                />
                <div className="error">
                  {formik.touched.metadescription &&
                    formik.errors.metadescription}
                </div>
              </div>

              <div className="col-4 mb-3">
                <CustomInput
                  type="text"
                  label="Enater metatag "
                  name="metatag"
                  onChng={formik.handleChange("metatag")}
                  onBlr={formik.handleBlur("metatag")}
                  val={formik.values.metatag}
                />
                <div className="error">
                  {formik.touched.metatag && formik.errors.metatag}
                </div>
              </div>
              <div className="col-4 mb-3">
                <CustomInput
                  type="number"
                  label="Enater Order "
                  name="order"
                  onChng={formik.handleChange("order")}
                  onBlr={formik.handleBlur("order")}
                  val={formik.values.order}
                />
                <div className="error">
                  {formik.touched.order && formik.errors.order}
                </div>
              </div>

              <div className="col-4 mb-3 ">
                <select
                  name="category"
                  className="form-control form-select py-3 "
                  onChange={formik.handleChange("category")}
                  onBlur={formik.handleBlur("category")}
                  value={formik.values.category}
                >
                  <option value={''}>Select Category</option>
                  {cat?.map((e, i) => {
                    return (
                      <>
                        <option key={i} value={e.Name}>
                          {e.Name}
                        </option>
                      </>
                    );
                  })}
                </select>

                <div className="error">
                  {formik.touched.category && formik.errors.category}
                </div>
              </div>

              <div className="col-4 mb-3">
                <select
                  name="icontype"
                  className="form-control form-select py-3 "
                  onChange={formik.handleChange("icontype")}
                  onBlur={formik.handleBlur("icontype")}
                  value={formik.values.icontype}
                >
                  <option selected> Select Icon Type </option>
                  <option value="image icon"> Image icon</option>
                  <option value="font icon"> Font icon</option>
                </select>
                <div className="error">
                  {formik.touched.icontype && formik.errors.icontype}
                </div>
              </div>

              <div className="col-4 mb-3 ">
                <select
                  name="status"
                  className="form-control form-select py-3 "
                  onChange={formik.handleChange("status")}
                  onBlur={formik.handleBlur("status")}
                  value={formik.values.status}
                >
                  <option selected>Select Status</option>
                  <option value="draft">Draft</option>
                  <option value="publish">Publish</option>
                </select>
                <div className="error">
                  {formik.touched.status && formik.errors.status}
                </div>
              </div>

              <div className="col-4 mb-3">
                <CustomInput
                  type="file"
                  label="Enater image "
                  name="image"
                  accept="image/*"
                  id="formFile"
                  onChng={(e) =>
                    formik.setFieldValue("image", e.target.files[0])
                  }
                />
                <div className="error">
                  {formik.touched.image && formik.errors.image}
                </div>
              </div>
              <div className="col-4 mb-3">
                <CustomInput
                  type="file"
                  label="Enater iconimage "
                  name="iconimage"
                  accept="image/*"
                  id="formFile"
                  onChng={(e) =>
                    formik.setFieldValue("iconimage", e.target.files[0])
                  }
                />
                <div className="error">
                  {formik.touched.iconimage && formik.errors.iconimage}
                </div>
              </div>
              <div className="col-4 mb-3">
                <CustomInput
                  type="file"
                  label="Enater Ogmetaimage "
                  name="ogmetaimage"
                  accept="image/*"
                  id="formFile"
                  onChng={(e) =>
                    formik.setFieldValue("ogmetaimage", e.target.files[0])
                  }
                />
                <div className="error">
                  {formik.touched.ogmetaimage && formik.errors.ogmetaimage}
                </div>
              </div>
              <div className=" my-5">
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddService;
