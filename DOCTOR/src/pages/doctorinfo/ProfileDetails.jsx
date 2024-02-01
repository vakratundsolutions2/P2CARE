import { useSelector } from "react-redux";
import BreadCrum from "../../components/BreadCrum"
import DetailsProfile from "../../components/DetailsProfile"


const ProfileDetails = () => {
    const userData = useSelector((state) => state.auth);

    return (

        <div className="main-wrapper">

        <BreadCrum location={"Profile Details  "} heading={"Profile Details"} />

        {/* <!-- Page Content --> */}
        <div className="content ">
          <div className="container">

            <div className="row">
              <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar" style=
                {{ width: '4%' }}>

              </div>
              <div className="col-md-7 col-lg-8 col-xl-9">
                <div className="appointments">

                  <DetailsProfile profileData={userData.user} />

                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
       
    )
}

export default ProfileDetails