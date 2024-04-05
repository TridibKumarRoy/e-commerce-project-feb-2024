import React, { useState } from "react";
import "./LoginSignUp.css";
import { useDispatch } from 'react-redux';


const LoginSignUp = () => {

    const [isLabelActive, setIsLabelActive] = useState(false);
    const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setIsLabelActive(value !== '');
    };

    const handleToggleClick = () => {
        setIsLoginFormVisible(!isLoginFormVisible);
    };

    const handleFooterLinkClick = () => {
        // Handle footer link click logic here
    };

    return (
        <>

            <div className="card-container">

                <div className="toggle" onClick={handleToggleClick}>
                    <i className="fa fa-user fa-pencil fa-lg"></i>
                    <div className="tooltip">{isLoginFormVisible ? 'Sign up' : 'Login'}</div>
                </div>

                {isLoginFormVisible ? <div>

                    

                    <div className="card login-register login-reset">
                        <h1 className="title">Login</h1>
                        <form>
                            <div className="input-container has-feedback">
                                <input
                                    type="text"
                                    id="Username"
                                    name="Username"
                                    required
                                    autoComplete="off"
                                    pattern="[\w_-]{3,20}"
                                    title="Must contain from 3 to 20 characters such as any letter, number, an underscore, or a hyphen."
                                    onChange={handleInputChange}
                                    onBlur={handleInputChange}
                                    onFocus={handleInputChange}
                                />
                                <label htmlFor="Username" className={isLabelActive ? 'active' : ''}>
                                    Username
                                </label>
                                <i className="fa fa-user form-control-feedback"></i>
                                <div className="check"></div>
                                <div className="bar"></div>
                            </div>
                            <div className="input-container has-feedback">
                                <input
                                    type="Password"
                                    id="Password"
                                    name="Password"
                                    required
                                    autoComplete="off"
                                    pattern="[\w_-]{3,20}"
                                    title="Must contain from 3 to 20 characters such as any letter, number, an underscore, or a hyphen."
                                    onChange={handleInputChange}
                                    onBlur={handleInputChange}
                                    onFocus={handleInputChange}
                                />
                                <label htmlFor="Password" className={isLabelActive ? 'active' : ''}>
                                    Password
                                </label>
                                <i className="fa fa-user form-control-feedback"></i>
                                <div className="check"></div>
                                <div className="bar"></div>
                            </div>

                           
                            <div className="button-container">
                                <button className="rkmd-btn btn-lightBlue ripple-effect float-right">
                                    <span>Sign in</span>
                                </button>
                            </div>
                            <div className="forgotPassword">
                                <a href="#" onClick={handleFooterLinkClick}>
                                    Forgot your password?
                                </a>
                            </div>
                        </form>
                    </div>


                </div>
                    :
                    <div>
                        

                        {/* Create an account */}
                        <div className="card login-register">
                            <h1 className="title">Create an account</h1>
                            <form>
                                {/* Username input */}
                                <div className="input-container has-feedback">
                                    <input
                                        type="text"
                                        id="Username"
                                        name="Username"
                                        required
                                        autoComplete="off"
                                        pattern="[\w_-]{3,20}"
                                        title="Username must contain from 3 to 20 characters such as any letter, number, an underscore, or a hyphen."
                                        onChange={handleInputChange}
                                        onBlur={handleInputChange}
                                        onFocus={handleInputChange}
                                    />
                                    <label htmlFor="Username" className={isLabelActive ? 'active' : ''}>
                                        Username
                                    </label>
                                    <i className="fa fa-user form-control-feedback"></i>
                                    <div className="check"></div>
                                    <div className="bar"></div>
                                </div>
                                {/* Email input */}
                                <div className="input-container has-feedback">
                                    <input
                                        type="email"
                                        id="E-mail"
                                        name="E-mail"
                                        required
                                        autoComplete="off"
                                        pattern="[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+"
                                        title="Not an e-mail!"
                                    />
                                    <label htmlFor="E-mail" className={isLabelActive ? 'active' : ''}>
                                        E-mail
                                    </label>
                                    <i className="fa fa-envelope form-control-feedback"></i>
                                    <div className="check"></div>
                                    <div className="bar"></div>
                                </div>
                                {/* Password input */}
                                <div className="input-container has-feedback">
                                    <input
                                        type="password"
                                        id="Password"
                                        name="Password"
                                        required
                                        autoComplete="off"
                                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}"
                                        title="Password must contain at least one number and one uppercase and lowercase letter, and from 8 to 20 characters."
                                    />
                                    <label htmlFor="Password" className={isLabelActive ? 'active' : ''}>
                                        Password
                                    </label>
                                    <i className="fa fa-lock form-control-feedback"></i>
                                    <div className="check"></div>
                                    <div className="bar"></div>
                                </div>
                               
                                {/* Register button */}
                                <div className="button-container">
                                    <button><span>Register</span></button>
                                </div>
                            </form>
                        </div>




                </div>}


               


               


            </div>
        </>
    );
};

export default LoginSignUp;