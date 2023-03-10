import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function AdminProtectedRoute({ children }) {
  const { authenticateUser } = useAuth();
  // console.log(authenticatedUser.role);
  if (authenticateUser.isAdmin === false) {
    return <Navigate to={"/login"} />;
  }
  return children;
}
