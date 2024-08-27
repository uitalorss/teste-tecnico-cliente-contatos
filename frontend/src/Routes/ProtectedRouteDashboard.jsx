import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Dashboard } from "../Pages/Dashboard";
import { useContext } from "react";

export const ProtectedRouteDashboard = () => {
  const { authenticated } = useContext(AuthContext);
  
  if (!authenticated) {
    return <Navigate to="/" />;
  }
  return <Dashboard />;
};
