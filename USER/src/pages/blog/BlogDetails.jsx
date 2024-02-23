import { Link, useLocation } from "react-router-dom";
import BreadCrum from "../../components/BreadCrum";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GetABlog, resetState } from "../../features/blog/blogSlice";
import { baseUrl } from "../../utils/baseUrl";
import Seo from "../../components/seo/SEO";

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
  const { SingleBlog } = useSelector((state) => state.blog);

  return (
    <>
      <Seo
        metaTitle={SingleBlog?.metaTitle}
        metaDescription={SingleBlog?.metaDescription}
        metaTags={SingleBlog?.metaTags}
        ogmetadescription={SingleBlog?.ogmetadescription}
        ogmetatitle={SingleBlog?.ogmetatitle}
        ogmetaimage={`${baseUrl}blog/${SingleBlog?.ogmetaimage}`}
      />

      <BreadCrum location={"Blog Details "} heading={"Blog Details"} />

      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-view">
                <div className="blog blog-single-post ">
                  <div className="blog-image">
                    <Link>
                      <img
                        alt="blog-image"
                        src={`${baseUrl}blog/${SingleBlog?.blogimage}`}
                        className="img-fluid w-50"
                      />
                    </Link>
                  </div>
                  <h3 className="blog-title">
                    <Link>{SingleBlog?.title}</Link>
                  </h3>
                  <div className="blog-info clearfix">
                    <div className="post-left">
                      <ul>
                        <li>
                          <div className="post-author">
                            <Link>
                              <span>{SingleBlog?.author}</span>
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="blog-content">
                    <p className="mb-0">{SingleBlog?.blogcontent}</p>
                  </div>
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
