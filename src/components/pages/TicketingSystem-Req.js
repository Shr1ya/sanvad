import React, { useState } from "react";
import "./pages.css";

<meta name="viewport" content="width=device-width, initial-scale=1"></meta>;

const TicketingRequester = () => {
  const [formData, setFormData] = useState({
    description: "",
    ticketType: "",
    requirementType: "",
    file: "",
  });

  const [formError, setFormError] = useState("");

  const requirementTypes = [
    { key: " --select-- ", value: " --Select--  " },
    { key: "it infra", value: "IT Infra" },
    { key: "it facilities", value: "IT Facilities" },
  ];

  const ticketTypes = [
    { key: " --select-- ", value: " --Select--  " },
    { key: "it infra", value: "IT Infra" },
    { key: "it facilities", value: "IT Facilities" },
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
          <h2>Create Ticket</h2>

          <div className="row">
            <div className="col-md">
              <div className="details">
                <label htmlFor="description" className="label">
                  Requirement Description
                </label>
                <textarea
                  className="inputField"
                  id="description"
                  name="description"
                  placeholder="Give Requirement Description"
                  required
                  value={formData.description}
                  onChange={onChangeHandler}
                />
                <span className="non-valid">{formError.description}</span>
              </div>
            </div>

            <div className="col-md">
              <div className="details">
                <label htmlFor="ticketType" className="label">
                  Ticket Type
                </label>
                <select
                  className="dropDown"
                  // disabled={true}
                  id="ticketType"
                  name="ticketType"
                  value={formData.ticketType}
                  onChange={onChangeHandler}
                >
                  {ticketTypes.map((option) => (
                    <option key={option.key} value={option.value}>
                      {option.value}
                    </option>
                  ))}
                </select>
                <span className="non-valid">{formError.ticketType}</span>
              </div>
              {/*non-editable, disabled*/}

              <div className="details">
                <label htmlFor="requirementType" className="label">
                  Requirement Type
                </label>
                <select
                  className="dropDown"
                  disabled={true}
                  id="requirementType"
                  name="requirementType"
                  value={formData.requirementType}
                  onChange={onChangeHandler}
                >
                  {requirementTypes.map((option) => (
                    <option key={option.key} value={option.value}>
                      {option.value}
                    </option>
                  ))}
                </select>
                <span className="non-valid">{formError.ticketType}</span>
              </div>
              {/*non-editable, disabled*/}
            </div>
          </div>

          <hr />

          <div className="details">
            <label htmlFor="upload" className="label">
              Attach
            </label>
            <div className="UploadArea">
              <div className="uploadFile">
                <input
                  type="file"
                  className="inputField"
                  id="file"
                  name="file"
                  onChange={onChangeHandler}
                  value={formData.file}
                />
              </div>
            </div>
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
};

export default TicketingRequester;
