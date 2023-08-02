import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/RemoveCircle";
import { useNavigate } from "react-router-dom";
import Modal from "./modal";
import { getAll, Delete } from "./respository";

const initialData = [
  {
    firstName: "Jane",
    lastName: "Doe",
    street: "Elvnu Street",
    address: "H no 2",
    city: "Delhi",
    state: "Delhi",
    email: "sam@gmail.com",
    phone: "12345678",
  },
];

const TableComponent = ({ isAuthenticated }) => {
  console.log(isAuthenticated, "is Authenticated");

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  const [data, setData] = useState(initialData);
  const [displayModal, setDisplayModal] = useState(false);
  const [item, setItem] = useState(null);

  console.log(token, "this is token in dashboard");

  const refreshWindow = async () => {
    window.location.reload();
  };

  if (isAuthenticated == null || isAuthenticated === false) {
    navigate("/login");
  }

  const getData = async (token) => {
    const data = await getAll({ token: token });
    console.log("data: ", data);
    setData(data);
  };
  useEffect(() => {
    getData(token);
  }, [token]);

  const handleEditClick = (item) => {
    // Implement your edit logic here
    setItem(item);
    setDisplayModal(true);
    console.log("Edit clicked for item:", item);
  };

  const handleDeleteClick = async (item) => {
    const res = await Delete({ token: token, data: item });

    if (res === 200 || res === 201) {
      refreshWindow();
    }
    console.log("Delete clicked for item:", item);
  };

  return (
    <div>
      <h1
        style={{
          margin: "auto",
          textAlign: "center",
          padding: "2rem 0 4rem 0",
        }}
      >
        Customer List
      </h1>

      <Button
        style={{ marginBottom: "1rem", marginLeft: "2.3rem" }}
        onClick={() => {
          navigate("/new-customer");
        }}
        type="submit"
        variant="contained"
        color="primary"
      >
        Add Customer
      </Button>
      <TableContainer
        style={{
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.6)",
          margin: "auto ",
          width: "95%",
        }}
        component={Paper}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Street</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>City</TableCell>
              <TableCell>State</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.firstName}</TableCell>
                <TableCell>{item.lastName}</TableCell>
                <TableCell>{item.street}</TableCell>
                <TableCell>{item.address}</TableCell>
                <TableCell>{item.city}</TableCell>
                <TableCell>{item.state}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.phone}</TableCell>
                <TableCell>
                  <IconButton
                    color="primary"
                    aria-label="edit"
                    onClick={() => handleEditClick(item)}
                  >
                    <EditIcon />
                  </IconButton>
                </TableCell>

                <TableCell>
                  <IconButton
                    style={{ color: "red" }}
                    aria-label="delete"
                    onClick={() => handleDeleteClick(item)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {displayModal && (
        <div
          style={{
            display: displayModal,
            position: "absolute",
            width: "80vw",
            height: "80vh",
            top: "5rem",
            textAlign: "center",
            left: "10vw",
            backgroundColor: "aqua",
            zIndex: 10,
            boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.6)",
          }}
        >
          <Modal
            data={item}
            Visibility={(val) => setDisplayModal(val)}
            Refresh={(val) => {
              refreshWindow();
            }}
          />
        </div>
      )}
    </div>
  );
};

export default TableComponent;
