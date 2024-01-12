import { Link } from "react-router-dom";
import { AiFillDelete, AiOutlineFileSearch } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import CustomModal from "../../components/CustomModal";
import { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { DeleteABlog, DeleteAllBlog, GetAllBlogs, resetState } from "../../features/blog/blogSlice";
import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Title",
    dataIndex: "title",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Image",
    dataIndex: "Image",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Category",
    dataIndex: "category",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Author",
    dataIndex: "author",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Date Created",
    dataIndex: "dateCreate",
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

const BlogList = () => {
  const [open, setOpen] = useState(false);
  const [delId, setDelId] = useState("");
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const hideModal = () => {
    setOpen(false);
  };

  const blogState = useSelector((state) => state.blog?.AllBlogs);

  useEffect(() => {
    dispatch(GetAllBlogs());
    dispatch(resetState());
  }, []);

// console.log(search);

useEffect(() => {
  if (search) {
    axios
    .get(`http://localhost:3001/blog/searchblog/${search}`)
    .then((e) => setSearchResult(e.data?.data));
     } else {
       axios
         .get(`http://localhost:3001/blog/allblog`)
         .then((e) => setSearchResult(e.data?.data));
     }
  
     
    }, [search])
    console.log(searchResult);
  

  const dBlog = (e) => {
    dispatch(DeleteABlog(e));
    setTimeout(() => {
      dispatch(GetAllBlogs());
      dispatch(resetState());
    }, 600);
    setOpen(false);
  };
const handeleDelete = () => {
  dispatch(DeleteAllBlog());
  setTimeout(() => {
    dispatch(GetAllBlogs());
    dispatch(resetState());
  }, 600);
  setOpen(false);
};
  const showModal = (e) => {
    setOpen(true);
    setDelId(e);
  };
  console.log(blogState);
  const data1 = [];
  for (let i = 0; i < searchResult?.length; i++) {
    data1.push({
      key: i + 1,
      title: searchResult ? searchResult[i].title : blogState[i]?.title,
      Image: (
        <>
          <img
            src={`${baseUrl}blog/${searchResult[i]?.blogimage}`}
            alt={searchResult[i]?.Name}
            className="list-img"
          />
        </>
      ),
      category: searchResult
        ? searchResult[i].category
        : blogState[i]?.category,
      author: searchResult ? searchResult[i].author : blogState[i]?.author,
      status: (
        <>
          <div className="btn btn-sm btn-primary uppercase">
            {searchResult ? searchResult[i]?.status : blogState[i]?.status}
          </div>
        </>
      ),
      action: (
        <>
          <Link
            to={`/admin/blog/${
              searchResult ? searchResult[i]?._id : blogState[i]._id
            }`}
            className=" fs-3 text-danger"
          >
            <BiEdit />
          </Link>
          <button
            className="ms-2 fs-3 text-danger bg-transparent border-0"
            onClick={() =>
              showModal(searchResult ? searchResult[i]._id : blogState[i]._id)
            }
          >
            <AiFillDelete />
          </button>
        </>
      ),
    });
  }


  
  

  return (
    <div className="mt-3">
      <div className="header d-flex mb-3 justify-content-between">
        <h2 className="text-header"> All Blog Items</h2>

        <Link to="/admin/blog" className="btn btn-primary mb-3">
          Add New Blog
        </Link>
      </div>

      <div className="input-group mb-3 px-4  w-25 float-end ">
        <span className="input-group-text" id="basic-addon1">
          <AiOutlineFileSearch />
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

      <div className="mb-3">
        <Table
          className="table table-responsive mb-2"
          columns={columns}
          dataSource={data1}
        />
        {blogState?.length > 0 ? (
          <>
            <button onClick={handeleDelete} className="btn btn-danger mb-3">
              Delete All Blogs
            </button>
          </>
        ) : (
          ""
        )}
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          dBlog(delId);
        }}
        title="Are you sure you want to delete ?"
      />
    </div>
  );
};

export default BlogList;
