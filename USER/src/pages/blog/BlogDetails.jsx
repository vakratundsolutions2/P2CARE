import { Link, useLocation } from "react-router-dom";
import BreadCrum from "../../components/BreadCrum";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GetABlog, resetState } from "../../features/blog/blogSlice";

function BlogDetails() {

  const location = useLocation();
  const blogId = location.pathname.split("/")[2];
  
  const dispatch = useDispatch();

  useEffect(() => {
    if (blogId !== undefined) {
      dispatch(GetABlog(blogId));
    } else {
      dispatch(resetState());
    }
  }, [blogId]);
 const BlogState = useSelector((state) => state.blog);
 const { SingleBlog } = BlogState;
 console.log(SingleBlog);

  return (
    <>
      <BreadCrum location={"Blog Details "} heading={'Blog Details'} />

      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-view">
                <div className="blog blog-single-post">
                  <div className="blog-image">
                    <Link to="javascript:void(0);">
                      <img
                        alt="blog-image"
                        src="/src/assets/img/blog/blog-01.jpg"
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  <h3 className="blog-title">
                    Doccure – Making your clinic painless visit?
                  </h3>
                  <div className="blog-info clearfix">
                    <div className="post-left">
                      <ul>
                        <li>
                          <div className="post-author">
                            <Link to="/doctorprofile">
                              <img
                                src="/src/assets/img/doctors/doctor-thumb-02.jpg"
                                alt="Post Author"
                              />{" "}
                              <span>Dr. Darren Elder</span>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <i className="far fa-calendar"></i>4 Dec 2023
                        </li>
                        <li>
                          <i className="far fa-comments"></i>12 Comments
                        </li>
                        <li>
                          <i className="fa fa-tags"></i>Health Tips
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="blog-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit, sed quia non numquam eius
                      modi tempora incidunt ut labore et dolore magnam aliquam
                      quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                      exercitationem ullam corporis suscipit laboriosam, nisi ut
                      aliquid ex ea commodi consequatur? Quis autem vel eum iure
                      reprehenderit qui in ea voluptate velit esse quam nihil
                      molestiae consequatur, vel illum qui dolorem eum fugiat
                      quo voluptas nulla pariatur?
                    </p>
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti quos dolores et quas molestias excepturi sint
                      occaecati cupiditate non provident, similique sunt in
                      culpa qui officia deserunt mollitia animi, id est laborum
                      et dolorum fuga. Et harum quidem rerum facilis est et
                      expedita distinctio. Nam libero tempore, cum soluta nobis
                      est eligendi optio cumque nihil impedit quo minus id quod
                      maxime placeat facere possimus, omnis voluptas assumenda
                      est, omnis dolor repellendus. Temporibus autem quibusdam
                      et aut officiis debitis aut rerum necessitatibus saepe
                      eveniet ut et voluptates repudiandae sint et molestiae non
                      recusandae. Itaque earum rerum hic tenetur a sapiente
                      delectus, ut aut reiciendis voluptatibus maiores alias
                      consequatur aut perferendis doloribus asperiores repellat.
                    </p>
                  </div>
                </div>

                <div className="card blog-share clearfix">
                  <div className="card-header">
                    <h4 className="card-title">Share the post</h4>
                  </div>
                  <div className="card-body">
                    <ul className="social-share">
                      <li>
                        <Link to="#" title="Facebook">
                          <i className="fab fa-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" title="Twitter">
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" title="Linkedin">
                          <i className="fab fa-linkedin"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" title="Google Plus">
                          <i className="fab fa-google-plus"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" title="Youtube">
                          <i className="fab fa-youtube"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card author-widget clearfix">
                  <div className="card-header">
                    <h4 className="card-title">About Author</h4>
                  </div>
                  <div className="card-body">
                    <div className="about-author">
                      <div className="about-author-img">
                        <div className="author-img-wrap">
                          <Link to="doctorprofile">
                            <img
                              className="img-fluid rounded-circle"
                              alt="Darren Elder"
                              src="/src/assets/img/doctors/doctor-thumb-02.jpg"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="author-details">
                        <Link to="doctorprofile" className="blog-author-name">
                          Dr. Darren Elder
                        </Link>
                        <p className="mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card blog-comments clearfix">
                  <div className="card-header">
                    <h4 className="card-title">Comments (12)</h4>
                  </div>
                  <div className="card-body pb-0">
                    <ul className="comments-list">
                      <li>
                        <div className="comment">
                          <div className="comment-author">
                            <img
                              className="avatar"
                              alt="Michelle Fairfax"
                              src="/src/assets/img/patients/patient4.jpg"
                            />
                          </div>
                          <div className="comment-block">
                            <span className="comment-by">
                              <span className="blog-author-name">
                                Michelle Fairfax
                              </span>
                            </span>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Nam viverra euismod odio, gravida
                              pellentesque urna varius vitae, gravida
                              pellentesque urna varius vitae. Lorem ipsum dolor
                              sit amet, consectetur adipiscing elit.
                            </p>
                            <p className="blog-date">Dec 6, 2023</p>
                            <Link className="comment-btn" to="#">
                              <i className="fas fa-reply"></i> Reply
                            </Link>
                          </div>
                        </div>
                        <ul className="comments-list reply">
                          <li>
                            <div className="comment">
                              <div className="comment-author">
                                <img
                                  className="avatar"
                                  alt="Gina Moore"
                                  src="/src/assets/img/patients/patient5.jpg"
                                />
                              </div>
                              <div className="comment-block">
                                <span className="comment-by">
                                  <span className="blog-author-name">
                                    Gina Moore
                                  </span>
                                </span>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Nam viverra euismod odio,
                                  gravida pellentesque urna varius vitae,
                                  gravida pellentesque urna varius vitae.
                                </p>
                                <p className="blog-date">Dec 6, 2023</p>
                                <Link className="comment-btn" to="#">
                                  <i className="fas fa-reply"></i> Reply
                                </Link>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="comment">
                              <div className="comment-author">
                                <img
                                  className="avatar"
                                  alt="Carl Kelly"
                                  src="/src/assets/img/patients/patient3.jpg"
                                />
                              </div>
                              <div className="comment-block">
                                <span className="comment-by">
                                  <span className="blog-author-name">
                                    Carl Kelly
                                  </span>
                                </span>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Nam viverra euismod odio,
                                  gravida pellentesque urna varius vitae,
                                  gravida pellentesque urna varius vitae.
                                </p>
                                <p className="blog-date">December 7, 2023</p>
                                <Link className="comment-btn" to="#">
                                  <i className="fas fa-reply"></i> Reply
                                </Link>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <div className="comment">
                          <div className="comment-author">
                            <img
                              className="avatar"
                              alt="Elsie Gilley"
                              src="/src/assets/img/patients/patient6.jpg"
                            />
                          </div>
                          <div className="comment-block">
                            <span className="comment-by">
                              <span className="blog-author-name">
                                Elsie Gilley
                              </span>
                            </span>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </p>
                            <p className="blog-date">December 11, 2023</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="comment">
                          <div className="comment-author">
                            <img
                              className="avatar"
                              alt="Joan Gardner"
                              src="/src/assets/img/patients/patient7.jpg"
                            />
                          </div>
                          <div className="comment-block">
                            <span className="comment-by">
                              <span className="blog-author-name">
                                Joan Gardner
                              </span>
                            </span>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </p>
                            <p className="blog-date">December 13, 2023</p>
                            <Link className="comment-btn" to="#">
                              <i className="fas fa-reply"></i> Reply
                            </Link>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="card new-comment clearfix">
                  <div className="card-header">
                    <h4 className="card-title">Leave Comment</h4>
                  </div>
                  <div className="card-body">
                    <form>
                      <div className="mb-3">
                        <label className="mb-2">
                          Name <span className="text-danger">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="mb-3">
                        <label className="mb-2">
                          Your Email Address{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <input type="email" className="form-control" />
                      </div>
                      <div className="mb-3">
                        <label className="mb-2">Comments</label>
                        <textarea rows="4" className="form-control"></textarea>
                      </div>
                      <div className="submit-section">
                        <button
                          className="btn btn-primary submit-btn"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
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
                        <Link to="blog-details">
                          <img
                            className="img-fluid"
                            src="/src/assets/img/blog/blog-thumb-01.jpg"
                            alt="blog-image"
                          />
                        </Link>
                      </div>
                      <div className="post-info">
                        <h4>
                          <Link to="blog-details">
                            Doccure – Making your clinic painless visit?
                          </Link>
                        </h4>
                        <p>4 Dec 2023</p>
                      </div>
                    </li>
                    <li>
                      <div className="post-thumb">
                        <Link to="blog-details">
                          <img
                            className="img-fluid"
                            src="/src/assets/img/blog/blog-thumb-02.jpg"
                            alt="blog-image"
                          />
                        </Link>
                      </div>
                      <div className="post-info">
                        <h4>
                          <Link to="blog-details">
                            What are the benefits of Online Doctor Booking?
                          </Link>
                        </h4>
                        <p>3 Dec 2023</p>
                      </div>
                    </li>
                    <li>
                      <div className="post-thumb">
                        <Link to="blog-details">
                          <img
                            className="img-fluid"
                            src="/src/assets/img/blog/blog-thumb-03.jpg"
                            alt="blog-image"
                          />
                        </Link>
                      </div>
                      <div className="post-info">
                        <h4>
                          <Link to="blog-details">
                            Benefits of consulting with an Online Doctor
                          </Link>
                        </h4>
                        <p>3 Dec 2023</p>
                      </div>
                    </li>
                    <li>
                      <div className="post-thumb">
                        <Link to="blog-details">
                          <img
                            className="img-fluid"
                            src="/src/assets/img/blog/blog-thumb-04.jpg"
                            alt="blog-image"
                          />
                        </Link>
                      </div>
                      <div className="post-info">
                        <h4>
                          <Link to="blog-details">
                            5 Great reasons to use an Online Doctor
                          </Link>
                        </h4>
                        <p>2 Dec 2023</p>
                      </div>
                    </li>
                    <li>
                      <div className="post-thumb">
                        <Link to="blog-details">
                          <img
                            className="img-fluid"
                            src="/src/assets/img/blog/blog-thumb-05.jpg"
                            alt="blog-image"
                          />
                        </Link>
                      </div>
                      <div className="post-info">
                        <h4>
                          <Link to="blog-details">
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

export default BlogDetails;
