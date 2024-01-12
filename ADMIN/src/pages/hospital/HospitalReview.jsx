import { useFormik } from "formik";
// import CustomInput from "../components/CustomInput";
// import * as yup from "yup";

import { useState } from "react";
import { Table } from "antd";
import CustomModal from "../../components/CustomModal";

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Hospital",
    dataIndex: "appointment",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "User",
    dataIndex: "user",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Rating",
    dataIndex: "rating",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Message",
    dataIndex: "message",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const HospitalReview = () => {
  const [open, setOpen] = useState(false);

  const hideModal = () => {
    setOpen(false);
  };

  const data1 = [];
  for (let i = 0; i < 0; i++) {
    data1.push({
      key: i + 1,
      name: "raam",
      email: "raam",
      username: "raam",
      action: (
        <>
          {/* <Link
            //   to={`/admin/blog-category/${bCatState[i]._id}`}
            className=" fs-3 text-danger"
          >
            <BiEdit />
          </Link> */}
          {/* <button
            className="ms-3 fs-3 text-danger bg-transparent border-0"
            // onClick={() => showModal(bCatState[i]._id)}
          >
            <AiFillDelete />
          </button> */}
        </>
      ),
    });
  }

  // let schema = yup.object().shape({});

  const formik = useFormik({
    initialValues: {},
    // validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="container">
      <h1 className="text-responsive">All Hospital Reviews </h1>

      <div className="dropdown my-3">
        <button
          className="btn btn-outlined border col-md-2 dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Bulk Action
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>{" "}
        <button className="btn btn-primary">Apply</button>
      </div>
      <div className="d-flex">
        <h6 className="mt-4">Show</h6>
        {/* <CustomInput
          type="text"
          label=" "
          name="status"
          // onChng={formik.handleChange("status")}
          // onBlr={formik.handleBlur("status")}
          // val={formik.values.status}
        />
        <div className="error">
          {formik.touched.status && formik.errors.status}
        </div> */}
        <div className="col-md-3 offset-9 my-3">
          <form
            className="d-flex"
            style={{ marginRight: "35px" }}
            role="search"
          >
            <h6 className="form-label mt-2">Search:</h6>
            <input
              className="form-control me-2 mx-1 "
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </div>
      <div>
        <Table
          className="table table-responsive"
          columns={columns}
          dataSource={data1}
        />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        //   performAction={() => {
        //     deleteBlogCategory(blogCatId);
        //   }}
        title="Are you sure you want to delete this blog category?"
      />
    </div>
  );
};

export default HospitalReview;
