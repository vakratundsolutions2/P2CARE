import { Link } from "react-router-dom";
import BreadCrum from "../../components/BreadCrum"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FilterData, GetAllBlogs, resetState } from "../../features/blog/blogSlice";
import { baseUrl } from "../../utils/baseUrl";
import { Pagination } from "antd";
import { GetAllBlogCategory } from "../../features/blogCategory/BlogCategorySlice";

const BlogList = () => {

  const dispatch = useDispatch()
    const [category, setcatagory] = useState("");
    const [title, settitle] = useState("");
    const [page, setPage] = useState("");
    const [limit, setLimit] = useState("");

  useEffect(() => {
    dispatch(GetAllBlogs());
    dispatch(GetAllBlogCategory());
    dispatch(resetState());

  }, [])
  
 useEffect(() => {
   if (
     name !== undefined ||
     category !== undefined ||
     page !== undefined ||
     limit !== undefined 
     
   ) {
     dispatch(
       FilterData({
         title,
         category,
         
         page,
         limit,
         
       })
     );
   } else {
     dispatch(GetAllBlogs());
   }
 }, [dispatch, title, category,  page, limit]);

const { blogs, blogFilter } = useSelector((state) => state.blog);
const {BlogCategories} = useSelector(
  (state) => state.blogcategory);


  return (
    <>
      <BreadCrum location={"All Blogs  "} heading={"All Blogs"} />

      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="row blog-grid-row">
                {blogs?.map((e, i) => {
                  console.log(e);
                  return (
                    <>
                      <div className="col-md-6 col-sm-12" key={i}>
                        <div className="blog grid-blog w-75">
                          <div className="blog-image">
                            <Link to={`/blog-details/${e?._id}`}>
                              <img
                                className="img-fluid blog-thumbnail"
                                src={`${baseUrl}blog/${e?.blogimage}`}
                                alt="Post Image"
                              />
                            </Link>
                          </div>
                          <div className="blog-content">
                            <ul className="entry-meta meta-item">
                              <li>
                                <div className="post-author">
                                  <Link>
                                    Author : <span> {e?.author}</span>
                                  </Link>
                                </div>
                              </li>
                              {/* <li>
                                <i className="far fa-clock"></i> 4 Dec 2023
                              </li> */}
                            </ul>
                            <h3 className="blog-title">
                              <Link to={`/blog-details/${e?._id}`}>
                                {e?.title}
                              </Link>
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
                    <Pagination
                      current={page}
                      onChange={(e) => {
                        setPage(e);
                      }}
                      total={blogFilter?.total}
                      pageSize={blogFilter?.limit}
                    />
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
                        name="title"
                        onChange={(e) => settitle(e.target.value)}
                        value={title}
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

              {/* <div className="card post-widget">
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
                            p2Care – Making your clinic painless visit?
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
                      <div className="post-thumb">
                        <Link to="/blog-details">
                          <img
                            className="img-fluid"
                            src="/src/assets/img/blog/blog-thumb-04.jpg"
                            alt="blog-image"
                          />
                        </Link>
                      </div>
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
              </div> */}

              <div className="card category-widget">
                <div className="card-header">
                  <h4 className="card-title">Blog Categories</h4>
                </div>
                <div className="card-body">
                  <ul className="categories">
                    {BlogCategories?.map((el)=>{
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
                                value={el.name}
                              />
                              <span className="checkmark"></span>
                              {el.name}
                            </label>
                          </li>
                        </>
                      );
                    })}
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

              {/* <div className="card tags-widget">
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
                        p2Care
                      </Link>
                    </li>
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogList