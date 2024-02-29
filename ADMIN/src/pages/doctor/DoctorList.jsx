import { Modal, Table } from "antd";
import { useEffect, useState } from "react";
import { AiFillDelete, AiOutlineFileSearch } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";
import CustomModal from "../../components/CustomModal";
import { useDispatch, useSelector } from "react-redux";
import {
  AddManyDoctors,
  SearchDoctors,
  deleteADoctor,
  getAllDoctors,
  resetState,
} from "../../features/doctor/doctorSlice";

import { baseUrl } from "../../utils/baseUrl";
import {
  getAAvailablity,
  resetStateAvailablity,
  updateAvailablity,
} from "../../features/availablity/availablitySlice";
import CustomInput from "../../components/CustomInput";
import { Field, FieldArray, Formik, useFormik } from "formik";
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
    title: "Specialization",
    dataIndex: "specialization",
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
  const [openAvail, setOpenAvail] = useState(false);
  const [openSlot, setOpenSlot] = useState(false);
  const [search, setSearch] = useState("");
  const [delDoc, setdelDoc] = useState("");
  const [AvailDoc, setAvailDoc] = useState("");
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [availableSchedule, setavailableSchedule] = useState([]);
  const [finalSchedule, setfinalSchedule] = useState([]);
  const [DAY, setDAY] = useState("");

  useEffect(() => {
    if (search) {
      dispatch(SearchDoctors(search));
    } else {
      dispatch(getAllDoctors());
    }
  }, [search]);

  useEffect(() => {
    dispatch(getAllDoctors());
    if (AvailDoc) {
      dispatch(getAAvailablity(AvailDoc));
    }
  }, [AvailDoc]);

  const { DoctorAvailablity, DoctorData } = useSelector(
    (state) => state.available
  );
  const searchResult = useSelector((state) => state.doctor.doctors);

  const showModal = (e) => {
    setOpen(true);
    setdelDoc(e);
  };
  const showAvailModal = (e) => {
    setOpenAvail(true);
    setAvailDoc(e);
  };

  const hideModal = () => {
    setOpen(false);
  };

  // ----------------------------------------------------------------------------------------------------------------
  const data1 = [];
  for (let i = 0; i < searchResult?.length; i++) {
    data1.push({
      key: i + 1,

      specialization: searchResult[i]?.specialities,
      name: searchResult[i]?.doctorName,

      image: (
        <>
          <img
            src={`${baseUrl}doctor/${searchResult[i]?.image}`}
            alt={searchResult[i]?.doctorName}
            className="table-image"
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
          <button
            className="ms-3  btn-primary btn  "
            onClick={() => showAvailModal(searchResult[i]?._id)}
          >
            Availablity
          </button>
        </>
      ),
    });
  }
  const deleteDoctor = (e) => {
    dispatch(deleteADoctor(e));
    dispatch(resetState());
    setOpen(false);
    setTimeout(() => {
      dispatch(getAllDoctors());
    }, 400);
  };

  const formik = useFormik({
    initialValues: {
      file: "",
    },
    onSubmit: (values) => {
      const { file } = values;
      const formData = new FormData();
      formData.append("file", file);
      console.log(file);
      dispatch(AddManyDoctors(formData)).then(() => {
        setTimeout(() => {
          dispatch(getAllDoctors());
        }, 600);
      });
    },
  });

  useEffect(() => {
    if (DAY) {
      axios
        .get(`${baseUrl}available/searchdoctorday/${AvailDoc}?day=${DAY}`)
        .then((res) => {
          setavailableSchedule(
            res.data.responseData.bookingavailabilityInformation[0]?.bookingtime
          );
          setfinalSchedule(
            res.data.responseData.bookingavailabilityInformation[0]
          );
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [DAY, AvailDoc]);

  const handlePOS = (e, i) => {
    setDAY(e);
    console.log(i);
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

      <div className="input-group mb-3  w-50     ">
        <form
          onSubmit={formik.handleSubmit}
          className="d-flex align-items-center float-end"
        >
          <CustomInput
            type="file"
            label="Please enter Exel or CSV "
            accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
            name="file"
            id="formFile"
            onChng={(e) => formik.setFieldValue("file", e.target.files[0])}
          />

          <div className="p-3  ">
            <button type="submit" className="btn btn-primary ">
              Add Doctors
            </button>
          </div>
        </form>
      </div>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          deleteDoctor(delDoc);
        }}
        title="Are you sure you want to remove this doctor ?"
      />
      <Modal
        open={openAvail}
        onCancel={() => setOpenAvail(false)}
        onOk={() => {
          setOpenAvail(false);
        }}
        width={1000}
        okText={"Ok"}
        cancelText="Cancel"
      >
        <form className="m-4">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title fs-5 ">
                  Personal Booking Availablity Information for DR.{" "}
                  {DoctorData?.doctorName}
                </h4>
              </div>
              <div className="card-body">
                <ul className="nav nav-tabs nav-tabs-solid nav-tabs-rounded nav-justified">
                  {weekday?.map((el, i) => {
                    return (
                      <>
                        <li
                          className="nav-item"
                          key={i}
                          onClick={() => {
                            handlePOS(el, i);
                          }}
                        >
                          <a className="nav-link  " data-bs-toggle="tab">
                            {el}
                          </a>
                        </li>
                      </>
                    );
                  })}
                </ul>

                <div className="d-flex p-4 my-3  gap-2">
                  {availableSchedule?.length === 0 ||
                  availableSchedule === undefined ? (
                    <>
                      <div className="text-center w-100">
                        No slots available
                      </div>
                    </>
                  ) : (
                    <>
                      {availableSchedule?.map((el, i) => {
                        return (
                          <>
                            <button
                              className="btn btn-secondary btn-sm"
                              type="button"
                              key={i}
                            >
                              {el}
                            </button>
                          </>
                        );
                      })}
                    </>
                  )}
                </div>
                <button
                  className="btn btn-sm btn-primary"
                  type="button"
                  onClick={() => setOpenSlot(true)}
                >
                  Add slots
                </button>
              </div>
              <Modal
                open={openSlot}
                onCancel={() => setOpenSlot(false)}
                onOk={() => {
                  setOpenSlot(false);
                }}
                title={`DR. ${DoctorData?.doctorName}'s  available slots `}
                width={500}
                okText={"Ok"}
                cancelText="Cancel"
              >
                {" "}
                <Formik
                  enableReinitialize={true}
                  initialValues={{
                    bookingtime: availableSchedule,
                    day: DAY,
                  }}
                  onSubmit={(values) => {
                    const { bookingtime, day } = values;
                    const data = {
                      doctorid: AvailDoc,
                      bookingavailabilityInformation: [
                        {
                          available: true,
                          day: day,
                          bookingtime: JSON.stringify(bookingtime),
                        },
                      ],
                    };

                    dispatch(
                      updateAvailablity({ id: AvailDoc, formData: data })
                    );
                    setTimeout(() => {
                      dispatch(resetStateAvailablity());
                      dispatch(getAllDoctors());
                      setOpenSlot(false);
                    }, 300);

                    setTimeout(() => {
                      setOpenAvail(false);
                    }, 500);
                  }}
                >
                  {(formik) => (
                    <>
                      <form onSubmit={formik.handleSubmit} className="mb-4 ">
                        <div
                          className=" justify-content-center rounded p-4 pb-5 mb-1 m-4 "
                          style={{ background: " rgba(0, 0, 0, 0.1)" }}
                        >
                          <div className="my-3">
                            {" "}
                            Availablity information for{" "}
                            {formik.values.day + "day"}{" "}
                          </div>
                          <FieldArray
                            name="bookingtime"
                            render={(arrayHelpers) => {
                              return (
                                <>
                                  <div className="row">
                                    {formik.values.bookingtime?.map((e, i) => {
                                      return (
                                        <>
                                          <div key={i}>
                                            <div
                                              className="float-end p-1"
                                              key={i}
                                            >
                                              <button
                                                type="button"
                                                className="btn btn-danger btn-sm"
                                                onClick={() =>
                                                  arrayHelpers.remove(i)
                                                }
                                              >
                                                X
                                              </button>
                                            </div>

                                            <div className="form-group  ">
                                              <Field
                                                type="time"
                                                ampm={true}
                                                placeholder={`Slot-${i + 1}`}
                                                className="form-control  mb-2"
                                                format="h:mm a"
                                                style={{ width: "85%" }}
                                                name={`bookingtime.${i}`}
                                              />
                                            </div>
                                          </div>
                                        </>
                                      );
                                    })}
                                  </div>
                                  <div className="form-group  float-end">
                                    <button
                                      className="btn btn-primary btn-sm"
                                      type="button"
                                      onClick={() =>
                                        arrayHelpers.insert(
                                          formik.values.bookingtime?.length + 1,
                                          []
                                        )
                                      }
                                    >
                                      +
                                    </button>
                                  </div>
                                </>
                              );
                            }}
                          />
                          <div className="error"></div>
                        </div>
                        <div className="form-group p-4">
                          <button type="submit" className="btn btn-primary ">
                            {" "}
                            Submit
                          </button>
                        </div>
                      </form>
                    </>
                  )}
                </Formik>
              </Modal>
            </div>
          </div>{" "}
        </form>
      </Modal>
    </div>
  );
};

export default DoctorList;
