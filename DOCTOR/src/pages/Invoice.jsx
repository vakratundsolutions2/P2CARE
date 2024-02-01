
import BreadCrum from "../components/BreadCrum";
import { useDispatch, useSelector } from "react-redux";
import { AcceptedListAppoinment } from "../features/appoinment/appoinmentSlice";
import { useEffect } from "react";
import dayjs from "dayjs";

const Invoice = () => {

    const { user } = useSelector((state) => state.auth);
    const ID = user?.DRdata?._id;

    const dispatch = useDispatch();
    useEffect(() => {
      const data = { accpted: true, ID: ID };

      dispatch(AcceptedListAppoinment(data));
    }, []);
    const { accepted } = useSelector((state) => state.appoinment);

  return (
    <div className="main-wrapper">
      <BreadCrum location={"Invoice  "} heading={"Invoice"} />

      {/* <!-- Page Content --> */}
      <div className="content">
        <div className="container">
          <div className="card card-table">
            <div className="card-body">
              {/* <!-- Invoice Table --> */}
              <div className="table-responsive">
                <table className="table table-hover table-center mb-0">
                  <thead>
                    <tr>
                      <th>SR No</th>
                      <th>Patient</th>
                      <th>Contact No</th>
                      <th>Amount</th>
                      <th>Paid On</th>
                      {/* <th>Action</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {accepted?.map((el,i)=>{
                      return (
                        <>
                          <tr key={i}>
                            <td>
                              {/* <Link to="/doctor/invoice-view"> */}
                                {i+1}
                                {/* </Link> */}
                            </td>
                            <td>
                              <h2 className="table-avatar">
                                {/* <Link
                                  to="patient-profile"
                                  className="avatar avatar-sm me-2"
                                >
                                  <img
                                    className="avatar-img rounded-circle"
                                    src={patient}
                                    alt="User Image"
                                  />
                                </Link> */}
                                {/* <Link to="patient-profile"> */}
                                  {el?.name}
                                  {/* <span>#PT0016</span> */}
                                {/* </Link> */}
                              </h2>
                            </td>
                            <td>
                              {el?.user?.phoneNumber}
                              </td>
                            <td> &#x20B9; {user?.DRdata?.price}</td>
                            <td>{dayjs(el?.date).format('DD-MM-YYYY')}</td>
                            {/* <td>
                              <div className="table-action">
                                <Link
                                  to="invoice-view"
                                  className="btn btn-sm bg-info-light"
                                >
                                  <i className="far fa-eye"></i> View
                                </Link>
                                <Link
                                  to="#"
                                  className="btn btn-sm bg-primary-light"
                                >
                                  <i className="fas fa-print"></i> Print
                                </Link>
                              </div>
                            </td> */}
                          </tr>
                        </>
                      );
                    })}
                
                  
                  </tbody>
                </table>
              </div>
              {/* <!-- /Invoice Table --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /Page Content --> */}
    </div>
  );
};

export default Invoice;
