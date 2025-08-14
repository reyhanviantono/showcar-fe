import React, { useEffect, useState } from "react";
import { Navbar, Nav, Form } from "react-bootstrap";
import { getUsers, removeToken, removeUsers } from "../utils/LocalStorage";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function NavbarCustome() {
  const navigate = useNavigate();
  const [users, setUser] = useState(null);

  const fetchUser = () => {
    const user = getUsers();
    if (user) {
      const parseUser = JSON.parse(user);
      setUser(parseUser);
    }
  };

  const handleLogout = () => {
    removeToken();
    removeUsers();
    toast.success("berhasil logout");
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <Navbar variant="newLight" expand="lg">
      <Navbar.Brand
        className="font-weight-bold"
        href="#"
        onClick={() => navigate("/")}
      >
        RateMyRide
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#" onClick={() => navigate("/tentang-kami")}>
            Tentang Kami
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Form inline>
          <Nav className="">
            {users ? (
              <>
                <Nav.Link href="#" className="active">
                  {users.name}
                </Nav.Link>
                <Nav.Link href="#" onClick={handleLogout}>
                  Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link
                  className="active"
                  href="#"
                  onClick={() => navigate("/login/users")}
                >
                  Login
                </Nav.Link>
                <Nav.Link href="#" onClick={() => navigate("/register/users")}>
                  Register
                </Nav.Link>
              </>
            )}
          </Nav>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarCustome;
