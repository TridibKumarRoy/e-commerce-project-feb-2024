import React from "react";
import Form from "../../components/auth/Form";

const Register = () => {
  return (
    <>
    <section className="login py-5 border-top-1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-8 align-item-center">
            <div className="border">
              <h3 className="bg-gray p-4">Register Now</h3>
              <form action="#">
                <fieldset className="p-4">
                  <input
                    className="form-control mb-3"
                    type="text"
                    placeholder="Name"
                    required
                  />
                  <input
                    className="form-control mb-3"
                    type="email"
                    placeholder="Email"
                    required
                  />
                  <input
                    className="form-control mb-3"
                    type="password"
                    placeholder="Password"
                    required
                  />
                  <div className="loggedin-forgot">
                    <input type="checkbox" id="keep-me-logged-in" />
                    <label for="keep-me-logged-in" className="pt-3 pb-2">
                      Keep me logged in
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary font-weight-bold mt-3"
                  >
                    Log in
                  </button>
                  <a className="mt-3 d-block text-primary" href="#!">
                    Forget Password?
                  </a>
                  <a
                    className="mt-3 d-inline-block text-primary"
                    href="register.html"
                  >
                    Register Now
                  </a>
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
