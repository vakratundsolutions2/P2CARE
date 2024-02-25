import { Link } from "react-router-dom";
import BreadCrum from "../../components/BreadCrum";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FilterHospital, getAllHospitals, resetState } from "../../features/hospital/hospitalSlice";
import { baseUrl } from "../../utils/baseUrl";
import { Pagination, Rate } from "antd";
import { allDoctorCategory } from "../../features/dCategory/dCategorySlice";
import { getAllServices } from "../../features/service/serviceSlice";
import Seo from "../../components/seo/Seo";

const HospitalList = () => {
  const [category, setcatagory] = useState("");
  const [sort, setSort] = useState("");
  const [name, setName] = useState("");
  const [page, setPage] = useState("");
  const [limit, setLimit] = useState("");
  const [star, setStar] = useState("");
  const [service, setService] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllHospitals());
    dispatch(allDoctorCategory());
    dispatch(getAllServices());

  }, [dispatch]);

  


  useEffect(() => {
    if (
      name !== undefined ||
      category !== undefined ||
      page !== undefined ||
      limit !== undefined ||
      star !== undefined ||
      star !== "" ||
      sort !== undefined ||
      service !== undefined
    ) {
      dispatch(
        FilterHospital({
          name,
          category,
          sort,
          page,
          limit,
          star,
          service,
        })
      );
    } else {
      dispatch(getAllHospitals());
    }
  }, [dispatch, name,category,sort,page,limit,star,service]);
    const { hospitalFilter, hospitals } = useSelector(
      (state) => state.hospital
    );
    const Category = useSelector((state) => state.dCategory?.dCategories);
    const Services = useSelector((state) => state.service?.Services);

  

  const handleReset = () => {
    setStar("");
    setSort("");
    setPage("");
    setName("");
    setcatagory("");
    setLimit("");
    setService("");
    dispatch(resetState());
    setTimeout(() => {
      dispatch(getAllHospitals());
    }, 400);
  };
