import { Table } from "antd";
import { useEffect, useState } from "react";
import { AiFillDelete, AiOutlineFileSearch } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";
import CustomModal from "../../components/CustomModal";
import { useDispatch, useSelector } from "react-redux";
import { deleteAPatient, getPatients, resetState } from "../../features/patient/patientSlice";
import axios from "axios";
import { config } from "../../utils/axiosConfig";
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
    title: "Email",
    dataIndex: "email",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "User Name",
    dataIndex: "username",
    sorter: (a, b) => a.name.length - b.name.length,
  },

  {
    title: "Action",
    dataIndex: "action",
  },
];

const PatientList = () => {
  const [open, setOpen] = useState(false);
  const [patientId, setpatientId] = useState("");
  const patientState = useSelector((state) => state.patient?.Patients);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
 

  useEffect(() => {

    dispatch(getPatients());
    dispatch(resetState());
  }, []);


  
  useEffect(() => {
    if (search) {
      axios
        .get(`${baseUrl}patient/searchpatient/${search}`)
        .then((e) => setSearchResult(e.data?.data));
    } else {
      axios
        .get(`${baseUrl}patient/allpatient`, config)
        .then((e) => setSearchResult(e.data?.data));
    }
  }, [search]);

  console.log(searchResult);
  console.log(patientState);
  

  const showModal = (e) => {
    setOpen(true);
    setpatientId(e);
  };

  const hideModal = () => {
    setOpen(false);
  };

  const data1 = [];
  for (let i = 0; i < searchResult?.length; i++) {
    data1.push({
      key: i + 1,
      name: searchResult[i]?.name,
      email: searchResult[i]?.email,
      username: searchResult[i]?.username,
      action: (
        <>
          <Link
            to={`/admin/patient/${searchResult[i]._id}`}
            className=" fs-3 text-danger"
          >
            <BiEdit />
          </Link>
          <button
            onClick={() => showModal(searchResult[i]?._id)}
            className="ms-3 fs-3 text-danger bg-transparent border-0"
          >
            <AiFillDelete />
          </button>
        </>
      ),
    });
  }
    const deletePatient = (e) => {
      dispatch(deleteAPatient(e));

      setOpen(false);
      setTimeout(() => {
        dispatch(getPatients());
      }, 100);
    };
  return (
    <div>
      <h3 className="mb-4 title px-5">All Patients</h3>
      <div className="input-group mb-3 px-4  w-25 float-end ">
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
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          deletePatient(patientId);
        }}
        title="Are you sure you want to remove this patient?"
      />
    </div>
  );
};

export default PatientList;
