import { Table } from "antd";
import { useEffect, useState } from "react";
import { AiFillDelete, AiOutlineFileSearch } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";
import CustomModal from "../../components/CustomModal";
import { useDispatch, useSelector } from "react-redux";

import {
  allDoctorCategory,
  deleteDoctorCategory,
  resetState,
} from "../../features/dCategory/dCategorySlice.jsx";
import { baseUrl } from "../../utils/baseUrl.js";
import axios from "axios";

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Image",
    dataIndex: "image",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Status",
    dataIndex: "status",
    sorter: (a, b) => a.name.length - b.name.length,
  },

  {
    title: "Action",
    dataIndex: "action",
  },
];

const DoctorCategory = () => {
  const [open, setOpen] = useState(false);
  const [delCatId, setDelCatId] = useState("");
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  // const dCategory = useSelector((state) => state?.dCategory?.dCategories);
  useEffect(() => {
    if (search) {
      axios
        .get(`${baseUrl}doctorcategory/searchcategory/${search}`)
        .then((e) => setSearchResult(e.data?.data));
    } else {
      axios
        .get(`${baseUrl}doctorcategory/allcategory`)
        .then((e) => setSearchResult(e.data?.data));
    }
  }, [search]);

  useEffect(() => {
    dispatch(allDoctorCategory());
  }, []);

  const deleteDCategory = (e) => {
    dispatch(deleteDoctorCategory(e));
    dispatch(resetState());
    setOpen(false);

    setTimeout(() => {
      dispatch(allDoctorCategory());
    }, 400);
  };

  const showModal = (e) => {
    setOpen(true);
    setDelCatId(e);
  };

  console.log(searchResult);
  console.log(search);
  const data1 = [];
  for (let i = 0; i < searchResult?.length; i++) {
    data1.push({
      key: i + 1,
      name: searchResult[i]?.name,
      image: (
        <>
          <img
            src={`${baseUrl}doctorcategory/${searchResult[i]?.image}`}
            alt={searchResult[i]?.Name}
            className="list-img"
          />
        </>
      ),
      status: searchResult[i]?.status,
      action: (
        <>
          <div className="d-flex  ">
            <Link
              to={`/admin/doctor-category/${searchResult[i]._id}`}
              className=" fs-4 text-danger bg-transparent border-0"
            >
              <BiEdit />
            </Link>
            <button
              onClick={() => showModal(searchResult[i]._id)}
              className="ms-3 fs-4 text-danger bg-transparent border-0"
            >
              <AiFillDelete />
            </button>
          </div>
        </>
      ),
    });
  }

  return (
    <>
      <div className="container-xxl mb-4">
        <div className="row ">
          <div className="col-sm-12 mb-4">
            <div className="card p-5">
              <div className="d-flex w-full  justify-content-between align-items-center p-4">
                <h3 className="  mb-3 ">All Category</h3>
                <Link
                  className="btn btn-primary "
                  to={`/admin/doctor-category`}
                >
                  Add New Category
                </Link>
              </div>
              <div className="w-full">
                <div className="input-group mb-3 px-4  w-25 float-end  ">
                  <span className="input-group-text" id="basic-addon1">
                    <AiOutlineFileSearch />
                  </span>
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Sesrch..."
                    aria-label="Username"
                    onChange={(e) => setSearch(e.target.value)}
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
              <Table columns={columns} dataSource={data1} />
              <CustomModal
                title="Are you want to delete category ?"
                centered
                open={open}
                performAction={() => {
                  deleteDCategory(delCatId);
                }}
                onOk={() => setOpen(false)}
                hideModal={() => setOpen(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorCategory;
