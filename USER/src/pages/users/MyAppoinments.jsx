import { Table } from "antd";
import BreadCrum from "../../components/BreadCrum";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GetAppoinmentsUser } from "../../features/auth/authSlice";
import dayjs from "dayjs";
import Seo from "../../components/seo/SEO";
const columns = [
  {
    title: "SNo",
    dataIndex: "key",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Doctor",
    dataIndex: "Doctor",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  // {
  //   title: "Appt Date",
  //   dataIndex: "Apptdate",
  //   sorter: (a, b) => a.name.length - b.name.length,
  // },
  {
    title: "Booking Date",
    dataIndex: "BookingDate",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Amount",
    dataIndex: "Amount",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  // {
  //   title: "Status",
  //   dataIndex: "status",
  //   sorter: (a, b) => a.name.length - b.name.length,
  // },
  // {
  //   title: "Action",
  //   dataIndex: "action",
  // },
];

const MyAppoinments = () => {
  const { user, appoinments } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAppoinmentsUser(user?._id));
  }, []);

  const data = [];
  for (let i = 0; i < appoinments?.length; i++) {
    data.push({
      key: i + 1,
      Doctor: appoinments[i].doctor?.doctorName,
      BookingDate: dayjs(appoinments[i].date).format("DD-MM-YYYY"),
      Amount: appoinments[i].doctor?.price,
      // action:(<>
      
      
      
      // </>),
    });
  }
  return (
    <>
      <Seo metaTitle={"My Appointments - P2CARE"} />

      <div className="main-wrapper">
        <BreadCrum location={"My Appoinments"} heading={"Appointments"} />

        <div className="container-xxl">
          <div className="row py-3 m-4">
            <div className="tab-content pt-0">
              <Table
                className="table table-responsive"
                columns={columns}
                dataSource={data}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAppoinments;
