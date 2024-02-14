import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CustomInput from "../../components/CustomInput";
import { Table } from "antd";
import {
  DeleteFAQ,
  GetAllFAQ,
  ResetState,
} from "../../features/content/ContentSlice";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import CustomModal from "../../components/CustomModal";

dayjs.extend(relativeTime);
const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Questions",
    dataIndex: "Questions",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Answers",
    dataIndex: "Answers",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Date",
    dataIndex: "Date",
    sorter: (a, b) => a.name.length - b.name.length,
  },

  {
    title: "Action",
    dataIndex: "action",
  },
];

const Faq = () => {
  const [open, setOpen] = useState(false);
  const [delId, setDelId] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllFAQ());
  }, []);

  const { FAQList } = useSelector((state) => state.content);
  const deletetest = (e) => {
    dispatch(DeleteFAQ(e));
    setTimeout(() => {
      dispatch(GetAllFAQ());
      dispatch(ResetState());
    }, 600);
    setOpen(false);
  };

  const showModal = (e) => {
    setOpen(true);
    setDelId(e);
  };
  // const formik = useFormik({
  //   enableReinitialize: true,

  //   initialValues: {
  //     email: contact?.email || "",
  //     phone: contact?.phone || "",
  //     address: contact?.address || "",
  //     map: contact?.map || "",
  //   },
  //   // validationSchema: schema,

  //   onSubmit: (values) => {
  //     console.log(values);
  //   },
  // });

  const data1 = [];
  for (let i = 0; i < FAQList?.length; i++) {
    data1.push({
      key: i + 1,
      Questions:
        FAQList[i].question?.length < 20
          ? FAQList[i].question
          : FAQList[i].question?.slice(0, 15) + "...",

      Answers:
        FAQList[i].answer?.length < 20
          ? FAQList[i].answer
          : FAQList[i].answer?.slice(0, 15) + "...",
      Date: dayjs(FAQList[i].date).format("DD-MM-YYYY"),
      action: (
        <>
          <Link
            className=" fs-3 text-danger"
            to={`/admin/faq/${FAQList[i]._id}`}
          >
            <BiEdit />
          </Link>
          <button
            className="ms-3 fs-3 text-danger bg-transparent border-0"
            onClick={() => showModal(FAQList[i]._id)}
          >
            <AiFillDelete />
          </button>
        </>
      ),
    });
  }

  return (
    <>
      <div className="header d-flex mb-3 justify-content-between px-4">
        <h2 className="text-header">Faq Items</h2>
        <Link to={"/admin/faq"} className="btn btn-primary mb-3">
          Add New Items
        </Link>
      </div>

      <div>
        <Table
          className="table table-responsive"
          columns={columns}
          dataSource={data1}
        />
        <CustomModal
          hideModal={() => setOpen(false)}
          open={open}
          performAction={() => {
            deletetest(delId);
          }}
          title="Are you sure you want to delete ?"
        />
      </div>
    </>
  );
};

export default Faq;
