import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    city: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <form className="bg-light" >
        <div className="row px-3">
          <div className="col-md-4">
            <label htmlFor="fName" className="form-label">
              First name
            </label>
            <input
              type="text"
              className="form-control"
              id="fName"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="lName" className="form-label">
              Last name
            </label>
            <input
              type="text"
              className="form-control"
              id="lName"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="city" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="city"
              value={formData.city}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
              required
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-12 text-center">
            <button className="btn btn-primary" type="submit" onClick={handleSubmit}>
              Submit form
            </button>
          </div>
        </div>
      </form>

      {submitted && (
        <div className="row px-5 mt-5">
          <h4 className="text-center">Entered Details</h4>
          <table className="table table-info">
            <thead>
              <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">City</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{formData.firstName}</td>
                <td>{formData.lastName}</td>
                <td>{formData.city}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Form;
