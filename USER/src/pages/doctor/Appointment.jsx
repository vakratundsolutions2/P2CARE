import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import { Button } from "antd";
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import Appoinment2 from "../../components/Appoinment";

function Appointment() {

    const { AvailableByID } = useSelector((state) => state?.available);

    const [currentPosition, changeCurrentPosition] = useState(0);
    const [schedule, changeSchedule] = useState([]);

    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    useEffect(() => {
        var date = new Date();
        var setSchedule = []
        for (let i = 0; i < 15; i++) {
            setSchedule.push(weekday[date.getDay()] + ", " + date.getDate() + " " + month[date.getMonth()]);
            date.setDate(date.getDate() + 1);
        }
        changeSchedule(setSchedule);
    }, []);

    console.log("schedule", schedule);
    const handlePrev = () => {
        if (currentPosition != -1) {
            changeCurrentPosition(currentPosition - 1);
        }
        handleSlider();
    }

    const handleNext = () => {
        if (currentPosition <= 13) {
            changeCurrentPosition(currentPosition + 1);
        }
        handleSlider();
    }

    const handleSlider = () => {

    }

    return (
        <>

            {/* <div className="py-5">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="">
                        <Button variant="outline-light" id="prevTab" disabled={(currentPosition === 0) ? true : false}>
                            <LeftOutlined className="p-0" onClick={handlePrev} />
                        </Button>
                    </div>
                    <div className="row d-flex flex-nowrap overflow-auto m-2">
                        {
                            schedule.map((val, index) => {
                                return (
                                    <>
                                        <div className="col-4 px-0 text-center m-0">
                                            <div className="p-2">
                                                {
                                                    (index == 0 || index == 1)
                                                        ? (index == 0) ? "Today" : (index == 1) ? "Tomorrow" : ""
                                                        : val
                                                }
                                            </div>
                                            <div className={(currentPosition == index) ? "py-1 bg-primary" : "py-1"}>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="">
                        <Button variant="outline-light" id="nextTab" disabled={(currentPosition === 14) ? true : false} >
                            <RightOutlined onClick={handleNext} />
                        </Button>
                    </div>
                </div>
                <div className="row d-flex flex-nowrap overflow-auto m-2">
                    {
                        schedule.map((val, index) => {
                            return (
                                <>
                                    <div className="col-12 p-2">
                                        <div className="card p-4 m-0 border-dark">
                                            <div>
                                                {
                                                    (index == 0 || index == 1)
                                                        ? (index == 0) ? "Today" : (index == 1) ? "Tomorrow" : ""
                                                        : val
                                                }
                                            </div>
                                            <hr />
                                            <div>
                                                <div className="schedule-cont">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="time-slot">
                                                                <ul className="clearfix">
                                                                    {AvailableByID?.bookingavailabilityInformation?.map(
                                                                        (days, index) => {
                                                                            return val.slice(0, 3) ==
                                                                                days.day ? (
                                                                                <>
                                                                                    <li key={index}>
                                                                                        {days.bookingtime?.map((timeSlots) => {
                                                                                            return (
                                                                                                <>
                                                                                                    <div
                                                                                                        className="form-check-inline visits me-0"
                                                                                                        key="{index}"
                                                                                                    >
                                                                                                        <label className="visit-btns">
                                                                                                            <input
                                                                                                                type="radio"
                                                                                                                name="time"
                                                                                                                className="form-check-input"
                                                                                                                id=""
                                                                                                                value={timeSlots}
                                                                                                            />
                                                                                                            <span
                                                                                                                className="visit-rsn"
                                                                                                                data-bs-toggle="tooltip"
                                                                                                            >
                                                                                                                {timeSlots}
                                                                                                            </span>{" "}
                                                                                                        </label>
                                                                                                    </div>
                                                                                                </>
                                                                                            );
                                                                                        })}
                                                                                    </li>
                                                                                    {
                                                                                        ((days.bookingtime).length === 0)
                                                                                            ?
                                                                                            <div>
                                                                                                <h4>
                                                                                                    No Any Schedule Found !
                                                                                                </h4>
                                                                                            </div>
                                                                                            : ""
                                                                                    }
                                                                                </>
                                                                            ) : null;
                                                                        }
                                                                    )}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div> */}
            <Appoinment2 />
        </>
    )
}

export default Appointment
