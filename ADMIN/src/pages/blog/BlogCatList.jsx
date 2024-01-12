import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import CustomModal from "../../components/CustomModal";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { DeleteBlogCategory, GetAllBlogCategory } from "../../features/blogCategory/BlogCategorySlice";

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
    title: "Status",
    dataIndex: "status",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const BlogCatList = () => {
  const [open, setOpen] = useState(false);
  const [delCatId, setDelCatId] = useState("");
  const BlogCategoryState = useSelector((state)=>state.blogCategory.BlogCategories)
  console.log(BlogCategoryState);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetAllBlogCategory());
  }, [])
  
  const hideModal = () => {
    setOpen(false);
  };


  const deleteBCategory = (e) => {
    dispatch(DeleteBlogCategory(e));
    setTimeout(() => {
      dispatch(GetAllBlogCategory());
    }, 100);
    setOpen(false);
  };

  const showModal = (e) => {
    setOpen(true);
    setDelCatId(e);
  };
  const data1 = [];
  for (let i = 0; i < BlogCategoryState?.length; i++) {
    data1.push({
      key: i + 1,
      name: BlogCategoryState[i]?.name,
      status: (
        <>
          <div className="btn btn-success">{BlogCategoryState[i]?.status}</div>
        </>
      ),

      username: "raam",
      action: (
        <>
          <Link
            to={`/admin/blog-cat/${BlogCategoryState[i]?._id}`}
            className=" fs-3 text-danger"
          >
            <BiEdit />
          </Link>
          <button
            className="ms-2 fs-3 text-danger bg-transparent border-0"
            onClick={() => showModal(BlogCategoryState[i]?._id)}
          >
            <AiFillDelete />
          </button>
        </>
      ),
    });
  }

  const formik = useFormik({
    initialValues: {},
    // validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="my-5  ">
      <div className="header  d-flex justify-content-between my-4 mx-2">
        <h2 className="text-header">All Blog Categories</h2>
        <Link className="btn btn-primary " to={"/admin/blog-cat"}>
          Add Blog Category
        </Link>
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
          deleteBCategory(delCatId);
        }}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        title="Are you sure you want to delete this blog category?"
      />
    </div>
  );
};

export default BlogCatList;
