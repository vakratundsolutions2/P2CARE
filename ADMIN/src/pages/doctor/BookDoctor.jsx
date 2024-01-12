

import { useNavigate } from "react-router-dom";
import CustomInput from "../../components/CustomInput";
import { IoArrowBack } from "react-icons/io5";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  addtime,
  alltime,
  deletetime,
  resetState,
  updatetime,
} from "../../features/time/timeSlice";
import { TimePicker } from "antd";
import moment from "moment";
import dayjs from "dayjs";

const BookDoctor = () => {
  const [TIME, setTIME] = useState([])
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const timeState = useSelector((state) => state.time.AllTimes);
  const TimeId = location.pathname.split("/")[3];

  useEffect(() => {
    dispatch(alltime());
    dispatch(resetState());
  }, []);

  const updateData = timeState?.filter((e) => {
    return e._id === TimeId;
  });
  // console.log(updateData[0].Time[0]);
  const formik = useFormik({
    initialValues: {
      Time:
        updateData ? updateData[0].Time : "",
      
      
      status: updateData ? updateData[0]?.status : "",
    },

    onSubmit: (values) => {
      console.log(values);
      if (TimeId === undefined || "") {
        dispatch(addtime(values));
        dispatch(resetState());
      } else {
        dispatch(updatetime({ id: TimeId, formData: values }));
        dispatch(resetState());
      }
      console.log(TIME);
    },
  });

  return (
    <>
      <div className="">
        <button
          className="ms-3 fs-2 btn  bg-transparent border-0"
          onClick={() => navigate(-1)}
        >
          <IoArrowBack />
        </button>
      </div>
      <div className="my-3 mb-4 justify-content-center d-flex">
        <div className="col-sm-8">
          <div className="card p-5">
            <h3 className=" title text-center mb-3 ">
              {TimeId !== undefined ? "Edit" : "Add"} Booking Time
            </h3>
            <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
              <CustomInput
                type="text"
                label="-- 24HR -- "
                name="Time"
                onChng={formik.handleChange("Time")}
                onBlr={formik.handleBlur("Time")}
                format={"HH:mm"}
                val={formik.values.Time}
              />
              {/* <TimePicker.RangePicker
                name="Time"
                onChange={(value) =>
                  formik.setFieldValue('Time',[
                    dayjs(value[0]).format("HH:mm"),
                    dayjs(value[1]).format("HH:mm"),
                  ])
                }
                defaultValue={TIME}
                format={"HH:mm"}
              /> */}
              <div className="error">
                {formik.touched.Time && formik.errors.Time}
              </div>

              <select
                name="status"
                onChange={formik.handleChange("status")}
                onBlur={formik.handleBlur("status")}
                value={formik.values.status}
                className="form-control form-select py-3 mb-3"
              >
                <option selected>Status</option>
                <option value="draft">Draft</option>
                <option value="publish">Publish</option>
              </select>
              <div className="error">
                {formik.touched.status && formik.errors.status}
              </div>

              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDoctor;
