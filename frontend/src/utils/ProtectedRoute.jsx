// ProtectedRoute.jsx
import { Navigate } from "react-router";

export default function ProtectedRoute({ children }) {
  const isLoggedIn = !!localStorage.getItem("token"); // token hai toh logged in

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;  // redirect to login
  }

  return children; // logged in hai toh page dikhao
}