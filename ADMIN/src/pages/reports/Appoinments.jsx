import { Link } from "react-router-dom";
import CustomModal from "../../components/CustomModal";
import { useEffect, useState } from "react";
import { Modal, Table } from "antd";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleteBookings,
  GetAllBookings,
  GetAppinmentById,
  ResetState,
} from "../../features/report/reportSlice";
import { IoEyeOutline } from "react-icons/io5";
import { AiFillDelete } from "react-icons/ai";
import dayjs from "dayjs";
const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Doctor Name",
    dataIndex: "doctorname",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Speciality",
    dataIndex: "speciality",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Patient Name",
    dataIndex: "patientName",
    sorter: (a, b) => a.name.length - b.name.length,
  },

  {
    title: "Appointment Time",
    dataIndex: "appointment",
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
  },
];

const Appoinments = () => {
  const [open, setOpen] = useState(false);
  const [openModal, setopenModal] = useState(false);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [AppoinmentId, setAppoinmentId] = useState("");

  const hideModal = () => {
    setOpen(false);
  };

  const showModal = (e) => {
    setopenModal(true);
    setAppoinmentId(e);
  };
  const showDelModal = (e) => {
    setOpen(true);
    setAppoinmentId(e);
  };

  useEffect(() => {
    if (AppoinmentId) dispatch(GetAppinmentById(AppoinmentId));
  }, [AppoinmentId, dispatch]);

  const { SingleData } = useSelector((state) => state.report);

  useEffect(() => {
    dispatch(GetAllBookings());
  }, [dispatch]);

  const { BOOKINGS } = useSelector((state) => state.report);

  const deleteApponment = (e) => {
    dispatch(DeleteBookings(e));
    setTimeout(() => {
      dispatch(ResetState());
      dispatch(GetAllBookings());
      setOpen(false);
    }, 300);
  };
  console.log("SingleData", SingleData);
  const data1 = [];
  for (let i = 0; i < BOOKINGS?.length; i++) {
    data1.push({
      key: i + 1,
      doctorname: (
        <Link
          className="nav-link"
          to={`/admin/doctor-profile/${BOOKINGS[i]?.doctor?._id}`}
        >
          {BOOKINGS[i]?.doctor?.doctorName}
        </Link>
      ),
      speciality: BOOKINGS[i]?.category,
      patientName: BOOKINGS[i]?.name,
      appointment: (
        <>
          <button className="btn btn-sm ">
            {dayjs(BOOKINGS[i]?.date).format("DD-MM-YYYY")} At{" "}
            {BOOKINGS[i]?.time}
          </button>
        </>
      ),
      amount: (
        <>
          <button className="btn btn-sm ">{BOOKINGS[i]?.doctor?.price}</button>
        </>
      ),
      action: (
        <>
          <div className="d-flex">
            <button
              className="ms-3 fs-3 text-danger bg-transparent border-0"
              onClick={() => showModal(BOOKINGS[i]?._id)}
            >
              <IoEyeOutline />{" "}
            </button>
            <button
              onClick={() => showDelModal(BOOKINGS[i]._id)}
              className="ms-3 fs-3 text-danger bg-transparent border-0"
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
      {" "}
      <div className="mt-3">
        <div className="header d-flex mb-3 justify-content-between px-4">
          <h2 className="text-header">Apponments</h2>
          {/* <Link to={"/admin/InvoiceReport"} className="btn btn-primary mb-3">
            Add New Items
          </Link> */}
        </div>

        <div className="input-group mb-3 px-4  w-25 float-end ">
          <span className="input-group-text" id="basic-addon1">
            <FaSearch />
          </span>
          <input
            type="search"
            className="form-control"
            placeholder="Search Services"
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
            deleteApponment(AppoinmentId);
          }}
          title="Are you sure you want to delete ?"
        />
        <Modal
          open={openModal}
          onCancel={() => setopenModal(false)}
          onOk={() => {}}
          //   width={1200}
          // okText={AvailByDocId ? "Edit" : "Add"}
          okText={"Ok"}
          cancelText="Cancel"
        >
          <div className="m-3">
            <div className="card">
              <div className="card text-center">
                <div className="card-header">Appoinment Details</div>
                <div className="card-body d-flex flex-column justify-content-start ">
                  <p className="card-title d-flex justify-content-center">
                    <b>Doctor :</b>{" "}
                    <Link
                      className="nav-link mx-2"
                      to={`/admin/doctor-profile/${SingleData?.doctor?._id}`}
                    >
                      {SingleData?.doctor?.doctorName}{" "}
                    </Link>{" "}
                  </p>
                  <p className="card-text">
                    <b>Category : </b> {SingleData?.category}.
                  </p>
                  <p className="card-text">
                    <b>Name : </b> {SingleData?.name}.
                  </p>
                  <p className="card-text">
                    <b>Email : </b> {SingleData?.email}.
                  </p>

                  <p className="card-text">
                    <b>Amount : </b> {SingleData?.doctor?.price}.
                  </p>
                  <p className="card-text">
                    <b>Transaction id : </b> {SingleData?.transactionid}.
                  </p>
                </div>
                <div className="card-footer text-muted">
                  {SingleData?.date} At {SingleData?.time}
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Appoinments;
