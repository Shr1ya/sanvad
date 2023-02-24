import React, { useState } from "react";
import "../pages/pages.css";

const ManageEmployee = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    type: "",
    department: "",
    employeeNumber: "",
    manager: "",
    gender: "",
    status: "",
    dob: "",
    plant: "",
    emergencyContact: "",
    job: "",
    mobileNumber: "",
    emailId: "",
    role: "",
    designation: "",
    password: "",
  });

  const [formError, setFormError] = useState("");

  const departments = [
    { key: "--select--", value: "--Select--" },
    { key: "accounts & finance", value: "Accounts & Finance" },
    { key: "admin, HR, CS, legal & ia", value: "Admin, HR, CS, Legal & IA" },
    { key: "ador international", value: "Ador International" },
    {
      key: "biz strategy/ccc/technical support",
      value: "Biz Strategy/ CCC/Technical Support",
    },
    { key: "consumables manufacturing", value: "Consumables Manufacturing" },
    { key: "consumables tdc", value: "Consumables TDC" },
    { key: "director's office", value: "Director's Office" },
    { key: "equipment manufacturing", value: "Equipment Manufacturing" },
    { key: "equipment tdc", value: "Equipment TDC" },
    { key: "fped manufacturing", value: "FPED Manufacturing" },
    {
      key: "fped sales, design, costing, pm",
      value: "FPED Sales, Design, Costing, PM",
    },
  ];

  const genders = [
    { key: "--select--", value: "--Select--" },
    { key: "female", value: "Female" },
    { key: "male", value: "Male" },
  ];

  const statuses = [
    { key: "--select--", value: "--Select--" },
    { key: "single", value: "Single" },
    { key: "married", value: "Married" },
  ];

  const plants = [
    { key: "--select--", value: "--Select--" },
    { key: "corporate", value: "Corporate" },
    { key: "mumbai (H.O.)", value: "Mumbai (H.O.)" },
    { key: "ador international", value: "Ador International" },
    {
      key: "biz strategy/ccc/technical support",
      value: "Biz Strategy/ CCC/Technical Support",
    },
    { key: "consumables manufacturing", value: "Consumables Manufacturing" },
    { key: "consumables tdc", value: "Consumables TDC" },
  ];

  const jobs = [
    { key: "--select--", value: "--Select--" },
    { key: "constant", value: "Constant" },
    { key: "employee", value: "Employee" },
    { key: "payroll", value: "Payroll" },
  ];

  const roles = [
    { key: "--select--", value: "--Select--" },
    { key: "admin", value: "Admin" },
    { key: "corporate - it", value: "Corporate - IT" },
    { key: "corporate - hr", value: "Corporate - HR" },
    { key: "corporate - marketing", value: "Corporate - Marketing" },
    { key: "md", value: "MD" },
    { key: "capex - admin", value: "Capex - Admin" },
    { key: "manage suggestion", value: "Manage Suggestion" },
    { key: "hr-admin", value: "HR-Admin" },
    { key: "hr-approver", value: "HR-Approver" },
    { key: "it-admin", value: "IT-Admin" },
    { key: "it-approver", value: "IT-Approver" },
    { key: "event-admin", value: "Event-Admin" },
    { key: "event-approver", value: "Event-Approver" },
    { key: "newsletter-admin", value: "Newsletter-Admin" },
    { key: "newsletter-approver", value: "Newsletter-Approver" },
    { key: "announcement-admin", value: "Announcement-Admin" },
    { key: "announcement-approver", value: "Announcement-Approver" },
    { key: "corporate-news-admin", value: "Corporate-News-Admin" },
    { key: "corporate-news-approver", value: "Corporate-News-Approver" },
    { key: "security-gate", value: "Security-Gate" },
    { key: "default", value: "Default" },
    { key: "sanjay-deputy manager", value: "Sanjay-Deputy Manager" },
    {
      key: "nidhi jaiswal-assistant manager",
      value: "Nidhi Jaiswal-Assistant Manager",
    },
    {
      key: "dinesh bawaskar-senior engineer",
      value: "Dinesh Bawaskar-Senior Engineer",
    },
    {
      key: "prachi dhoke-deputy manager strategic hr",
      value: "Prachi Dhoke-Deputy Manager Strategic HR",
    },
    {
      key: "avinash attarde-manager it infra",
      value: "Avinash Attarde-Manager IT Infra",
    },
    {
      key: "manoj pandey-head  human resources",
      value: "Manoj Pandey-Head  Human Resources",
    },
    {
      key: "kunal dani-assistant manager - marketing",
      value: "Kunal Dani-Assistant Manager - Marketing",
    },
    {
      key: "aniruddha vilekar-sales head,marketing awl",
      value: "Aniruddha Vilekar-Sales Head,Marketing AWL",
    },
    {
      key: "vaishali raval-plant hr operations",
      value: "Vaishali Raval-Plant HR Operations",
    },
    {
      key: "vaidehi hatkar-deputy manager administration",
      value: "Vaidehi Hatkar-Deputy Manager Administration",
    },
    {
      key: "thomas joseph-plant admin & hr",
      value: "Thomas Joseph-Plant Admin & HR",
    },
    {
      key: "aadesh vichare-senior officer",
      value: "Aadesh Vichare-Senior Officer",
    },
    { key: "suraj pol-senior officer", value: "Suraj Pol-Senior Officer" },
    { key: "security gate-pune", value: "Security Gate-Pune" },
    { key: "security gate-raipur", value: "Security Gate-Raipur" },
    { key: "security gate-silvasa", value: "Security Gate-Silvasa" },
    { key: "ajay shinde role", value: "Ajay Shinde Role" },
    { key: "security gate-mumbai", value: "Security gate-Mumbai" },
    { key: "ticket System admin", value: "Ticket System Admin" },
    { key: "it sysadmin", value: "IT Sysadmin" },
    { key: "capex role", value: "Capex Role" },
    { key: "default with capex", value: "Default with Capex" },
    { key: "ho other employee", value: "HO Other Employee" },
    { key: "capex all access", value: "Capex all access" },
    { key: "ticket system", value: "Ticket System" },
    { key: "3dfl", value: "3DFL" },
  ];

  const types = [
    { key: "--select--", value: "--Select--" },
    { key: "full-time", value: "Full-time" },
    { key: "part-time", value: "Part-time" },
  ];

  const onChangeHandler = (e) => {
    setFormData(() => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  };

  const validateForm = () => {
    let err = {};

    if (formData.firstName === "") {
      err.firstName = "First Name Required*";
    }

    if (formData.lastName === "") {
      err.lastName = "Last Name Required*";
    }

    if (formData.type === "") {
      err.type = "Select Employment Type*";
    }

    if (formData.department === "") {
      err.department = "Select Department*";
    }

    if (formData.employeeNumber === "") {
      err.employeeNumber = "Employment Number Required*";
    }

    if (formData.manager === "") {
      err.manager = "Manager Required*";
    }

    if (formData.gender === "") {
      err.gender = "Select Employment Type*";
    }

    if (formData.status === "") {
      err.status = "Select Marital Status*";
    }

    if (formData.dob === "") {
      err.dob = "Date of Birth Required*";
    }

    if (formData.plant === "") {
      err.plant = "Select Plant*";
    }

    if (formData.emergencyContact === "") {
      err.emergencyContact = "Emergency Contact Required*";
    }

    if (formData.job === "") {
      err.job = "Job Description Required*";
    }

    if (formData.mobileNumber === "") {
      err.mobileNumber = "Mobile Number Required*";
    }

    if (formData.emailId === "") {
      err.emailId = "Email ID Required*";
    }

    if (formData.role === "") {
      err.role = "Select Role*";
    }

    if (formData.designation === "") {
      err.designation = "Designation Required*";
    }

    if (formData.password === "") {
      err.password = "Password Required*";
    }

    setFormError({ ...err });
    return Object.keys(err).length < 1;
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.table(formData);
    let isValid = validateForm();
    if (isValid) {
      alert("Submitted");
    }
    // else {
    //   alert("Fill Required");
    // }
  };

  return (
    <>
      <article>
        <form className="form" onSubmit={onSubmitHandler}>
          <h2 className="heading">Employee Details</h2>

          <div className="details">
            <label htmlFor="firstName" className="label">
              First Name
            </label>
            <input
              type="text"
              className="inputField"
              id="firstName"
              name="firstName"
              placeholder="Enter First Name"
              value={formData.firstName}
              onChange={onChangeHandler}
            />
            <span className="non-valid">{formError.firstName}</span>
          </div>

          <div className="details">
            <label htmlFor="lastName" className="label">
              Last Name
            </label>
            <input
              type="text"
              className="inputField"
              id="lastName"
              name="lastName"
              placeholder="Enter Last Name"
              value={formData.lastName}
              onChange={onChangeHandler}
            />
            <span className="non-valid">{formError.lastName}</span>
          </div>

          <div className="details">
            <label htmlFor="employmentType" className="label">
              Employment Type
            </label>
            <select
              className="dropDown"
              id="type"
              name="type"
              value={formData.type}
              onChange={onChangeHandler}
            >
              {types.map((option) => (
                <option key={option.key} value={option.value}>
                  {option.value}
                </option>
              ))}
            </select>
            <span className="non-valid">{formError.type}</span>
          </div>

          <div className="details">
            <label htmlFor="department" className="label">
              Department
            </label>
            <select
              className="dropDown"
              id="department"
              name="department"
              value={formData.department}
              onChange={onChangeHandler}
            >
              {departments.map((option) => (
                <option key={option.key} value={option.value}>
                  {option.value}
                </option>
              ))}
            </select>
            <span className="non-valid">{formError.department}</span>
          </div>

          <div className="details">
            <label htmlFor="employeeNumber" className="label">
              Employee Number
            </label>
            <input
              type="text"
              className="inputField"
              id="employeeNumber"
              name="employeeNumber"
              placeholder="Employee Number"
              maxLength="10"
              value={formData.employeeNumber}
              onChange={onChangeHandler}
            />
            <span className="non-valid">{formError.employeeNumber}</span>
          </div>

          <div className="details">
            <label htmlFor="manager" className="label">
              Manager
            </label>
            <input
              type="text"
              className="inputField"
              id="manager"
              name="manager"
              placeholder="Enter Full Name"
              value={formData.manager}
              onChange={onChangeHandler}
            />
            <span className="non-valid">{formError.manager}</span>
          </div>

          <hr />

          <div className="details">
            <label htmlFor="gender" className="label">
              Gender
            </label>
            <select
              className="dropDown"
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={onChangeHandler}
            >
              {genders.map((option) => (
                <option key={option.key} value={option.value}>
                  {option.value}
                </option>
              ))}
            </select>
            <span className="non-valid">{formError.gender}</span>
          </div>

          <div className="details">
            <label htmlFor="status" className="label">
              Marital Status
            </label>
            <select
              className="dropDown"
              id="status"
              name="status"
              value={formData.status}
              onChange={onChangeHandler}
            >
              {statuses.map((option) => (
                <option key={option.key} value={option.value}>
                  {option.value}
                </option>
              ))}
            </select>
            <span className="non-valid">{formError.status}</span>
          </div>

          <div className="details">
            <label htmlFor="dob" className="label">
              Date of Birth
            </label>
            <input
              type="date"
              className="dob"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={onChangeHandler}
            />
            <span className="non-valid">{formError.dob}</span>
          </div>

          <div className="details">
            <label htmlFor="plant" className="label">
              Plant Name
            </label>
            <select
              className="dropDown"
              id="plant"
              name="plant"
              value={formData.plant}
              onChange={onChangeHandler}
            >
              {plants.map((option) => (
                <option key={option.key} value={option.value}>
                  {option.value}
                </option>
              ))}
            </select>
            <span className="non-valid">{formError.plant}</span>
          </div>

          <div className="details">
            <label htmlFor="emergencyContact" className="label">
              Emergency Contact
            </label>
            <input
              type="tel"
              className="inputField"
              id="emergencyContact"
              name="emergencyContact"
              placeholder="Enter Contact Number"
              value={formData.emergencyContact}
              onChange={onChangeHandler}
              maxLength="10"
            />
            <span className="non-valid">{formError.emergencyContact}</span>
          </div>

          <hr />

          <div className="details">
            <label htmlFor="job" className="label">
              Job Role
            </label>
            <select
              className="dropDown"
              id="job"
              name="job"
              value={formData.job}
              onChange={onChangeHandler}
            >
              {jobs.map((option) => (
                <option key={option.key} value={option.value}>
                  {option.value}
                </option>
              ))}
            </select>
            <span className="non-valid">{formError.job}</span>
          </div>

          <div className="details">
            <label htmlFor="mobileNumber" className="label">
              {" "}
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
            <label htmlFor="email" className="label">
              Email ID
            </label>
            <input
              type="email"
              className="inputField"
              id="emailId"
              name="emailId"
              placeholder="abc@adorians.com"
              value={formData.emailId}
              onChange={onChangeHandler}
            />
            <span className="non-valid">{formError.emailId}</span>
          </div>

          <hr />

          <div className="details">
            <label htmlFor="role" className="label">
              Role Assigned
            </label>
            <select
              className="dropDown"
              id="role"
              name="role"
              value={formData.role}
              onChange={onChangeHandler}
            >
              {roles.map((option) => (
                <option key={option.key} value={option.value}>
                  {option.value}
                </option>
              ))}
            </select>
            <span className="non-valid">{formError.role}</span>
          </div>

          <div className="details">
            <label htmlFor="designation" className="label">
              Employee Designation
            </label>
            <input
              type="text"
              className="inputField"
              id="designation"
              name="designation"
              placeholder="Enter Designation"
              value={formData.designation}
              onChange={onChangeHandler}
            />
            <span className="non-valid">{formError.designation}</span>
          </div>

          <div className="details">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type="text"
              className="inputField"
              id="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={onChangeHandler}
              maxLength="10"
            />
            <span className="non-valid">{formError.password}</span>
          </div>

          <br />
          <button
            className="submitBtn"
            type="submit"
            onClick={() => console.log(formData)}
          >
            Submit
          </button>
        </form>
      </article>
    </>
  );
};

export default ManageEmployee;
