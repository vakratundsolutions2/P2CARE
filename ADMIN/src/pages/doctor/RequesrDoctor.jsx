import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import CustomModal from "../../components/CustomModal";
import { useEffect, useState } from "react";
import { Table } from "antd";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  DeleteAtesTimonial,
  GetAllTestimonial,
  resetState,
} from "../../features/testimonial/testimonialSlice";
import { baseUrl } from "../../utils/baseUrl";
import { GetAllRequest } from "../../features/doctor/doctorSlice";
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
    title: "Action",
    dataIndex: "action",
  },
];

const RequesrDoctor = () => {
  const [open, setOpen] = useState(false);
  const [delId, setDelId] = useState("");
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  // const [newdoctors, setnewdoctors] = useState([]);
  const hideModal = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(GetAllRequest());
  }, []);

  const { newdoctors } = useSelector((state) => state.doctor);
  // console.log(TestimonialState);

  const deletetest = (e) => {
    dispatch(DeleteAtesTimonial(e));
    setTimeout(() => {
      dispatch(GetAllTestimonial());
      dispatch(resetState());
    }, 600);
    setOpen(false);
  };

  const showModal = (e) => {
    setOpen(true);
    setDelId(e);
  };
  const data1 = [];
  for (let i = 0; i < newdoctors?.length; i++) {
    data1.push({
      key: i + 1,
      name: newdoctors[i]?.doctorName,
      specialization: newdoctors[i]?.specialities,
      price: newdoctors[i]?.price,
      appointmentStatus: newdoctors[i]?.availabileforappointment ? (
        <div className="btn btn-success">Yes</div>
      ) : (
        <div className="btn btn-danger">No</div>
      ),

      image: (
        <>
          <img
            src={`${baseUrl}doctor/${newdoctors[i]?.image}`}
            alt={newdoctors[i]?.name}
            className="list-img"
          />
        </>
      ),
      action: (
        <>
          <Link
            className=" fs-3 text-danger"
            to={`/admin/testimonial/${newdoctors[i]._id}`}
          >
            <BiEdit />
          </Link>
          <button
            className="ms-3 fs-3 text-danger bg-transparent border-0"
            onClick={() => showModal(newdoctors[i]._id)}
          >
            <AiFillDelete />
          </button>
        </>
      ),
    });
  }

  return (
    <div className="mt-3">
      <div className="header mb-4 px-2">
        <h2 className="text-header"> Doctor registration request</h2>
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
          deletetest(delId);
        }}
        title="Are you sure you want to delete ?"
      />
    </div>
  );
};

export default RequesrDoctor;
