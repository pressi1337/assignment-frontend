import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export default function AuthGuard() {
  const [loading, setLoading] = useState(true);

  const router = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  useEffect(() => {
    const authToken = localStorage.getItem("session-token");

    if (!authToken) {
      //router('/', { replace: true })
    }

    setLoading(false);
  }, [pathname]);

  return <>{loading ? <h1>Loading...</h1> : <Outlet />}</>;
}
