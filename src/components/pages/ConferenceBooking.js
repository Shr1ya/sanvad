import React from "react";
import { useState } from "react";
import "./pages.css";

function Trial() {
  const [formData, setFormData] = useState({
    userName: "15797",
    department: "IT",
    startDate: "",
    endDate: "",
    title: "",
    plantName: "Chinchwad",
    conferenceRoom: "",
  });

  const [formError, setFormError] = useState("");

  const conferenceRooms = [
    { key: " / ", value: " --Select-- " },
    {
      key: "dyaneshwari training room",
      value: "Dyaneshwari Training Room",
    },
    { key: "ganga vc", value: "Ganga VC" },
    { key: "indrayani", value: "Indrayani" },
    { key: "mula", value: "Mula" },
    { key: "mutha", value: "Mutha" },
  ];

  const onChangeHandler = (e) => {
    setFormData(() => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  };

  const validateForm = () => {
    let err = {};
    if (formData.startDate === "") {
      err.startDate = "Start Date Required";
    }

    if (formData.endDate === "") {
      err.endDate = "End Date Required";
    }

    if (formData.title === "") {
      err.title = "Title Required";
    }

    if (formData.conferenceRoom === "") {
      err.conferenceRoom = "Conference Room Required";
    }

    setFormError({ ...err });
    return Object.keys(err).length < 1;
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // console.table(formData);
    let isValid = validateForm();
    if (isValid) {
      alert("Submitted");
    }
  };

  return (
    <>
      <article>
        <form className="form" onSubmit={onSubmitHandler}>
          <h2>Conference Booking</h2>

          <div className="details">
            <label htmlFor="userName" className="label">
              Username ID
            </label>
            <input
              type="text"
              className="inputField"
              id="userName"
              name="userName"
              onChange={onChangeHandler}
              value={formData.userName}
            />
          </div>

          <div className="details">
            <label htmlFor="department" className="label">
              Department
            </label>
            <input
              type="text"
              className="inputField"
              id="department"
              name="department"
              onChange={onChangeHandler}
              value={formData.department}
            />
          </div>

          <br />

          <div className="details">
            <label htmlFor="start-date" className="label">
              Appointment Start Date-Time
            </label>
            <input
              type="datetime-local"
              className="inputField"
              id="startDate"
              name="startDate"
              onChange={onChangeHandler}
              value={formData.startDate}
            />
            <span className="non-valid">{formError.startDate}</span>
          </div>

          <div className="details">
            <label htmlFor="end-date" className="label">
              Appointment End Date-Time
            </label>
            <input
              type="datetime-local"
              className="inputField"
              id="endDate"
              name="endDate"
              onChange={onChangeHandler}
              value={formData.endDate}
            />
            <span className="non-valid">{formError.endDate}</span>
          </div>

          <div className="details">
            <label htmlFor="title" className="label">
              Title
            </label>
            <input
              type="text"
              className="inputField"
              id="title"
              name="title"
              onChange={onChangeHandler}
              value={formData.title}
            />
            <span className="non-valid">{formError.title}</span>
          </div>

          <hr />

          <div className="details">
            <label htmlFor="plantName" className="label">
              Plant Name
            </label>
            <input
              type="text"
              className="inputField"
              id="plantName"
              name="plantName"
              onChange={onChangeHandler}
              value={formData.plantName}
            />
          </div>

          <div className="details">
            <label htmlFor="conferenceRoom" className="label">
              Select Conference Room
            </label>
            <select
              className="dropDown"
              id="conferenceRoom"
              name="conferenceRoom"
              onChange={onChangeHandler}
              value={formData.conferenceRoom}
            >
              {conferenceRooms.map((option) => (
                <option key={option.key} value={option.value}>
                  {option.value}
                </option>
              ))}
            </select>
            <span className="non-valid">{formError.conferenceRoom}</span>
          </div>

          <br />
          <button
            className="submitBtn"
            type="submit"
            onClick={() => console.table(formData)}
          >
            Submit
          </button>
        </form>
      </article>
    </>
  );
}

export default Trial;
