import { Link } from "react-router-dom";
import CustomModal from "../../components/CustomModal";
import { useState } from "react";
import { Table } from "antd";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const columns = [
  {
    title: "Invoice Number",
    dataIndex: "key",
  },
  {
    title: "Patient ID",
    dataIndex: "PatientID",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Patient Name",
    dataIndex: "PatientName",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Total Amount",
    dataIndex: "TotalAmount",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Created Date",
    dataIndex: "CreatedDate",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Status",
    dataIndex: "Status",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const InvoiceReport = () => {
  const [open, setOpen] = useState(false);
  const [delId, setDelId] = useState("");
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const hideModal = () => {
    setOpen(false);
  };

  // useEffect(() => {
  //   dispatch(GetAllTestimonial());
  // }, []);

  // useEffect(() => {
  //   if (search) {
  //     axios
  //       .get(`${baseUrl}invoices/searchInvoiceReport/${search}`)
  //       .then((e) => setSearchResult(e.data?.data));
  //   } else {
  //     axios
  //       .get(`${baseUrl}invoices/InvoiceReport`)
  //       .then((e) => setSearchResult(e.data?.data));
  //   }
  // }, [search, delId]);

  const InvoiceReportState = useSelector(
    (state) => state.invoices?.InvoiceReport
  );

  // const deletetest = (e) => {
  //   dispatch(DeleteAtesTimonial(e));
  //   setTimeout(() => {
  //     dispatch(GetAllTestimonial());
  //     dispatch(resetState());
  //   }, 600);
  //   setOpen(false);
  // };

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
      description: searchResult[i]?.description,

      // image: (
      //   <>
      //     <img
      //       src={`${baseUrl}InvoiceReport/${searchResult[i]?.image}`}
      //       alt={searchResult[i]?.name}
      //       className="list-img"
      //     />
      //   </>
      // ),
      // action: (
      //   <>
      //     <Link
      //       className=" fs-3 text-danger"
      //       to={`/admin/InvoiceReport/${searchResult[i]._id}`}
      //     >
      //       <BiEdit />
      //     </Link>
      //     <button
      //       className="ms-3 fs-3 text-danger bg-transparent border-0"
      //       onClick={() => showModal(searchResult[i]._id)}
      //     >
      //       <AiFillDelete />
      //     </button>
      //   </>
      // ),
    });
  }

  return (
    <div className="mt-3">
      <div className="header d-flex mb-3 justify-content-between px-4">
        <h2 className="text-header">InvoiceReport Items</h2>
        <Link to={"/admin/InvoiceReport"} className="btn btn-primary mb-3">
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
          // deletetest(delId);
        }}
        title="Are you sure you want to delete ?"
      />
    </div>
  );
};

export default InvoiceReport;
