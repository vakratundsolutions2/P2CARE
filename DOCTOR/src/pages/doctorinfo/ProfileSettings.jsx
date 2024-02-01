import BreadCrum from "../../components/BreadCrum"
import EditProfile from "../../components/EditProfile"
import { useSelector } from "react-redux";


const ProfileSettings = () => {

  const userData = useSelector((state) => state.auth);

  return (
    <>

      <div className="main-wrapper">

        <BreadCrum location={"Profile Settings  "} heading={"Profile Settings"} />

        {/* <!-- Page Content --> */}
        <div className="content ">
          <div className="container">

            <div className="row">
              <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar" style=
                {{ width: '4%' }}>

              </div>
              <div className="col-md-7 col-lg-8 col-xl-9">
                <div className="appointments">

                  <EditProfile profileData={userData.user} />

                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
      {/* <!-- /Page Content --> */}

    </>
  )
}

export default ProfileSettings