import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

export default function RedirectAuth({ children }) {
  const { authenticatedUser } = useAuth();

  if (authenticatedUser.isAdmin === true) {
    return <Navigate to={"/admin"} />;
  }

  return children;
}
