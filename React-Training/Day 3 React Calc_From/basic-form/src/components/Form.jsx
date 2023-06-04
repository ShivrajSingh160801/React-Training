import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "First Name",
    lastName: "Last Name",
    city: "City"
  });

  const [enteredData, setEnteredData] = useState({
    firstName: "Entred First Name",
    lastName: "Entred Last Name",
    city: "Entred City"
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('formData: ', formData);
    setEnteredData(formData);
  };

  return (
    <>
      <form className="bg-light" >
        <div className="row px-3">
          <div class="col-md-4">
            <label for="fName" class="form-label">
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
          <div class="col-md-4">
            <label for="lName" class="form-label">
              Last name
            </label>
            <input
              type="text"
              class="form-control"
              id="lName"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              required
            />
          </div>
          <div class="col-md-4">
            <label for="city" class="form-label">
              City
            </label>
            <input
              type="text"
              class="form-control"
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
            <button class="btn btn-primary" type="button" onClick={handleSubmit}>
              Submit form
            </button>
          </div>
        </div>
      </form>

      <div className="row px-5 mt-5">
        <h4 className="text-center">Entered Details</h4>
        <table class="table table-info">
          <thead>
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">City</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{enteredData.firstName}</td>
              <td>{enteredData.lastName}</td>
              <td>{enteredData.city}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Form;
