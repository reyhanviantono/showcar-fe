import React, { useState } from "react";
import { Login } from "../utils/CallApi";
import { toast } from "react-toastify";
import NavbarCustome from "../component/Navbar";

function LoginPage() {
  const [payload, setPayload] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    const res = await Login(payload);
    if (res) {
      toast.success("succes login");
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    }
  };
  return (
    <>
      <NavbarCustome />
      <div className="container">
        <div className="login-container">
          <h2 className="login-title text-center">Login</h2>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                onChange={(e) =>
                  setPayload((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }))
                }
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                onChange={(e) =>
                  setPayload((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
              />
            </div>
            <button
              type="button"
              onClick={handleSubmit}
              className="btn btn-primary btn-block"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
