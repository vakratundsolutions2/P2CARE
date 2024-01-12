import { Link } from "react-router-dom";
import { AiFillDelete, AiOutlineFileSearch } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import CustomModal from "../../components/CustomModal";
import { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  allServiceCategory,
  deleteServiceCategory,
  resetState,
} from "../../features/serviceCategory/sCategorySlice";
import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";

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
    title: "For Service",
    dataIndex: "forservice",
    sorter: (a, b) => a.name.length - b.name.length,
  },

  {
    title: "Image",
    dataIndex: "icon",
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

const ServiceCategoryList = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [delCatId, setDelCatId] = useState("");
const [search, setSearch] = useState("");
const [searchResult, setSearchResult] = useState([]);
  
  useEffect(() => {
    dispatch(allServiceCategory());
    dispatch(resetState());
  }, [delCatId]);


  useEffect(() => {
    if (search) {
      axios
        .get(`${baseUrl}servicecategory/searchcategory/${search}`)
        .then((e) => setSearchResult(e.data?.data));
    } else {
      axios
        .get(`${baseUrl}servicecategory/allcategory`)
        .then((e) => setSearchResult(e.data?.data));
    }
  }, [search, delCatId]);

  // console.log(searchResult);
  

const deleteSCategory = (e) => {
  dispatch(deleteServiceCategory(e));
  setTimeout(() => {
    dispatch(allServiceCategory());
  }, 100);
  setOpen(false);
};
  const hideModal = () => {
    setOpen(false);
  };

  const data1 = [];
  for (let i = 0; i < searchResult?.length; i++) {
    data1.push({
      key: i + 1,
      name: searchResult[i].Name,
      forservice: searchResult[i].ForService,
      icon: (
        <>
          <img
            src={`${baseUrl}servicecategory/${searchResult[i]?.Icon}`}
            alt={searchResult[i]?.Name}
            className="list-img"
          />
        </>
      ),
      status: (
        <>
          <div className="btn btn-outline-primary uppercase">
            {searchResult[i]?.status}
          </div>
        </>
      ),
      action: (
        <>
          <Link
            className=" fs-3 text-danger"
            to={`/admin/service-categiry/${searchResult[i]?._id}`}
          >
            <BiEdit />
          </Link>
          <button
            onClick={() => showModal(searchResult[i]._id)}
            className="ms-3 fs-3 text-danger bg-transparent border-0"
          >
            <AiFillDelete />
          </button>
        </>
      ),
    });
  }

  const showModal = (e) => {
    setOpen(true);
    setDelCatId(e);
  };
  

  return (
    <div className="mt-3">
      <div className="header d-flex mb-3 justify-content-between">
        <h2 className="text-header">Service Ctegory</h2>
        <Link to={`/admin/service-categiry`} className="btn btn-primary mb-3">
          Add New Items
        </Link>
      </div>
      
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
        performAction={() => {
          deleteSCategory(delCatId);
        }}
        title="Are you sure you want to delete this blog category?"
      />
    </div>
  );
};

export default ServiceCategoryList;
