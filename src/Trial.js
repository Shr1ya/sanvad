import React from "react";
import { useState } from "react";
import "./components/pages/pages.css";

function Trial() {
  const [formData, setFormData] = useState({
    employeeName: "",
    department: "",
    visitorName: "",
    startDate: "",
    endDate: "",
    visitorCompany: "",
    mobileNumber: "",
    designation: "",
    contactInfo: "",
    meals: [],
    ppe: "",
    vehicleNumber: "",
    visitReason: "",
    visitorAssets: "",
  });

  const [formError, setFormError] = useState("");

  const onChangeHandler = (e) => {
    if (e.target.name === "meals") {
      let copy = { ...formData };

      if (e.target.checked) {
        copy.meals.push(e.target.value);
      } else {
        copy.meals = copy.meals.filter((el) => el !== e.target.value);
      }
      setFormData(copy);
    } else {
      setFormData(() => ({
        ...formData,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const validateForm = () => {
    let err = {};
    if (formData.employeeName === "") {
      err.employeeName = "Employee Name Required";
    }

    if (formData.department === "") {
      err.department = "Department Required";
    }

    if (formData.visitorName === "") {
      err.visitorName = "Visitor Name Required";
    }

    if (formData.startDate === "") {
      err.startDate = "Start Date Required";
    }

    if (formData.endDate === "") {
      err.endDate = "End Date Required";
    }

    if (formData.visitorCompany === "") {
      err.visitorCompany = "Visitor Company Required";
    }

    if (formData.mobileNumber === "") {
      err.mobileNumber = "Mobile Number Required";
    }

    if (formData.designation === "") {
      err.designation = "Visitor Company Required";
    }

    if (formData.contactInfo === "") {
      err.contactInfo = "Contact Information Required";
    }

    if (formData.meals === "") {
      err.meals = "Meals Required";
    }

    if (formData.ppe === "") {
      err.ppe = "PPE Required";
    }

    if (formData.vehicleNumber === "") {
      err.vehicleNumber = "Visitor Number Required";
    }

    if (formData.visitReason === "") {
      err.visitReason = "Visitor Reason Required";
    }

    if (formData.visitorAssets === "") {
      err.visitorAssets = "Visitor Assets Required";
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
    // else {
    //   alert("Invalid form");
    // }
  };

  return (
    <>
      <article>
        <form className="form" onSubmit={onSubmitHandler}>
          <h2 className="heading">Visitor Details</h2>

          <div className="details">
            <label htmlFor="EmployeeName" className="label">
              To whom Visitor Meet
            </label>
            <input
              type="text"
              className="inputField"
              id="employeeName"
              name="employeeName"
              placeholder="Enter Your Name"
              value={formData.employeeName}
              onChange={onChangeHandler}
            />
            <span className="non-valid">{formError.employeeName}</span>
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
              placeholder="Enter Department"
              value={formData.department}
              onChange={onChangeHandler}
            />
            <span className="non-valid">{formError.department}</span>
          </div>

          <div className="details">
            <label htmlFor="startDate" className="label">
              Appointment Start Date-Time
            </label>
            <input
              type="date"
              className="inputField"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={onChangeHandler}
            />
            <span className="non-valid">{formError.startDate}</span>
          </div>

          <div className="details">
            <label htmlFor="end-date" className="label">
              Appointment End Date-Time
            </label>
            <input
              type="date"
              className="inputField"
              id="endDate"
              name="endDate"
              value={formData.endDate}
              onChange={onChangeHandler}
            />
            <span className="non-valid">{formError.endDate}</span>
          </div>

          <hr />

          <div className="details">
            <label htmlFor="visitorName" className="label">
              Visitor Name
            </label>
            <input
              type="text"
              className="inputField"
              id="visitorName"
              name="visitorName"
              placeholder="Enter Visitor Name"
              value={formData.visitorName}
              onChange={onChangeHandler}
            />
            <span className="non-valid">{formError.visitorName}</span>
          </div>

          <div className="details">
            <label htmlFor="visitorCompany" className="label">
              Visitor Company Name
            </label>
            <input
              type="text"
              className="inputField"
              id="visitorCompany"
              name="visitorCompany"
              placeholder="Enter Visitor Company Name"
              value={formData.visitorCompany}
              onChange={onChangeHandler}
            />
            <span className="non-valid">{formError.visitorCompany}</span>
          </div>

          <div className="details">
            <label htmlFor="mobileNumber" className="label">
              Mobile Number
            </label>
            <input
              type="tel"
              className="inputField"
              id="mobileNumber"
              name="mobileNumber"
              placeholder="Enter Mobile Number"
              value={formData.mobileNumber}
              onChange={onChangeHandler}
              maxLength="10"
            />
            <span className="non-valid">{formError.mobileNumber}</span>
          </div>

          <div className="details">
            <label htmlFor="designation" className="label">
              Visitor Designation
            </label>
            <input
              type="text"
              className="inputField"
              id="designation"
              name="designation"
              placeholder="Enter Visitor Designation"
              value={formData.designation}
              onChange={onChangeHandler}
            />
            <span className="non-valid">{formError.designation}</span>
          </div>

          <div className="details">
            <label htmlFor="contactInfo" className="label">
              Contact Information
            </label>
            <input
              type="text"
              className="inputField"
              id="contactInfo"
              name="contactInfo"
              placeholder="Enter Contact Information"
              value={formData.contactInfo}
              onChange={onChangeHandler}
              maxLength="100"
            />
            <span className="non-valid">{formError.contactInfo}</span>
          </div>

          <hr />

          <div className="details">
            <div className="meals">
              <label htmlFor="meals" className="label">
                Meals
              </label>

              <div className="checkbox-opts">
                <div className="checkbox-opt">
                  <input
                    type="checkbox"
                    name="meals"
                    id="checkbox1"
                    label="Breakfast"
                    value="Breakfast"
                    onChange={onChangeHandler}
                  />
                  <label htmlFor="checkbox1">Breakfast</label>
                </div>

                <div className="checkbox-opt">
                  <input
                    type="checkbox"
                    name="meals"
                    id="checkbox2"
                    label="Lunch"
                    value="Lunch"
                    onChange={onChangeHandler}
                  />
                  <label htmlFor="checkbox2">Lunch</label>
                </div>

                <div className="checkbox-opt">
                  <input
                    type="checkbox"
                    name="meals"
                    id="checkbox3"
                    label="Evening Snacks"
                    value="Evening Snacks"
                    onChange={onChangeHandler}
                  />
                  <label htmlFor="checkbox3">Evening Snacks</label>
                </div>

                <div className="checkbox-opt">
                  <input
                    type="checkbox"
                    name="meals"
                    id="checkbox4"
                    label="Dinner"
                    value="Dinner"
                    onChange={onChangeHandler}
                  />
                  <label htmlFor="checkbox4">Dinner</label>
                </div>
              </div>
            </div>
            <span className="non-valid">{formError.meals}</span>
          </div>

          <div className="details">
            <div className="ppe">
              <label htmlFor="ppe" className="label">
                PPE
              </label>
              <div className="radios">
                <div className="radio-opt">
                  <input
                    type="radio"
                    name="ppe"
                    id="radio1"
                    value="Yes"
                    onChange={onChangeHandler}
                  />
                  <label htmlFor="radio1">Yes</label>
                </div>

                <div className="radio-opt">
                  <input
                    type="radio"
                    name="ppe"
                    id="radio2"
                    value="No"
                    onChange={onChangeHandler}
                  />
                  <label htmlFor="radio2">No</label>
                </div>
              </div>
            </div>
            <span className="non-valid">{formError.ppe}</span>
          </div>

          <div className="details">
            <label htmlFor="vehicleNumber" className="label">
              Vehicle Number
            </label>
            <input
              type="text"
              className="inputField"
              id="vehicleNumber"
              name="vehicleNumber"
              placeholder="Enter Vehicle Number"
              value={formData.vehicleNumber}
              onChange={onChangeHandler}
            />
            <span className="non-valid">{formError.vehicleNumber}</span>
          </div>

          <div className="details">
            <label htmlFor="visitReason" className="label">
              Contact Information
            </label>
            <input
              type="text"
              className="inputField"
              id="visitReason"
              name="visitReason"
              placeholder="Enter Contact Information"
              value={formData.contactInfo}
              onChange={onChangeHandler}
              maxLength="200"
            />
            <span className="non-valid">{formError.contactInfo}</span>
          </div>

          <div className="details">
            <label htmlFor="visitorAssets" className="label">
              Assets Information
            </label>
            <input
              type="text"
              className="inputField"
              id="visitorAssets"
              name="visitorAssets"
              placeholder="Enter Assets"
              value={formData.visitorAssets}
              onChange={onChangeHandler}
              maxLength="200"
            />
            <span className="non-valid">{formError.visitorAssets}</span>
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
