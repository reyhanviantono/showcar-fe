import React, { useState } from "react";
import { Register } from "../utils/CallApi";
import { toast } from "react-toastify";
import NavbarCustome from "../component/Navbar";

export default function RegisterPage() {
  const [payload, setPayload] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    payload.password_confirmation = payload.password;
    const res = await Register(payload);
    if (res) {
      toast.success("succes register");
      setTimeout(() => {
        window.location.href = "/login/users";
      }, 1000);
    }
  };

  return (
    <>
      <NavbarCustome />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">Register</div>
              <div className="card-body">
                <form>
                  <div className="form-group row">
                    <label
                      htmlFor="name"
                      className="col-md-4 col-form-label text-md-right"
                    >
                      Name
                    </label>
                    <div className="col-md-6">
                      <input
                        id="name"
                        type="text"
                        className="form-control"
                        name="name"
                        onChange={(e) =>
                          setPayload((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                        autoComplete="name"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="email"
                      className="col-md-4 col-form-label text-md-right"
                    >
                      E-Mail Address
                    </label>
                    <div className="col-md-6">
                      <input
                        id="email"
                        type="email"
                        className="form-control"
                        name="email"
                        onChange={(e) =>
                          setPayload((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                        autoComplete="email"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="password"
                      className="col-md-4 col-form-label text-md-right"
                    >
                      Password
                    </label>
                    <div className="col-md-6">
                      <input
                        id="password"
                        type="password"
                        className="form-control"
                        name="password"
                        onChange={(e) =>
                          setPayload((prev) => ({
                            ...prev,
                            password: e.target.value,
                          }))
                        }
                        autoComplete="new-password"
                      />
                    </div>
                  </div>

                  <div className="form-group row mb-0">
                    <div className="col-md-6 offset-md-4">
                      <button
                        type="button"
                        onClick={handleSubmit}
                        className="btn btn-primary"
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
