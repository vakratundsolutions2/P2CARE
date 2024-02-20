import { Modal, Switch, Table } from "antd";
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
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

import { baseUrl } from "../../utils/baseUrl";
import {
  addNewavailablity,
  getAAvailablity,
  resetStateAvailablity,
  updateAvailablity,
} from "../../features/availablity/availablitySlice";
import CheckableTag from "antd/es/tag/CheckableTag";
import { alltime } from "../../features/time/timeSlice";
import CustomInput from "../../components/CustomInput";
import { useFormik } from "formik";

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
const columns1 = [
  {
    title: "Day",
    dataIndex: "day",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Availability",
    dataIndex: "availability",
    sorter: (a, b) => a.name.length - b.name.length,
  },

  {
    title: "Booking Time",
    dataIndex: "bookingTime",
    sorter: (a, b) => a.name.length - b.name.length,
  },
];

const DoctorList = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [openAvail, setOpenAvail] = useState(false);
  const [search, setSearch] = useState("");
  const [delDoc, setdelDoc] = useState("");
  const [AvailDoc, setAvailDoc] = useState("");

  useEffect(() => {
    if (search) {
      dispatch(SearchDoctors(search));
    } else {
      dispatch(getAllDoctors());
    }
  }, [search]);

  useEffect(() => {
    dispatch(getAllDoctors());
    dispatch(alltime());

    if (AvailDoc !== undefined) dispatch(getAAvailablity(AvailDoc));
  }, [AvailDoc]);

  const [selectedTagsSun, setSelectedTagsSUN] = useState([]);
  const [selectedTagsMON, setSelectedTagsMON] = useState([]);
  const [selectedTagsTUE, setSelectedTagsTUE] = useState([]);
  const [selectedTagsWED, setSelectedTagsWED] = useState([]);
  const [selectedTagsTHU, setSelectedTagsTHU] = useState([]);
  const [selectedTagsFRI, setSelectedTagsFRI] = useState([]);
  const [selectedTagsSAT, setSelectedTagsSAT] = useState([]);

  const [Sunday, setSunday] = useState({
    available: false,
    day: "Sun",
    bookingtime: selectedTagsSun,
  });
  const [Monday, setMonday] = useState({
    available: false,
    day: "Mon",
    bookingtime: selectedTagsMON,
  });
  const [Tuesday, setTuesday] = useState({
    available: false,
    day: "Tue",
    bookingtime: selectedTagsTUE,
  });
  const [Wednesday, setWednesday] = useState({
    available: false,
    day: "Wed",
    bookingtime: selectedTagsWED,
  });
  const [Thursday, setThursday] = useState({
    available: false,
    day: "Thu",
    bookingtime: selectedTagsTHU,
  });
  const [Friday, setFriday] = useState({
    available: false,
    day: "Fri",
    bookingtime: selectedTagsFRI,
  });
  const [Saturday, setSaturday] = useState({
    available: false,
    day: "Sat",
    bookingtime: selectedTagsSAT,
  });

  const finalAvailable = {
    doctorid: AvailDoc,
    bookingavailabilityInformation: [
      Sunday,
      Monday,
      Tuesday,
      Wednesday,
      Thursday,
      Friday,
      Saturday,
    ],
  };

  const AllTime = useSelector((state) => state.time?.AllTimes);
  const AvailByDocId = useSelector(
    (state) => state.available?.DoctorAvailablity
  );
  console.log("AvailByDocId", AvailByDocId);

  const handleChangeSUN = (tag, checked) => {
    console.log(tag);
    console.log(checked);
    const nextSelectedTags = checked
      ? [...selectedTagsSun, tag]
      : selectedTagsSun?.filter((t) => t !== tag);

    setSelectedTagsSUN(nextSelectedTags);
  };
  const handleChangeMON = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedTagsMON, tag]
      : selectedTagsMON.filter((t) => t !== tag);

    setSelectedTagsMON(nextSelectedTags);
  };
  const handleChangeTUE = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedTagsTUE, tag]
      : selectedTagsTUE.filter((t) => t !== tag);

    setSelectedTagsTUE(nextSelectedTags);
  };
  const handleChangeWED = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedTagsWED, tag]
      : selectedTagsWED.filter((t) => t !== tag);

    setSelectedTagsWED(nextSelectedTags);
  };
  const handleChangeTHU = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedTagsTHU, tag]
      : selectedTagsTHU.filter((t) => t !== tag);

    setSelectedTagsTHU(nextSelectedTags);
  };
  const handleChangeFRI = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedTagsFRI, tag]
      : selectedTagsFRI.filter((t) => t !== tag);

    setSelectedTagsFRI(nextSelectedTags);
  };
  const handleChangeSAT = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedTagsSAT, tag]
      : selectedTagsSAT.filter((t) => t !== tag);

    setSelectedTagsSAT(nextSelectedTags);
  };

  useEffect(() => {
    if (AvailByDocId === null || AvailByDocId === undefined) {
      setSunday({
        available: false,
        day: "Sun",
        bookingtime: [],
      });
      setSelectedTagsSUN([]);

      setMonday({
        available: false,
        day: "Mon",
        bookingtime: [],
      });
      setSelectedTagsMON([]);

      setTuesday({
        available: false,
        day: "Tue",
        bookingtime: [],
      });
      setSelectedTagsTUE([]);

      setWednesday({
        available: false,
        day: "Wed",
        bookingtime: [],
      });
      setSelectedTagsWED([]);
      setThursday({
        available: false,
        day: "Thu",
        bookingtime: [],
      });
      setSelectedTagsTHU([]);

      setFriday({
        available: false,
        day: "Fri",
        bookingtime: [],
      });
      setSelectedTagsFRI([]);

      setSaturday({
        available: false,
        day: "Sat",
        bookingtime: [],
      });
      setSelectedTagsSAT([]);
    } else {
      setSunday(AvailByDocId?.bookingavailabilityInformation[0]);
      setSelectedTagsSUN(
        AvailByDocId?.bookingavailabilityInformation[0]?.bookingtime
      );

      setMonday(AvailByDocId?.bookingavailabilityInformation[1]);
      setSelectedTagsMON(
        AvailByDocId?.bookingavailabilityInformation[1]?.bookingtime
      );

      setTuesday(AvailByDocId?.bookingavailabilityInformation[2]);

      setSelectedTagsTUE(
        AvailByDocId?.bookingavailabilityInformation[2]?.bookingtime
      );
      setWednesday(AvailByDocId?.bookingavailabilityInformation[3]);

      setSelectedTagsWED(
        AvailByDocId?.bookingavailabilityInformation[3]?.bookingtime
      );
      setThursday(AvailByDocId?.bookingavailabilityInformation[4]);

      setSelectedTagsTHU(
        AvailByDocId?.bookingavailabilityInformation[4]?.bookingtime
      );
      setFriday(AvailByDocId?.bookingavailabilityInformation[5]);

      setSelectedTagsFRI(
        AvailByDocId?.bookingavailabilityInformation[5]?.bookingtime
      );
      setSaturday(AvailByDocId?.bookingavailabilityInformation[6]);

      setSelectedTagsSAT(
        AvailByDocId?.bookingavailabilityInformation[6]?.bookingtime
      );
    }
  });

  // console.log("sundsay", Sunday);
  // console.log("Monday", Monday);
  // console.log("Tuesday", Tuesday);
  // console.log("Wednesday", Wednesday);
  // console.log("Thursday", Thursday);
  // console.log("Friday", Friday);
  // console.log("saturday", Saturday);

  // console.log("finalAvailable", finalAvailable);

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

  const dataAvail = [
    {
      day: "Sunday",
      availability: (
        <>
          <Switch
            type="checkbox"
            value={Sunday?.available}
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            size="small"
            // value={avail}
            onChange={(e) =>
              setSunday({
                available: e,
                day: "Sun",
                bookingtime: selectedTagsSun,
              })
            }
          />
        </>
      ),
      bookingTime: (
        <>
          {AllTime?.map((time) => {
            return (
              <>
                <CheckableTag
                  className="p-2"
                  // key={time?._id}
                  value={Sunday?.bookingtime}
                  checked={selectedTagsSun?.includes(time?.Time)}
                  onChange={(checked) => handleChangeSUN(time?.Time, checked)}
                >
                  {time?.Time}
                </CheckableTag>
              </>
            );
          })}
        </>
      ),
    },
    {
      day: "Monday",
      availability: (
        <>
          <Switch
            type="checkbox"
            value={Monday?.available}
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            size="small"
            onChange={(e) =>
              setMonday({
                available: e,
                day: "Mon",
                bookingtime: selectedTagsMON,
              })
            }
          />
        </>
      ),
      bookingTime: (
        <>
          {AllTime?.map((time) => {
            return (
              <>
                <CheckableTag
                  className="p-2"
                  // key={time?._id}
                  checked={selectedTagsMON?.includes(time?.Time)}
                  onChange={(checked) => handleChangeMON(time?.Time, checked)}
                >
                  {time?.Time}
                </CheckableTag>
              </>
            );
          })}
        </>
      ),
    },
    {
      day: "Tuesday",
      availability: (
        <>
          <Switch
            type="checkbox"
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            size="small"
            value={Tuesday?.available}
            onChange={(e) =>
              setTuesday({
                available: e,
                day: "Tue",
                bookingtime: selectedTagsTUE,
              })
            }
          />
        </>
      ),
      bookingTime: (
        <>
          {AllTime?.map((time) => {
            return (
              <>
                <CheckableTag
                  className="p-2"
                  // key={time?._id}
                  checked={selectedTagsTUE?.includes(time?.Time)}
                  onChange={(checked) => handleChangeTUE(time?.Time, checked)}
                >
                  {time?.Time}
                </CheckableTag>
              </>
            );
          })}
        </>
      ),
    },
    {
      day: "Wednesday",
      availability: (
        <>
          <Switch
            type="checkbox"
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            size="small"
            value={Wednesday?.available}
            onChange={(e) =>
              setWednesday({
                available: e,
                day: "Wed",
                bookingtime: selectedTagsWED,
              })
            }
          />
        </>
      ),
      bookingTime: (
        <>
          {AllTime?.map((time) => {
            return (
              <>
                <CheckableTag
                  className="p-2"
                  // key={time?._id}
                  checked={selectedTagsWED?.includes(time?.Time)}
                  onChange={(checked) => handleChangeWED(time?.Time, checked)}
                >
                  {time?.Time}
                </CheckableTag>
              </>
            );
          })}
        </>
      ),
    },
    {
      day: "Thursday",
      availability: (
        <>
          <Switch
            type="checkbox"
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            size="small"
            value={Thursday?.available}
            onChange={(e) =>
              setThursday({
                available: e,
                day: "Thu",
                bookingtime: selectedTagsTHU,
              })
            }
          />
        </>
      ),
      bookingTime: (
        <>
          {AllTime?.map((time) => {
            return (
              <>
                <CheckableTag
                  className="p-2"
                  // key={time?._id}
                  checked={selectedTagsTHU?.includes(time?.Time)}
                  onChange={(checked) => handleChangeTHU(time?.Time, checked)}
                >
                  {time?.Time}
                </CheckableTag>
              </>
            );
          })}
        </>
      ),
    },
    {
      day: "Friday",
      availability: (
        <>
          <Switch
            type="checkbox"
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            size="small"
            value={Friday?.available}
            onChange={(e) =>
              setFriday({
                available: e,
                day: "Fri",
                bookingtime: selectedTagsFRI,
              })
            }
          />
        </>
      ),
      bookingTime: (
        <>
          {AllTime?.map((time) => {
            return (
              <>
                <CheckableTag
                  className="p-2"
                  checked={selectedTagsFRI?.includes(time?.Time)}
                  onChange={(checked) => handleChangeFRI(time?.Time, checked)}
                >
                  {time?.Time}
                </CheckableTag>
              </>
            );
          })}
        </>
      ),
    },
    {
      day: "Sat",
      availability: (
        <>
          <Switch
            type="checkbox"
            value={Saturday?.available}
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            size="small"
            // value={avail}
            onChange={(e) =>
              setSaturday({
                available: e,
                day: "Sat",
                bookingtime: selectedTagsSAT,
              })
            }
          />
        </>
      ),
      bookingTime: (
        <>
          {AllTime?.map((time) => {
            return (
              <>
                <CheckableTag
                  defaultValue={Saturday?.bookingtime}
                  className="p-2"
                  // key={time?._id}
                  checked={selectedTagsSAT?.includes(time?.Time)}
                  onChange={(checked) => handleChangeSAT(time?.Time, checked)}
                >
                  {time?.Time}
                </CheckableTag>
              </>
            );
          })}
        </>
      ),
    },
  ];
  // ----------------------------------------------------------------------------------------------------------------
  const data1 = [];
  for (let i = 0; i < searchResult?.length; i++) {
    data1.push({
      key: i + 1,

      specialization: searchResult[i]?.specialities,
      name: (
        <>
          <Link
            className="nav-link"
            to={`/admin/doctor-profile/${searchResult[i]?._id}`}
          >
            {searchResult[i]?.doctorName}
          </Link>
        </>
      ),
      image: (
        <>
          <img
            src={`${baseUrl}doctor/${searchResult[i]?.image}`}
            alt={searchResult[i]?.doctorName}
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
  const handleSubmit = (e) => {
    if (AvailByDocId === null) {
      dispatch(addNewavailablity(e));
      setTimeout(() => {
        dispatch(resetStateAvailablity());
        dispatch(getAllDoctors());
      }, 300);
    } else {
      dispatch(updateAvailablity({ id: AvailDoc, formData: e }));
      setTimeout(() => {
        dispatch(resetStateAvailablity());
        dispatch(getAllDoctors());
      }, 300);
    }
    setOpenAvail(false);
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
          handleSubmit(finalAvailable);
        }}
        width={1000}
        // title="Are you sure you want to remove this doctor ?"
        okText={AvailByDocId ? "Edit" : "Add"}
        cancelText="Cancel"
      >
        <form className="m-4">
          <Table columns={columns1} dataSource={dataAvail} />
        </form>
      </Modal>
    </div>
  );
};

export default DoctorList;
