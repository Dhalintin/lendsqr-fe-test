import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function NotFound() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (location.key !== "default") {
      navigate(-1);
    } else {
      if (!isAuthenticated) navigate("/login", { replace: true });
      else navigate("/dashboard");
    }
  }, [navigate, location.key]);

  return null;
}
