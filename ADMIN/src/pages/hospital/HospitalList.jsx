import { Link, useNavigate } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import CustomModal from "../../components/CustomModal";
import { useEffect, useState } from "react";
import { Modal, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";

import {
  RemoveAssign,
  SearchHospital,
  deleteAHospital,
  getAHospital,
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
const columns1 = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Hospital",
    dataIndex: "hospital",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Category",
    dataIndex: "category",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Doctor",
    dataIndex: "doctor",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Amount",
    dataIndex: "amount",
    sorter: (a, b) => a.name.length - b.name.length,
  },

  {
    title: "Action",
    dataIndex: "action",
    sorter: (a, b) => a.name.length - b.name.length,
  },
];

const HospitalList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [delId, setdelId] = useState("");
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [HospitalID, setHospitalID] = useState("");

  const [openAsign, setopenAsign] = useState(false);
  useEffect(() => {
    dispatch(getAllHospitals());
    dispatch(resetState());
    if (HospitalID !== undefined || HospitalID !== null) {
      dispatch(getAHospital(HospitalID));
    }
  }, [dispatch, HospitalID]);
  useEffect(() => {
    if (search) {
      dispatch(SearchHospital(search));
    } else {
      dispatch(getAllHospitals());
    }
  }, [search, delId, dispatch]);

  const { SingleData } = useSelector((state) => state.hospital);
  // console.log(SingleData);
  const AllAssign = SingleData?.assign;

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

  const showAsignModal = (e) => {
    setopenAsign(true);
    console.log(e);
    setHospitalID(e);
  };

  const handleDelete = (data) => {
    dispatch(RemoveAssign({ HospitalID, data }));
    dispatch(resetState());
    setTimeout(() => {
      dispatch(getAHospital(HospitalID));
      setopenAsign(false);
    }, 300);
  };

  const dataAssign = [];
  for (let i = 0; i < AllAssign?.length; i++) {
    console.log(AllAssign[i]);
    dataAssign.push({
      key: i + 1,
      hospital: (
        <>
          <div className="form-group ">
            <select
              className="form-select p-2   mb-2"
              disabled
              // style={{ width: "15vw" }}
            >
              <option value={SingleData?.hospitalname}>
                {SingleData?.hospitalname}
              </option>
            </select>
          </div>
        </>
      ),
      category: (
        <>
          <div className="form-group ">
            <select
              className="form-select p-2   mb-2"
              disabled
              // style={{ width: "15vw" }}
            >
              {" "}
              <option value={AllAssign[i]?.category}>
                {AllAssign[i]?.category}
              </option>
            </select>
          </div>
        </>
      ),

      doctor: (
        <>
          <div className="form-group">
            <select
              className="form-select p-2  mb-2"
              disabled
              // style={{ width: "12vw" }}
            >
              <option value={AllAssign[i]?.doctor}>
                {AllAssign[i]?.doctor?.doctorName}
              </option>
            </select>
          </div>
        </>
      ),

      amount: (
        <>
          {" "}
          <div className="form-group">
            <select
              className="form-select p-2  mb-2"
              disabled
              // style={{ width: "12vw" }}
            >
              <option value={AllAssign[i]?.amount}>
                {AllAssign[i]?.amount}
              </option>
            </select>
          </div>
        </>
      ),
      action: (
        <>
          <div className="form-group d-flex align-items-center gap-2">
            <div className="text-danger">
              <Link
                type="button"
                to={`/admin/assign-doctor/${HospitalID}`}
                className="btn  btn-outline-primary"
              >
                EDIT
              </Link>
            </div>
            <div className="">
              <button
                type="button"
                className="btn  btn-outline-danger"
                onClick={() => handleDelete(AllAssign[i]?._id)}
              >
                DELETE
              </button>
            </div>
          </div>
        </>
      ),
    });
  }

  const searchResult = useSelector((state) => state.hospital.hospitals);
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
          <button
            className="ms-3  btn-primary btn  "
            onClick={() => showAsignModal(searchResult[i]?._id)}
          >
            Assign
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
        <Modal
          open={openAsign}
          onCancel={() => setopenAsign(false)}
          onOk={() => {
            navigate(`/admin/assign-doctor/${HospitalID}`);
          }}
          width={1200}
          // okText={AvailByDocId ? "Edit" : "Add"}
          okText={"Add"}
          cancelText="Cancel"
        >
          <form className="m-4">
            <Table columns={columns1} dataSource={dataAssign} />
          </form>
        </Modal>
      </div>
    </>
  );
};

export default HospitalList;
