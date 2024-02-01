import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Allusers,
  DeleteUSER,
  SearchUser,
  resetState,
} from "../../features/auth/authSlice";
import CustomModal from "../../components/CustomModal";
import { Modal, Switch, Table } from "antd";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { baseUrl } from "../../utils/baseUrl";
import CustomInput from "../../components/CustomInput";

import { useFormik } from "formik";

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },

  {
    title: "Role",
    dataIndex: "role",
  },

  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Username",
    dataIndex: "username",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Email",
    dataIndex: "email",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Mobile",
    dataIndex: "mobile",
    sorter: (a, b) => a.name.length - b.name.length,
  },
//   {
//     title: "Blocked",
//     dataIndex: "blocked",
//     sorter: (a, b) => a.name.length - b.name.length,
//   },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const Users = () => {
  const [opendel, setOpendel] = useState(false);
  const [ID, setID] = useState("");
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Allusers());
  }, []);


useEffect(() => {
  if(search){
    dispatch(SearchUser(search));
  }
  else{
    dispatch(Allusers());

  }
}, [search,dispatch])


  const showModal = (e) => {
    setOpendel(true);
    setID(e);
  };
  
  const hideModal = () => {
    setOpendel(false);
  };
  const { users } = useSelector((state) => state.auth);

  


  const deleteuser = (e) => {
    dispatch(DeleteUSER(e));
    setTimeout(() => {
      dispatch(resetState());
      dispatch(Allusers());
      setOpendel(false);
    }, 300);
  };

  const data1 = [];
  for (let i = 0; i < users?.length; i++) {
    data1.push({
      key: i + 1,

      role: users[i]?.Role,
      name: users[i]?.Name,
      username: users[i]?.Username,
      email: users[i]?.Email,
      mobile: users[i]?.phoneNumber,
    //   blocked: users[i]?.isBlocked,

      action: (
        <>
          <Link
            to={`/admin/users/${users[i]._id}`}
            type="button "
            className=" fs-3 text-danger"
          >
            <BiEdit />
          </Link>
          <button
            type="button"
            className="ms-3 fs-3 text-danger bg-transparent border-0"
            onClick={() => showModal(users[i]._id)}
          >
            <AiFillDelete />
          </button>
        </>
      ),
    });
  }

  
  return (
    <div className="mt-3">
      <div className="header d-flex mb-3 justify-content-between px-4">
        <h2 className="text-header">Manage Users</h2>
        <Link to={"/admin/testimonial"} className="btn btn-primary mb-3">
          Add New Items
        </Link>
      </div>

      <div className="input-group mb-3 px-4  w-25 float-end ">
        <span className="input-group-text" id="basic-addon1">
          <FaSearch />
        </span>
        <input
          type="search"
          className="form-control"
          placeholder="Sesrch Services"
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
        open={opendel}
        performAction={() => {
          deleteuser(ID);
        }}
        title="Are you sure you want to delete ?"
      />
      
    </div>
  );
};

export default Users;
