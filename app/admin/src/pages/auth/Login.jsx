import React, { useContext, useState } from "react";
import "./auth.css";
import { axiosInstance } from "../../utils/axios";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const { setUser } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async () => {
    try {
      const { data } = await axiosInstance.post("/login", inputs);
      console.log(data);

      if (data?.user?.role !== "admin") {
        alert("Invalid credentials");
        return;
      }

      window.sessionStorage.setItem("token", data?.token);
      axiosInstance.defaults.headers.common["Authorization"] = data?.token;
      setUser(data?.user);
    } catch (err) {
      console.log(err);
      alert(err?.response?.data?.message || "Internal Server error");
    }
  };
  return (
    <div className="h-screen d-flex login">
      <div class="container">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-md-6">
            <div class="card login-card px-5 py-5" id="form1">
              <h4>Login</h4>
              <div class="form-data">
                <div class="forms-inputs mb-4">
                  <span>Email</span>
                  <input
                    onChange={handleChange}
                    value={inputs.email}
                    autocomplete="off"
                    type="text"
                    name="email"
                  />
                </div>
                <div class="forms-inputs mb-4">
                  <span>Password</span>
                  <input
                    onChange={handleChange}
                    value={inputs.password}
                    autocomplete="off"
                    type="password"
                    name="password"
                  />
                </div>
                <div class="mb-3">
                  <button onClick={handleLogin} class="btn btn-dark w-100">
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
