

import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import CustomModal from "../../components/CustomModal";
import { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { alltime, deletetime, resetState } from "../../features/time/timeSlice";

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Time",
    dataIndex: "time",
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

const BookDoctorList = () => {
  useEffect(() => {
    dispatch(alltime());
    dispatch(resetState());
  }, []);
  const timeState = useSelector((state) => state.time.AllTimes);

  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [delId, setdelId] = useState("");

  const deleteBTime = (e) => {
    dispatch(deletetime(e));
    setTimeout(() => {
      dispatch(alltime());
    }, 100);
    setOpen(false);
  };
  const hideModal = () => {
    setOpen(false);
  };

  const data1 = [];
  for (let i = 0; i < timeState?.length; i++) {
    data1.push({
      key: i + 1,
      time: timeState[i].Time,

      status: (
        <>
          <span className="btn btn-outline-primary uppercase">{timeState[i]?.status}</span>
        </>
      ),
      action: (
        <>
          <Link
            className=" fs-3 text-danger"
            to={`/admin/doctor-booking/${timeState[i]?._id}`}
          >
            <BiEdit />
          </Link>
          <button
            onClick={() => showModal(timeState[i]._id)}
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
    <div className="mt-3">
      <div className="header d-flex mb-3 justify-content-between">
        <h2 className="text-header">Doctor&apos;s Bookings</h2>
        <Link to={`/admin/doctor-booking`} className="btn btn-primary mb-3">
          Add Bookings 
        </Link>
      </div>
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
      <div
        className="header d-inline-flex mb-3"
        style={{ display: "inline-block" }}
      >
        <h6 className="text-responsive mt-2">Show</h6>
        {/* <div className="my-3"> */}
        <form className="d-flex mb-2" role="search">
          <h6 className="form-label mt-2" style={{ marginLeft: "55rem" }}>
            Search:
          </h6>
          <input
            className="form-control"
            style={{ marginLeft: "5px" }}
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
        {/* </div> */}
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
          deleteBTime(delId);
        }}
        title="Are you sure you want to delete ?"
      />
    </div>
  );
};

export default BookDoctorList;
