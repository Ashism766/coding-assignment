// components/ProtectedRoute.js

import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, isAuthenticated }) => {

  console.log(isAuthenticated, "isAuthenticated")
  const navigate = useNavigate();

  return isAuthenticated ? <Component /> : navigate("/login");
};

export default ProtectedRoute;
