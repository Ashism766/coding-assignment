import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/index";
import Dashboard from "./components/dashboard/index";
import NotFound from "./components/notFound/index";
import AddItem from "./components/addPeople/index";

const App = () => {
  const isAuthenticated = localStorage.getItem("token") !== null;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={<Dashboard isAuthenticated={isAuthenticated} />}
        />
        <Route
          path="/"
          element={<Dashboard isAuthenticated={isAuthenticated} />}
        />

        <Route
          path="/new-customer"
          element={<AddItem isAuthenticated={isAuthenticated} />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
