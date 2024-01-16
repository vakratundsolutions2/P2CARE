import { Link } from "react-router-dom";
import BreadCrum from "../../components/BreadCrum"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GetAllBlogs, resetState } from "../../features/blog/blogSlice";
import { baseUrl } from "../../utils/baseUrl";

const BlogList = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetAllBlogs());
    dispatch(resetState());
    
  }, [])
  const blogState = useSelector((state)=>state.blog.blogs)
  console.log(blogState);  

  return (
    
      <>
        <BreadCrum location={"All Blogs  "} heading={"All Blogs"} />

        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <div className="row blog-grid-row">



                 {blogState?.map((e,i)=>{
                  console.log(e);

                  return (
                    <>
                      <div className="col-md-6 col-sm-12" key={i}>
                        <div className="blog grid-blog">
                          <div className="blog-image">
                            <Link to={`/blog-details/${e?._id}`}>
                              <img
                                className="img-fluid"
                                src={`${baseUrl}blog/${e?.blogimage}`}
                                alt="Post Image"
                              />
                            </Link>
                          </div>
                          <div className="blog-content">
                            <ul className="entry-meta meta-item">
                              <li>
                                <div className="post-author">
                                  <Link to="/doctorprofile">
                                    <img
                                      src="/src/assets/img/doctors/doctor-thumb-01.jpg"
                                      alt="Post Author"
                                    />{" "}
                                    <span>{e?.author}</span>
                                  </Link>
                                </div>
                              </li>
                              <li>
                                <i className="far fa-clock"></i> 4 Dec 2023
                              </li>
                            </ul>
                            <h3 className="blog-title">
                              <Link to="/doctorprofile">{e?.title}</Link>
                            </h3>
                            <p className="mb-0">{e?.blogcontent}</p>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                 })}

                  
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="blog-pagination">
                      <nav>
                        <ul className="pagination justify-content-center">
                          <li className="page-item disabled">
                            <Link className="page-link" to="#" tabIndex="-1">
                              <i className="fas fa-angle-double-left"></i>
                            </Link>
                          </li>
                          <li className="page-item">
                            <Link className="page-link" to="#">
                              1
                            </Link>
                          </li>
                          <li className="page-item active">
                            <Link className="page-link" to="#">
                              2{" "}
                              <span className="visually-hidden">(current)</span>
                            </Link>
                          </li>
                          <li className="page-item">
                            <Link className="page-link" to="#">
                              3
                            </Link>
                          </li>
                          <li className="page-item">
                            <Link className="page-link" to="#">
                              <i className="fas fa-angle-double-right"></i>
                            </Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-12 sidebar-right theiaStickySidebar">
                <div className="card search-widget">
                  <div className="card-body">
                    <form className="search-form">
                      <div className="input-group">
                        <input
                          type="text"
                          placeholder="Search..."
                          className="form-control"
                        />
                        <button type="submit" className="btn btn-primary">
                          <i className="fa fa-search"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="card post-widget">
                  <div className="card-header">
                    <h4 className="card-title">Latest Posts</h4>
                  </div>
                  <div className="card-body">
                    <ul className="latest-posts">
                      <li>
                        <div className="post-thumb">
                          <Link to="/blog-details">
                            <img
                              className="img-fluid"
                              src="/src/assets/img/blog/blog-thumb-01.jpg"
                              alt="blog-image"
                            />
                          </Link>
                        </div>
                        <div className="post-info">
                          <h4>
                            <Link to="/blog-details">
                              Doccure – Making your clinic painless visit?
                            </Link>
                          </h4>
                          <p>4 Dec 2023</p>
                        </div>
                      </li>
                      <li>
                        <div className="post-thumb">
                          <a to="/blog-details">
                            <img
                              className="img-fluid"
                              src="/src/assets/img/blog/blog-thumb-02.jpg"
                              alt="blog-image"
                            />
                          </a>
                        </div>
                        <div className="post-info">
                          <h4>
                            <Link to="/blog-details">
                              What are the benefits of Online Doctor Booking?
                            </Link>
                          </h4>
                          <p>3 Dec 2023</p>
                        </div>
                      </li>
                      <li>
                        <div className="post-thumb">
                          <Link to="/blog-details">
                            <img
                              className="img-fluid"
                              src="/src/assets/img/blog/blog-thumb-03.jpg"
                              alt="blog-image"
                            />
                          </Link>
                        </div>
                        <div className="post-info">
                          <h4>
                            <Link to="/blog-details">
                              Benefits of consulting with an Online Doctor
                            </Link>
                          </h4>
                          <p>3 Dec 2023</p>
                        </div>
                      </li>
                      <li>
                        <Link to="/blog-details">
                          <img
                            className="img-fluid"
                            src="/src/assets/img/blog/blog-thumb-04.jpg"
                            alt="blog-image"
                          />
                        </Link>
                        <div className="post-thumb"></div>
                        <div className="post-info">
                          <h4>
                            <Link to="/blog-details">
                              5 Great reasons to use an Online Doctor
                            </Link>
                          </h4>
                          <p>2 Dec 2023</p>
                        </div>
                      </li>
                      <li>
                        <div className="post-thumb">
                          <Link to="/blog-details">
                            <img
                              className="img-fluid"
                              src="/src/assets/img/blog/blog-thumb-05.jpg"
                              alt="blog-image"
                            />
                          </Link>
                        </div>
                        <div className="post-info">
                          <h4>
                            <Link to="/blog-details">
                              Online Doctor Appointment Scheduling
                            </Link>
                          </h4>
                          <p>1 Dec 2023</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="card category-widget">
                  <div className="card-header">
                    <h4 className="card-title">Blog Categories</h4>
                  </div>
                  <div className="card-body">
                    <ul className="categories">
                      <li>
                        <Link to="#">
                          Cardiology <span>(62)</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          Health Care <span>(27)</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          Nutritions <span>(41)</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          Health Tips <span>(16)</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          Medical Research <span>(55)</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          Health Treatment <span>(07)</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="card tags-widget">
                  <div className="card-header">
                    <h4 className="card-title">Tags</h4>
                  </div>
                  <div className="card-body">
                    <ul className="tags">
                      <li>
                        <Link to="#" className="tag">
                          Children
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="tag">
                          Disease
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="tag">
                          Appointment
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="tag">
                          Booking
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="tag">
                          Kids
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="tag">
                          Health
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="tag">
                          Family
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="tag">
                          Tips
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="tag">
                          Shedule
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="tag">
                          Treatment
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="tag">
                          Dr
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="tag">
                          Clinic
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="tag">
                          Online
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="tag">
                          Health Care
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="tag">
                          Consulting
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="tag">
                          Doctors
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="tag">
                          Neurology
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="tag">
                          Dentists
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="tag">
                          Specialist
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="tag">
                          Doccure
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    
  );
}

export default BlogList