import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import CustomModal from "../../components/CustomModal";
import { useEffect, useState } from "react";
import { Table } from "antd";
import { FaSearch } from "react-icons/fa";import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { DeleteAtesTimonial, GetAllTestimonial, resetState } from "../../features/testimonial/testimonialSlice";
import { baseUrl } from "../../utils/baseUrl";
const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Image",
    dataIndex: "image",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Designation",
    dataIndex: "designation",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  // {
  //   title: "Description",
  //   dataIndex: "description",
  //   sorter: (a, b) => a.name.length - b.name.length,
  // },
  {
    title: "Action",
    dataIndex: "action",
  },
];


const TestimonialList = () => {
const [open, setOpen] = useState(false);
const [delId, setDelId] = useState("");
const dispatch = useDispatch();
const [search, setSearch] = useState("");
const [searchResult, setSearchResult] = useState([]);
const hideModal = () => {
  setOpen(false);
}


  useEffect(() => {
   dispatch(GetAllTestimonial());
    
    
  }, [])
  

  useEffect(() => {
    if (search) {
      axios
        .get(`${baseUrl}testimonial/searchtestimonial/${search}`)
        .then((e) => setSearchResult(e.data?.data));
    } else {
      axios
        .get(`${baseUrl}testimonial/alltestimonial`)
        .then((e) => setSearchResult(e.data?.data));
    }
  }, [search ,delId]);

  const TestimonialState = useSelector((state)=>state.testimonial?.AllTestimonials)
  // console.log(TestimonialState);

  const deletetest =(e)=>{
    dispatch(DeleteAtesTimonial(e));
 setTimeout(() => {
   dispatch(GetAllTestimonial());
   dispatch(resetState());
 }, 600);
 setOpen(false);
  }

    const showModal = (e) => {
      setOpen(true);
      setDelId(e);
    };
  const data1 = [];
  for (let i = 0; i < searchResult?.length; i++) {
    data1.push({
      key: i + 1,
      name: searchResult[i]?.name,
      designation: searchResult[i]?.designation,
      
      image: (
        <>
          <img
            src={`${baseUrl}testimonial/${searchResult[i]?.image}`}
            alt={searchResult[i]?.name}
            className="list-img"
          />
        </>
      ),
      action: (
        <>
          <Link
            className=" fs-3 text-danger"
            to={`/admin/testimonial/${searchResult[i]._id}`}
          >
            <BiEdit />
          </Link>
          <button
            className="ms-3 fs-3 text-danger bg-transparent border-0"
            onClick={() => showModal(searchResult[i]._id)}
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
        <h2 className="text-header">Testimonial Items</h2>
        <Link to={ '/admin/testimonial'}className="btn btn-primary mb-3">Add New Items</Link>
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
        open={open}
          performAction={() => {
            deletetest(delId);
          }}
        title="Are you sure you want to delete ?"
      />
    </div>
  );
};

export default TestimonialList;
