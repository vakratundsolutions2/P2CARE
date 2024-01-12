

import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import CustomModal from "../../components/CustomModal";
import { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch } from "react-redux";

import {
  deleteAHospital,
  getAllHospitals,
  resetState,
} from "../../features/hospital/hospitalSlice";
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
    title: "Image",
    dataIndex: "image",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Opning Time",
    dataIndex: "opningTime",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Closing Time",
    dataIndex: "closingTime",
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

const HospitalList = () => {
  useEffect(() => {
    dispatch(getAllHospitals());
    dispatch(resetState());
  }, []);
  const [delId, setdelId] = useState("");
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(getAllHospitals());
  }, [delId]);

  useEffect(() => {
    if (search) {
      axios
        .get(`http://localhost:3001/hospital/searchhospital/${search}`)
        .then((e) => setSearchResult(e.data?.data));
    } else {
      axios
        .get(`http://localhost:3001/hospital/allhospital`)
        .then((e) => setSearchResult(e.data?.data));
    }
  }, [search, delId]);

  const deleteHosp = (e) => {
    dispatch(deleteAHospital(e));
    setTimeout(() => {
      dispatch(getAllHospitals());
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
      name: searchResult[i].hospitalname,
      image: (
        <>
          <img
            src={`${baseUrl}hospital/${searchResult[i].hospitallogo}`}
            alt="img"
            className="list-img"
          />
        </>
      ),
      opningTime: searchResult[i].openingtime,
      closingTime: searchResult[i].closingtime,

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
            to={`/admin/hospital/${searchResult[i]?._id}`}
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
    setdelId(e);
  };

  return (
    <>
      <div className="mt-3">
        <div className="header d-flex mb-3 justify-content-between">
          <h2 className="text-header">All Hospitals</h2>
          <Link to={`/admin/hospital`} className="btn btn-primary mb-3">
            Add New Hospital
          </Link>
        </div>

        <div className="header d-flex w-25 float-end  mb-3">
          <h6 className="form-label mt-2 px-2">Search:</h6>
          <input
            className="form-control"
            onChange={(e) => setSearch(e.target.value)}
            aria-describedby="basic-addon1"
            type="search"
            name="search"
            placeholder="Search"
            aria-label="Search"
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
            deleteHosp(delId);
          }}
          title="Are you sure you want to delete ?"
        />
      </div>
    </>
  );
};

export default HospitalList;
