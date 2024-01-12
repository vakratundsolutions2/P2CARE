import React from "react";

const HospitalProfile = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg mb-3">
        <div className="container-fluid">
          <h5 className="navbar-brand">
            Hospital Profile
          </h5>
          
        </div>
      </nav>
      
      <div className="card mb-5 mw-100">
  <div className="row g-0">
    <div className="col-md-4">
      <img src="..." className="img-fluid rounded-start" alt="Dr Profile" />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Shree Hospital</h5>
        <p className="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <p className="card-text">
          <b>Address: </b> vorakotda road, near Bapa sitaram madhuli, Gondal
        </p>
        <p className="card-text">
          <small className="text-body-secondary">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default HospitalProfile;
