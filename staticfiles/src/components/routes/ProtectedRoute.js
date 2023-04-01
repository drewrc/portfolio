//ProtectedRoute directs user to login page
import { useContext, useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
//import { AuthContext } from "../auth/auth-context/AuthContext";
import Spinner from "../auth-context/spinner/Spinner"; // import your Spinner component

const ProtectedRoute = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    // Display the spinner while the component is loading
    return <Spinner />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
