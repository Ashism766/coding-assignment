import React, { useEffect, useState } from "react";
import { IconButton, Button, Grid, TextField } from "@mui/material";

import Close from "@mui/icons-material/HighlightOff";

import { Update } from "./respository";

const initialData = {
  firstName: "",
  lastName: "",
  street: "",
  address: "",
  city: "",
  state: "",
  email: "",
  phone: "",
};

const Modal = ({ data, Visibility, Refresh }) => {
  const token = localStorage.getItem("token");

  const [person, setPerson] = useState(initialData);

  console.log(data);

  useEffect(() => {
    setPerson(data);
  }, [data]);

  return (
    <>
      <div style={{ textAlign: "right" }}>
        {" "}
        <IconButton
          style={{ color: "red", margin: ".5rem .5rem 0rem 0rem" }}
          aria-label="delete"
          onClick={() => {
            Visibility(false);
          }}
        >
          <Close />
        </IconButton>
      </div>

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
              type="submit"
              variant="contained"
              color="primary"
              onClick={async () => {
                const status = await Update({ token: token, data: person });

                if (status === 200 || status === 201) {
                  Refresh(true);

                  Visibility(false);
                } else {
                  alert(
                    "some error occured while updating, please fill the necessary input"
                  );
                }
              }}
            >
              Update Details
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Modal;
