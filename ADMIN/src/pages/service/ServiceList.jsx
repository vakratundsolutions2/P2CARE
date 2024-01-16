import { deleteAService, getAllServices, resetState } from "../../features/service/serviceSlice"
import { Table } from "antd";
import { useEffect, useState } from "react";
import { AiFillDelete, AiOutlineFileSearch } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";
import CustomModal from "../../components/CustomModal";
import { useDispatch } from "react-redux";
import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Title",
    dataIndex: "title",
    sorter: (a, b) => a.name.length - b.name.length,
  },

 
  {
    title: "Category",
    dataIndex: "category",
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



const ServiceList = () => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);
  const [delId, setDelId] = useState("");
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  
  useEffect(() => {
    dispatch(getAllServices());
    dispatch(resetState());
  }, [delId]);
  


  useEffect(() => {
    if (search) {
      axios
        .get(`${baseUrl}service/searchservice/${search}`)
        .then((e) => setSearchResult(e.data?.data));
    } else {
      axios
        .get(`${baseUrl}service/allservice`)
        .then((e) => setSearchResult(e.data?.data));
    }
  }, [search, delId]);

  

const hideModal = () => {
  setOpen(false);
};


  const deleteService = (e) => {
    dispatch(deleteAService(e));
    setTimeout(() => {
      dispatch(getAllServices());
    dispatch(resetState());

    }, 100);
    setOpen(false);
  };

  const showModal = (e) => {
    setOpen(true);
    setDelId(e);
  };

  const data1 = [];
  for (let i = 0; i < searchResult?.length; i++) {
    data1.push({
      key: i + 1,
      title: searchResult[i]?.title,
      category: searchResult[i]?.category,

      status: (
        <>
          <div className="btn btn-outline-primary uppercase ">
            {searchResult[i]?.status}
          </div>
        </>
      ),
      action: (
        <>
          <div className="d-flex  ">
            <Link
              to={`/admin/service/${searchResult[i]._id}`}
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
            <div className=" p-5">

              <div className="d-flex w-full  justify-content-between  mb-3 py-3">
              <h3 className="header">All Services</h3>
                <Link className="btn btn-primary" to={`/admin/service`}>
                  Add New Category
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
              <Table columns={columns} dataSource={data1} />
              <CustomModal
                title="Are you want to delete Service ?"
                centered
                open={open}
                hideModal={hideModal}
                performAction={() => {
                  deleteService(delId);
                }}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceList