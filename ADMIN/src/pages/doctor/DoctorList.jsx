import { Table } from "antd";
import { useEffect, useState } from "react";
import { AiFillDelete, AiOutlineFileSearch } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";
import CustomModal from "../../components/CustomModal";
import { useDispatch } from "react-redux";
import {
  deleteADoctor,
  getAllDoctors,
  resetState,
} from "../../features/doctor/doctorSlice";
import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },

  {
    title: "Code",
    dataIndex: "code",
    sorter: (a, b) => a.name.length - b.name.length,
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
    title: "Price",
    dataIndex: "price",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Appointment Status ",
    dataIndex: "appointmentStatus",
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

const DoctorList = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [delDoc, setdelDoc] = useState("");

  // useEffect(() => {
  //   dispatch(getAllDoctors());
  //   dispatch(resetState());

  // }, []);

  useEffect(() => {
    if (search) {
      axios
        .get(`http://localhost:3001/doctor/searchdoctor/${search}`)
        .then((e) => setSearchResult(e.data?.data));
    } else {
      axios
        .get(`http://localhost:3001/doctor/alldoctor`)
        .then((e) => setSearchResult(e.data?.data));
    }
  }, [search, delDoc]);

  const showModal = (e) => {
    setOpen(true);
    setdelDoc(e);
  };

  const hideModal = () => {
    setOpen(false);
  };

  const data1 = [];
  for (let i = 0; i < searchResult?.length; i++) {
    data1.push({
      key: i + 1,

      code: searchResult[i]?.doctorCode,
      name: searchResult[i]?.doctorName,
      image: (
        <>
          <img
            src={`${baseUrl}doctor/${searchResult[i]?.image}`}
            alt=""
            className="list-img"
          />
        </>
      ),
      price: searchResult[i]?.price,
      appointmentStatus: searchResult[i]?.availabileforappointment ? (
        <div className="btn btn-success">Yes</div>
      ) : (
        <div className="btn btn-danger">No</div>
      ),
      status: (
        <>
          <div className="btn btn-primary uppercase">
            {searchResult[i]?.status}
          </div>
        </>
      ),
      action: (
        <>
          <Link
            to={`/admin/doctor/${searchResult[i]?._id}`}
            className=" fs-3 text-danger"
          >
            <BiEdit />
          </Link>
          <button
            className="ms-3 fs-3 text-danger bg-transparent border-0"
            onClick={() => showModal(searchResult[i]?._id)}
          >
            <AiFillDelete />
          </button>
        </>
      ),
    });
  }
  const deleteDoctor = (e) => {
    dispatch(deleteADoctor(e));
    setOpen(false);
    setTimeout(() => {
      dispatch(getAllDoctors());
      dispatch(resetState());
    }, 100);
  };
  return (
    <div>
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
      <h3 className="mb-4  px-5">All Doctors</h3>
      <div >
        <Table columns={columns} dataSource={data1}  />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          deleteDoctor(delDoc);
        }}
        title="Are you sure you want to remove this doctor ?"
      />
    </div>
  );
};

export default DoctorList;
