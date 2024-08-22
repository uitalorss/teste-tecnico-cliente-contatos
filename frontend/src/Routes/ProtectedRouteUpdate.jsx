import { Navigate } from "react-router-dom";
import { Update } from "../Pages/update";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const ProtectedRouteUpdate = () => {
  const { authenticated } = useContext(AuthContext);

  if (!authenticated) {
    return <Navigate to="/" />;
  }
  return <Update />;
};
