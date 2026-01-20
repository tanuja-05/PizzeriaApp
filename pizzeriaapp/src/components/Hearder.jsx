import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Images/logo.jpeg";
import { useEffect, useState } from "react";

export default function Header() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const goToCart = () => {
    navigate("/cart");
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar bg-black text-white p-3">
        <div className="col-2 nav-item">
          <Link to="/home" className="nav-link fs-2">
            Pizzeria
          </Link>
        </div>

        <div className="d-flex col-10 align-items-center">
          <div className="d-flex col-5 justify-content-between align-items-center">
            <img
              src={logo}
              alt="logo"
              style={{ width: "40px", height: "40px" }}
            />
            <Link to="/order-pizza" className="nav-link fs-5">
              Order Pizza
            </Link>
            <Link to="/build-pizza" className="nav-link fs-5">
              Build Ur Pizza
            </Link>
          </div>

          <div className="d-flex col-7 justify-content-end align-items-center gap-3">
            {/* 👤 AUTH SECTION */}
            {user ? (
              <>
                <span className="fw-bold">
                  Hi, {user.name}
                </span>
                <button
                  className="btn btn-outline-light"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-outline-light">
                  Login
                </Link>
                <Link to="/signup" className="btn btn-outline-light">
                  Signup
                </Link>
              </>
            )}

            <button
              className="btn btn-warning text-white"
              onClick={goToCart}
            >
               🛒 Shopping Cart
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}