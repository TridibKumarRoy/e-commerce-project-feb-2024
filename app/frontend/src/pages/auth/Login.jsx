import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { axiosInstance } from "../../utils/axios";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { user, setUser } = useContext(AuthContext);

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axiosInstance.post("/login", {
        email,
        password,
      });

      axiosInstance.defaults.headers.common["Authorization"] = data.token;
      window.localStorage.setItem("token", data.token);
      setUser(data.user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const redirectTo = queryParams.get("redirectTo");
    if (user) {
      if (redirectTo) {
        navigate("/" + redirectTo);
      } else {
        navigate("/");
      }
    }
  }, [location, user]);

  return (
    <>
      <section className="login py-5 border-top-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-8 align-item-center">
              <div className="border">
                <h3 className="bg-gray p-4">Login Now</h3>
                <form onSubmit={handleLogin}>
                  <fieldset className="p-4">
                    <input
                      className="form-control mb-3"
                      type="text"
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
                      Log in
                    </button>
                    <a className="mt-3 d-block text-primary" href="#!">
                      Forget Password?
                    </a>
                    <Link
                      className="mt-3 d-inline-block text-primary"
                      to="/register"
                    >
                      Don't have an account? Register
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

export default Login;