console.log("filter", {
  name,
  category,
  sort,
 service,
  page,
  limit,
  star,
 
});

  return (
    <>
      <Seo metaTitle={"All hospitals - P2CARE"} />

      <div>
        <div className="main-wrapper search-page">
          <BreadCrum location={"Hospitals "} heading={"All hospitals "} />

          <div className="doctor-content content">
            <div className="container">
              {/* <!-- Doctor Search List --> */}
              <div className="row">
                <div className="col-xl-12 col-lg-12 map-view">
                  <div className="row">
                    <div className="col-lg-3  theiaStickySidebar">
                      <div className="filter-contents">
                        <div className="filter-header">
                          <h4 className="filter-title">Filter</h4>
                        </div>
                        <div className="filter-details">
                          <div className="filter-grid">
                            <h4>
                              <Link
                                to="#collapsefour"
                                data-bs-toggle="collapse"
                              >
                                Catagories
                              </Link>
                            </h4>
                            <div id="collapsefour" className="collapse show">
                              <div className="filter-collapse">
                                <ul>
                                  {Category.map((val) => {
                                    return (
                                      <>
                                        <li>
                                          <label className="custom_check d-inline-flex">
                                            <input
                                              type="radio"
                                              name="speciality"
                                              onChange={(e) => {
                                                setcatagory(e.target.value);
                                              }}
                                              value={val.name}
                                            />
                                            <span className="checkmark"></span>
                                            {val.name}
                                          </label>
                                        </li>
                                      </>
                                    );
                                  })}
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/* <!-- /Filter Grid --> */}

                          {/* <!-- Filter Grid --> */}
                          <div className="filter-grid">
                            <h4>
                              <Link
                                to="#collapsefive"
                                data-bs-toggle="collapse"
                              >
                                Service
                              </Link>
                            </h4>
                            <div id="collapsefive" className="collapse show">
                              <div className="filter-collapse">
                                <ul>
                                  {Services.map((val) => {
                                    return (
                                      <>
                                        <li>
                                          <label className="custom_check d-inline-flex">
                                            <input
                                              type="radio"
                                              name="services"
                                              onChange={(e) => {
                                                setService(e.target.value);
                                              }}
                                              value={val.title}
                                            />
                                            <span className="checkmark"></span>
                                            {val.title}
                                          </label>
                                        </li>
                                      </>
                                    );
                                  })}
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/* <!-- /Filter Grid --> */}

                          {/* <!-- Filter Grid --/> */}
                          <div className="filter-grid">
                            <h4>
                              <Link
                                to="#collapseseven"
                                data-bs-toggle="collapse"
                              >
                                By Rating
                              </Link>
                            </h4>
                            <div id="collapseseven" className="collapse show">
                              <div id="collapseseven" className="collapse show">
                                <div className="filter-collapse">
                                  <ul>
                                    <li>
                                      <Rate
                                        value={star}
                                        onChange={(e) => {
                                          setStar(e);
                                        }}
                                      />
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- /Filter Grid --> */}

                          {/* <!-- Filter Btn --> */}
                          <div className="filter-btn apply-btn">
                            <div className="row">
                              <div className="col-6">
                                <Link className="btn btn-primary">Apply</Link>
                              </div>
                              <div className="col-6">
                                <Link
                                  to="#"
                                  className="btn btn-outline-primary"
                                  onClick={handleReset}
                                >
                                  Reset
                                </Link>
                              </div>
                            </div>
                          </div>
                          {/* <!-- /Filter Btn --> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-9">
                      <div className="doctor-filter-info">
                        <div className="doctor-filter-inner justify-content-between">
                          {/* <div> */}
                          <div className="doctors-found">
                            <p>
                              <span>
                                {hospitalFilter?.total} Hospital found
                              </span>{" "}
                              {category}{" "}
                            </p>
                          </div>

                          {/* </div> */}
                          <div className="d-flex gap-5">
                            <div className="doctor-filter-option">
                              <div className="doctor-filter-sort">
                                <p>Sort By Name : </p>
                                <div className="doctor-filter-select">
                                  <select
                                    className="form-select"
                                    name="sort"
                                    onChange={(e) => setSort(e.target.value)}
                                    // value={'sort'}
                                  >
                                    <option value={"1"}>A to Z</option>
                                    <option value={"-1"}>Z to A</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="doctor-filter-option">
                              <input
                                type="text "
                                className="form-control "
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Search Hospital By name"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {hospitals?.map((e, i) => {
                        return (
                          <>
                            <div className="card doctor-card" key={i}>
                              <div className="card-body">
                                <div className="doctor-widget-one">
                                  <div className="doc-info-left">
                                    <div className="doctor-img">
                                      <Link to={`/hospital-profile/${e?._id}`}>
                                        <img
                                          src={`${baseUrl}hospital/${e.hospitallogo}`}
                                          className="img-fluid"
                                          alt={e?.hospitalname}
                                        />
                                      </Link>
                                    </div>
                                    <div className="doc-info-cont">
                                      <h4 className="doc-name">
                                        <Link
                                          to={`/hospital-profile/${e?._id}`}
                                        >
                                          {e?.hospitalname}
                                        </Link>
                                        <i className="fas fa-circle-check"></i>
                                      </h4>
                                      {/* <p className="doc-speciality">
                                      {}
                                    </p> */}
                                      <div className="clinic-details">
                                        <p className="doc-location">
                                          <i className="feather-map-pin"></i>
                                          {e?.hospitaladdress}
                                          <Link to="#">Get Direction</Link>
                                        </p>
                                        <p className="doc-location">
                                          <i className="feather-award"></i>{" "}
                                          <span>{e?.yearofexperience}</span>{" "}
                                          Years Old
                                        </p>
                                      </div>
                                      <div className="reviews-ratings">
                                        <p>
                                          <span>
                                            <i className="fas fa-star"></i>{" "}
                                            {e?.totalratings}
                                          </span>{" "}
                                          ({e.ratings?.length})
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="doc-info-right">
                                    <div className="clini-infos">
                                      {/* <ul>
                                      <li>
                                        <i className="feather-clock available-icon"></i>
                                        <span className="available-date available-today">
                                          Available Today
                                        </span>
                                      </li>
                                      <li>
                                        <i className="feather-thumbs-up available-icon"></i>{" "}
                                        98%{" "}
                                        <span className="votes">
                                          (252 Votes)
                                        </span>
                                      </li>
                                      <li>
                                        <i className="feather-dollar-sign available-icon"></i>{" "}
                                        $1500{" "}
                                        <i className="feather-info available-info-icon"></i>
                                      </li>
                                    </ul> */}
                                    </div>
                                    <div className="clinic-booking book-appoint">
                                      <Link
                                        className="btn btn-primary"
                                        to={`/hospital-profile/${e?._id}`}
                                      >
                                        View Profile
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      })}

                      <div className="row">
                        <div className="col-sm-12">
                          <div className="blog-pagination rev-page">
                            <nav className="d-flex justify-content-end w-full px-5">
                              <Pagination
                                current={page}
                                onChange={(e) => {
                                  setPage(e);
                                }}
                                total={hospitalFilter?.total}
                                pageSize={hospitalFilter?.limit}
                              />
                            </nav>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-12 theiaStickySidebar map-right">
                  <div id="map" className="map-listing"></div>
                </div>
              </div>
              {/* <!-- /Doctor Search List --> */}
            </div>
          </div>
          {/* <!-- /Page Content -->	 */}

          {/* <!-- Cursor --> */}
          <div className="mouse-cursor cursor-outer"></div>
          <div className="mouse-cursor cursor-inner"></div>
          {/* <!-- /Cursor --> */}
        </div>
      </div>
    </>
  );
};

export default HospitalList;
