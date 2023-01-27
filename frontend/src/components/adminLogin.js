import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

import "../new.css";
function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const LoginUser = async () => {
    try {
      const response = await fetch("/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await response.json();
      console.log(data);
      localStorage.setItem("user", JSON.stringify(email));

      alert("Admin is login");

      navigate("/admin");
    } catch {
      alert("All field must be filled ");
    }
  };
  const handleChange = (event) => {
    const value = event.target.value;
    setPassword(value.trim());
  };

  return (
    <>
      <div className="adminContainer">
        <Form for="email">
          <label className="admin-label">Sign in to your account </label>

          <Form.Label className="admin-form-label">Email address</Form.Label>
          <Form.Control
            type="email"
            className="admin-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="admin-form-label">Password</Form.Label>
            <Form.Control
              className="admin-control"
              type="password"
              value={password}
              onChange={handleChange}
            />
          </Form.Group>
          <Button className="admin-btn" onClick={() => LoginUser()}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default AdminLogin;
