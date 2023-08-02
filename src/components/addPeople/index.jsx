import React, { useState, useEffect } from "react";
import { TextField, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Create from "./repository";

const initialValues = {
  firstName: "",
  lastName: "",

  street: "",
  address: "",

  city: "",
  state: "",
  email: "",
  phon: "",
};

const AddNewCustomer = ({ isAuthenticated }) => {
  console.log(isAuthenticated, "is Authenticated");
  const [person, setPerson] = useState(initialValues);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div style={{ width: "100vw" }}>
      <h1 style={{ textAlign: "center" }}>Add a new customer</h1>
      <Grid container spacing={2} sx={{ pt: "10vh" }} justifyContent="center">
        <Grid item xs={7} container spacing={2} justifyContent="center">
          <Grid item sm={12} lg={6} md={6} xs={12}>
            <TextField
              fullWidth
              type="text"
              value={person.firstName}
              label={"first name"}
              variant="outlined"
              onChange={(e) => {
                setPerson({ ...person, firstName: e.target.value });
              }}
            />
          </Grid>
          <Grid item sm={12} lg={6} md={6} xs={12}>
            <TextField
              fullWidth
              value={person.lastName}
              label={"last name"}
              variant="outlined"
              onChange={(e) => {
                setPerson({ ...person, lastName: e.target.value });
              }}
            />
          </Grid>

          <Grid item sm={12} lg={6} md={6} xs={12}>
            <TextField
              fullWidth
              type="text"
              name="username"
              value={person.street}
              label={"street"}
              variant="outlined"
              onChange={(e) => {
                setPerson({ ...person, street: e.target.value });
              }}
            />
          </Grid>
          <Grid item sm={12} lg={6} md={6} xs={12}>
            <TextField
              fullWidth
              value={person.address}
              label={"Address"}
              variant="outlined"
              onChange={(e) => {
                setPerson({ ...person, address: e.target.value });
              }}
            />
          </Grid>

          <Grid item sm={12} lg={6} md={6} xs={12}>
            <TextField
              fullWidth
              type="text"
              name="username"
              value={person.city}
              label={"City"}
              variant="outlined"
              onChange={(e) => {
                setPerson({ ...person, city: e.target.value });
              }}
            />
          </Grid>
          <Grid item sm={12} lg={6} md={6} xs={12}>
            <TextField
              fullWidth
              value={person.state}
              label={"state"}
              variant="outlined"
              onChange={(e) => {
                setPerson({ ...person, state: e.target.value });
              }}
            />
          </Grid>

          <Grid item sm={12} lg={6} md={6} xs={12}>
            <TextField
              fullWidth
              type="text"
              name="username"
              value={person.email}
              label={"Email"}
              variant="outlined"
              onChange={(e) => {
                setPerson({ ...person, email: e.target.value });
              }}
            />
          </Grid>
          <Grid item sm={12} lg={6} md={6} xs={12}>
            <TextField
              fullWidth
              value={person.phone}
              label={"Phone Number"}
              variant="outlined"
              onChange={(e) => {
                setPerson({ ...person, phone: e.target.value });
              }}
            />
          </Grid>

          <Grid
            item
            xs={12}
            style={{ display: "flex", flexDirection: "row-reverse" }}
          >
            <Button
              onClick={async () => {
                const res = await Create({ token: token, data: person });
                console.log(res);
                if (res === 200 || res === 201) {
                  navigate("/dashboard");
                }
              }}
              type="submit"
              variant="contained"
              color="primary"
            >
              AddNewCustomer
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddNewCustomer;
