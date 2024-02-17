import { Rate } from "antd";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import relativeTime from "dayjs/plugin/relativeTime";
import BreadCrum from "../components/BreadCrum";

const Review = () => {
  dayjs.extend(relativeTime);

  const { DRdata } = useSelector((state) => state.auth.user);

  return (
    <>
      <div className="main-wrapper">
        <BreadCrum location={"Reviews  "} heading={"Reviews "} />

        <div className="content ">
          {DRdata?.ratings?.length === 0 ? (
            <div className="row justify-content-center ">No data available</div>
          ) : (
            <div className="container">
              <div className="col-md-7 col-lg-8 col-xl-9">
                <div className="doc-review review-listing">
                  {/* <!-- Review Listing --> */}
                  <ul className="comments-list">
                    {/* <!-- Comment List --> */}

                    {DRdata?.ratings?.map((el, i) => {
                      const dt = el?.date;
                      const dt2 = dayjs(dt)?.format("DD-MM-YYYY");
                      const comentTime = dayjs(dt)?.fromNow();

                      console.log(el);
                      return (
                        <>
                          <li key={i}>
                            <div className="comment">
                              {/* <img
                        className="avatar rounded-circle"
                        alt="User Image"
                        src="assets/img/patients/patient.jpg"
                      /> */}
                              <div className="comment-body">
                                <h6 className="">{el?.postedby?.Username}</h6>
                                <p className="comment-content">{el?.comment}</p>
                                <div className="meta-data">
                                  {dt2}
                                  <span className="comment-author">
                                    {el?.posetby?.Name}
                                  </span>
                                  <span className="comment-date">
                                    {comentTime}
                                  </span>
                                  <div className="   "></div>
                                </div>
                                <div className="float-end ">
                                  <Rate disabled={true} value={el?.star} />
                                </div>
                              </div>
                            </div>

                            {/* <!-- Comment Reply --> */}

                            {/* <!-- /Comment Reply --> */}
                          </li>
                        </>
                      );
                    })}

                    {/* <!-- /Comment List --> */}
                  </ul>
                  {/* <!-- /Comment List --> */}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Review;
