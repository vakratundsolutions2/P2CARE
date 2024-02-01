import { useEffect } from "react";
import { baseUrl } from "../../utils/baseUrl";
import { useDispatch, useSelector } from "react-redux";
import { getADoctor } from "../../features/doctor/doctorSlice";
import { getAAvailablity } from "../../features/availablity/availablitySlice";

const DoctorProfile = () => {
  const ID = location.pathname.split("/")[3]
  console.log(ID);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getADoctor(ID));
    dispatch(getAAvailablity(ID));

  }, [])
  const {SingleData} = useSelector((state)=> state.doctor)
  const { DoctorAvailablity } = useSelector((state) => state.available);
  console.log("SingleData", SingleData);

  
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg mb-3">
        <div className="container-fluid">
          <h5 className="navbar-brand">Doctor Profile</h5>
        </div>
      </nav>

      <div className="card mb-5 mw-100 ">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={`${baseUrl}doctor/${SingleData?.image}`}
              className="img-fluid rounded-start"
              alt="Dr Profile"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Dr. {SingleData?.doctorName}</h5>
              <p className="card-text">{SingleData?.shortDescription}</p>
              <p className="card-text">
                <button className="btn btn-sm btn-secondary" type="button">
                  &#x20B9; {SingleData?.price}
                </button>{" "}
              </p>

              <p className="card-text">
                <b>Address: </b> {SingleData?.location}
              </p>
              <p className="card-text d-flex flex-wrap gap-2">
                {SingleData?.experties.map((e, i) => {
                  return (
                    <>
                      <button
                        className="btn btn-sm btn-secondary"
                        type="button"
                      >
                        {e}
                      </button>
                    </>
                  );
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-title fs-5 m-auto">
          Personal Booking Availablity Information
        </div>
        <hr />
        
      </div>
    </div>
  );
};

export default DoctorProfile;
