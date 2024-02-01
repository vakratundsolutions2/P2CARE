import icon1 from "../assets/img/icon-01.png";
import icon2 from "../assets/img/icon-02.png";
import icon3 from "../assets/img/icon-03.png";
import BreadCrum from "../components/BreadCrum";

const DoctorDashboard = () => {
  return (
    <div className="main-wrapper">
      <BreadCrum location={"Dashboard "} heading={"Dashboard"} />
      <div className="row w-75">
        <div className="col-md-12">
          <div className="card dash-card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12 col-lg-4">
                  <div className="dash-widget dct-border-rht">
                    <div className="circle-bar circle-bar1">
                      <div className="circle-graph1" data-percent="75">
                        <canvas
                          width="500"
                          height="500"
                          style={{ height: "400px", width: "400px" }}
                        ></canvas>
                        <img src={icon1} className="img-fluid" alt="patient" />
                      </div>
                    </div>
                    <div className="dash-widget-info">
                      <h6>Total Patient</h6>
                      <h3>1500</h3>
                      <p className="text-muted">Till Today</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-12 col-lg-4">
                  <div className="dash-widget dct-border-rht">
                    <div className="circle-bar circle-bar2">
                      <div className="circle-graph2" data-percent="65">
                        <canvas
                          width="500"
                          height="500"
                          style={{ height: "400px", width: "400px" }}
                        ></canvas>
                        <img src={icon2} className="img-fluid" alt="Patient" />
                      </div>
                    </div>
                    <div className="dash-widget-info">
                      <h6>Today Patient</h6>
                      <h3>160</h3>
                      <p className="text-muted">06, Nov 2023</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-12 col-lg-4">
                  <div className="dash-widget">
                    <div className="circle-bar circle-bar3">
                      <div className="circle-graph3" data-percent="50">
                        <canvas
                          width="500"
                          height="500"
                          style={{ height: "400px", width: "400px" }}
                        ></canvas>
                        <img src={icon3} className="img-fluid" alt="Patient" />
                      </div>
                    </div>
                    <div className="dash-widget-info">
                      <h6>Appoinments</h6>
                      <h3>85</h3>
                      <p className="text-muted">06, Apr 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
