import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { baseUrl } from '../utils/baseUrl';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllBlogs } from '../features/blog/blogSlice';


const Articles = () => {
    const blog = useSelector((state) => state.blog.AllBlogs);
    const dispatch = useDispatch()
    useEffect(() => {
          dispatch(GetAllBlogs());

    }, [])
    const blogState = blog?.slice(0, 4);

  return (
    <>
      <section className="articles-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 aos" data-aos="fade-up">
              <div className="section-header-one text-center">
                <h2 className="section-title">Latest Articles</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {blogState?.map((e, i) => {
              return (
                <>
                  <div
                    className="col-lg-6 col-md-6 d-flex aos"
                    key={i}
                    data-aos="fade-up"
                  >
                    <div className="articles-grid w-100">
                      <div className="articles-info">
                        <div className="articles-left">
                          <a href="blog-details.jsx">
                            <div className="articles-img">
                              <img
                                src={`${baseUrl}blog/${e.blogimage}`}
                                className="img-fluid"
                                alt="John Doe"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="articles-right">
                          <div className="articles-content">
                            <ul className="articles-list nav">
                              <li>
                                <i className="feather-user"></i> {e?.author}
                              </li>
                              {/* <li>

                                <i className="feather-calendar"></i> 13 Aug,
                                2023
                              </li> */}
                            </ul>
                            <h4>
                              <Link to={`blog-details/${e?._id}`}>
                                {e?.title}{" "}
                              </Link>
                            </h4>
                            <p>{e?.blogcontent}</p>
                            <Link to={`blog-details/${e?._id}`} className="btn">
                              View Blog
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Articles