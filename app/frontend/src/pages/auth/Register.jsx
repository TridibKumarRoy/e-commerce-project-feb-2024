import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { axiosInstance } from "../../utils/axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const hanldeRegister = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axiosInstance.post("/register", {
        name,
        email,
        password,
      });

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="login py-5 border-top-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-8 align-item-center">
              <div className="border">
                <h3 className="bg-gray p-4">Register Now</h3>
                <form onSubmit={hanldeRegister}>
                  <fieldset className="p-4">
                    <input
                      className="form-control mb-3"
                      type="text"
                      placeholder="Name"
                      required
                      onChange={(e) => setName(e.target.value)}
                    />
                    <input
                      className="form-control mb-3"
                      type="email"
                      placeholder="Email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                      className="form-control mb-3"
                      type="password"
                      placeholder="Password"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                      type="submit"
                      className="btn btn-primary font-weight-bold mt-3"
                    >
                      Sign up
                    </button>
                    <br />
                    <Link
                      className="mt-3 d-inline-block text-primary"
                      to="/login"
                    >
                      Already have an account? Login
                    </Link>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
