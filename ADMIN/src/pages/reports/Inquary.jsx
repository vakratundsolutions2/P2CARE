import { Link } from "react-router-dom";
import { AiFillDelete, AiOutlineFileSearch } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import CustomModal from "../../components/CustomModal";
import { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { baseUrl } from "../../utils/baseUrl";
import { DeleteInquary, GetAllInquary, ResetState } from "../../features/report/reportSlice";

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
    title: "Email",
    dataIndex: "email",
    sorter: (a, b) => a.name.length - b.name.length,
  },

  {
    title: "Mobile",
    dataIndex: "mobile",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Comment",
    dataIndex: "comment",
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

const Inquary = () => {
     const dispatch = useDispatch();
     const [open, setOpen] = useState(false);
     const [delId, setDelId] = useState("");
     const [search, setSearch] = useState("");
     const [searchResult, setSearchResult] = useState([]);

     useEffect(() => {
       dispatch(GetAllInquary());
       dispatch(ResetState());
     }, []);

     useEffect(() => {
    //    if (search) {
         
    //    } else {

    //    }
     }, [search, ]);

     // console.log(searchResult);

    
     const hideModal = () => {
       setOpen(false);
     };



     const  {inquaries} = useSelector((state)=>state.report)

     const data1 = [];
     for (let i = 0; i < inquaries?.length; i++) {
       data1.push({
         key: i + 1,
         name: inquaries[i].name,
         email: inquaries[i].email,
         mobile: inquaries[i].mobile,
         comment: inquaries[i].comment,

         status: (
           <>
             <div className="btn btn-outline-primary uppercase">
               {inquaries[i]?.status}
             </div>
           </>
         ),
         action: (
           <>
             <Link
               className=" fs-3 text-danger"
               to={`/admin/inquary/${inquaries[i]?._id}`}
             >
               <BiEdit />
             </Link>
             <button
               onClick={() => showModal(inquaries[i]._id)}
               className="ms-3 fs-3 text-danger bg-transparent border-0"
             >
               <AiFillDelete />
             </button>
           </>
         ),
       });
     }
     const deleteINQ = () => {
        dispatch(DeleteInquary(delId));
        setTimeout(() => {
            dispatch(ResetState());
        }, 300);
     }

     const showModal = (e) => {
       setOpen(true);
       setDelId(e);
     };

     return (
       <div className="mt-3">
         <div className="header d-flex mb-4 justify-content-between">
           <h2 className="text-header mb-4">All Inquary</h2>
           
         </div>
{/* 
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
         </div> */}
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
            deleteINQ(delId);
           }}
           title="Are you sure you want to delete this inquary?"
         />
       </div>
     );
};

export default Inquary;
