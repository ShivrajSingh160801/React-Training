import React, { useState } from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import BadgeTwoToneIcon from "@mui/icons-material/BadgeTwoTone";
import AlternateEmailTwoToneIcon from "@mui/icons-material/AlternateEmailTwoTone";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import PublishIcon from "@mui/icons-material/Publish";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const Form = () => {
  const [formData, setFormData] = useState([
    {
      firstName: "",
      lastName: "",
      email: "",
      state: "",
      gender: "",
      company: "",
      role: "",
      address: "",
    },
  ]);

  const [enteredData, setEnteredData] = useState([]);

  const handleStateChange = (event) => {
    setFormData((prevFormData) => [
      {
        ...prevFormData[0],
        state: event.target.value,
      },
    ]);
  };

  const handleGenderChange = (event) => {
    setFormData((prevFormData) => [
      {
        ...prevFormData[0],
        gender: event.target.value,
      },
    ]);
  };

  const handleAddMore = () => {
    setFormData((prevFormData) => [
      ...prevFormData,
      {
        company: "",
        role: "",
        address: "",
      },
    ]);
  };

  const handleCompanyChange = (event, index) => {
    setFormData((prevFormData) => {
      const updatedFormData = [...prevFormData];
      updatedFormData[index].company = event.target.value;
      return updatedFormData;
    });
  };

  const handleRoleChange = (event, index) => {
    setFormData((prevFormData) => {
      const updatedFormData = [...prevFormData];
      updatedFormData[index].role = event.target.value;
      return updatedFormData;
    });
  };

  const handleAddressChange = (event, index) => {
    setFormData((prevFormData) => {
      const updatedFormData = [...prevFormData];
      updatedFormData[index].address = event.target.value;
      return updatedFormData;
    });
  };

  const handleSubmit = (event) => {
    setEnteredData((prevEnteredData) => [...prevEnteredData, formData]);
    setFormData([
      {
        firstName: "",
        lastName: "",
        email: "",
        state: "",
        gender: "",
        company: "",
        role: "",
        address: "",
      },
    ]);
  };

  return (
    <div className="container">
      <form>
        <fieldset className="border border-warning p-3 mt-2">
          <legend>User's Credentials</legend>
          <div className="row mt-3">
            <div className="col-md-4">
              <TextField
                id="first-name"
                label="First Name"
                variant="outlined"
                color="success"
                value={formData[0].firstName}
                onChange={(event) =>
                  setFormData((prevFormData) => [
                    {
                      ...prevFormData[0],
                      firstName: event.target.value,
                    },
                  ])
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <BadgeTwoToneIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div className="col-md-4">
              <TextField
                id="last-name"
                label="Last Name"
                variant="outlined"
                value={formData[0].lastName}
                onChange={(event) =>
                  setFormData((prevFormData) => [
                    {
                      ...prevFormData[0],
                      lastName: event.target.value,
                    },
                  ])
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <BadgeTwoToneIcon />
                    </InputAdornment>
                  ),
                }}
                color="info"
              />
            </div>
            <div className="col-md-4">
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <AlternateEmailTwoToneIcon
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  id="input-with-sx"
                  label="Email"
                  type="email"
                  variant="standard"
                  value={formData[0].email}
                  onChange={(event) =>
                    setFormData((prevFormData) => [
                      {
                        ...prevFormData[0],
                        email: event.target.value,
                      },
                    ])
                  }
                />
              </Box>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-5">
              <div>
                <FormControl sx={{ m: 1, minWidth: 80 }}>
                  <InputLabel id="demo-simple-select-autowidth-label">
                    State
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={formData[0].state}
                    onChange={handleStateChange}
                    autoWidth
                    label="State"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Andhra Pradesh"}>Andhra Pradesh</MenuItem>
                    <MenuItem value={"Arunachal Pradesh"}>
                      Arunachal Pradesh
                    </MenuItem>
                    <MenuItem value={"Assam"}>Assam</MenuItem>
                    <MenuItem value={"Chhattisgarh"}>Chhattisgarh</MenuItem>
                    <MenuItem value={"Goa"}>Goa</MenuItem>
                    <MenuItem value={"Gujarat"}>Gujarat</MenuItem>
                    <MenuItem value={"Haryana"}>Haryana</MenuItem>
                    <MenuItem value={"Himachal Pradesh"}>
                      Himachal Pradesh
                    </MenuItem>
                    <MenuItem value={"Rajasthan"}>Rajasthan</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className="col-md-6">
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Gender
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={formData[0].gender}
                  onChange={handleGenderChange}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-3 align-items-end">
              <h4>Professional Career</h4>
              <Button variant="contained" onClick={handleAddMore}>
                Add More
              </Button>
            </div>
            {formData.map((data, index) => (
              <React.Fragment key={index}>
                <div className="col-md-3">
                  <TextField
                    id={`company-name-${index}`}
                    label="Company Name"
                    value={data.company}
                    onChange={(event) => handleCompanyChange(event, index)}
                  />
                </div>
                <div className="col-md-3">
                  <TextField
                    id={`role-${index}`}
                    label="Role"
                    value={data.role}
                    onChange={(event) => handleRoleChange(event, index)}
                  />
                </div>
                <div className="col-md-3">
                  <TextField
                    id={`address-${index}`}
                    label="Address"
                    value={data.address}
                    onChange={(event) => handleAddressChange(event, index)}
                  />
                </div>
              </React.Fragment>
            ))}
          </div>
          <div className="row mt-3">
            <div className="col">
              <Button
                type="button"
                onClick={() => {
                  handleSubmit();
                  console.log("enteredData", enteredData);
                }}
                variant="outlined"
                startIcon={<PublishIcon />}
              >
                Submit
              </Button>
            </div>
          </div>
        </fieldset>
      </form>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell align="center">Last Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">State</TableCell>
              <TableCell align="center">Gender</TableCell>
              <TableCell align="center">Company</TableCell>
              <TableCell align="center">Role</TableCell>
              <TableCell align="center">Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {enteredData.map((data, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {data[0].firstName}
                </TableCell>
                <TableCell align="center">{data[0].lastName}</TableCell>
                <TableCell align="center">{data[0].email}</TableCell>
                <TableCell align="center">{data[0].state}</TableCell>
                <TableCell align="center">{data[0].gender}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
