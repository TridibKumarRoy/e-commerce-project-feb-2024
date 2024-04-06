import React, { useState, useEffect } from "react";
import "./LoginSignUp.css";
import { alertGo, AlertGoContainer } from 'react-alert-go';
import { useNavigate } from "react-router-dom";


const LoginSignUp = () => {

    const [isLabelActive, setIsLabelActive] = useState(false);
    const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);

    const navigate = useNavigate()

    //* users login data
    const [user, setUser] = useState({ 
        email: "",
        password: ""
    });

    //* users Registration data
    const [userRegister, setUserRegister] = useState({   
        name: "",
        email: "",
        password: "",
    });

    //* handle login Input Change
    const handleInputChange = (e) => {
        console.log(user);
        let name = e.target.name;
        let value = e.target.value;  
        setIsLabelActive(value !== '');

        setUser({
            ...user,
            [name]: value
        })
    };

    //* handle Register Input Change
    const handleInputRegister = (e) => {
        //*input handling
        console.log(userRegister);   
        let name = e.target.name;     
        let value = e.target.value;  
        setIsLabelActive(value !== '');

        setUserRegister({
            ...userRegister,          
            [name]: value,   
        });
    };


    const handleToggleClick = () => {
        setIsLoginFormVisible(!isLoginFormVisible);
        
    };

    const handleFooterLinkClick = () => {
        // Handle footer link click logic here
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        console.log("user is :" + user.email);

        try {
            const response = await fetch("http://localhost:5000/api/v1/login", {
                method: "POST",
                headers: { 'Content-Type': "application/json" },
                body: JSON.stringify(user)
            })
            if (response.ok) {
                const res_data = await response.json();
                console.log("response from server: ", res_data);

                //* storing data in Cookies

                setUser({
                    email: "",
                    password: ""
                })

                navigate("/")
                // alert("success")
                // useEffect(() => {
                    alertGo('Login success');
                // }, []);
                
            }
        } catch (error) {
            console.log(error);
        }
    }



    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        console.log("user is :" + userRegister.email);

        try {
            const response = await fetch("http://localhost:5000/api/v1/register", {
                method: "POST",
                headers: { 'Content-Type': "application/json" },
                body: JSON.stringify(userRegister)
            })
            if (response.ok) {
                const res_data = await response.json();
                console.log("response from server: ", res_data);

                //* storing data in Cookies

                setUserRegister({
                    name: "",
                    email: "",
                    password: "",

                })

                navigate("/")
                alert("success")
            }
        } catch (error) {
            console.log(error);
        }
    }

   
    

    return (
        <>

                        
            <div className="card-container">

                <div className="alert-login">
                    <AlertGoContainer />
                    {/* hello */}
                </div>

                <div className="toggle" onClick={handleToggleClick}>
                    <i className="fa fa-user fa-pencil fa-lg"></i>
                    <div className="tooltip">{isLoginFormVisible ? 'Sign up' : 'Login'}</div>
                </div>

                {isLoginFormVisible ? <div>

                    
                    

                    <div className="card login-register login-reset">
                        <h1 className="title">Login</h1>
                        <form onSubmit={handleLoginSubmit}>
                            <div className="input-container has-feedback">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    autoComplete="off"
                                    // pattern="[\w_-]{3,20}"
                                    title="Must contain from 3 to 20 characters such as any letter, number, an underscore, or a hyphen."
                                    onChange={handleInputChange}
                                    onBlur={handleInputChange}
                                    onFocus={handleInputChange}
                                    value={user.username}
                                />
                                <label htmlFor="email" className={isLabelActive ? 'active' : ''}>
                                    Email
                                </label>
                                <i className="fa fa-user form-control-feedback"></i>
                                <div className="check"></div>
                                <div className="bar"></div>
                            </div>
                            <div className="input-container has-feedback">
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    required
                                    autoComplete="off"
                                    // pattern="[\w_-]{3,20}"
                                    title="Must contain from 3 to 20 characters such as any letter, number, an underscore, or a hyphen."
                                    onChange={handleInputChange}
                                    onBlur={handleInputChange}
                                    onFocus={handleInputChange}
                                    value={user.password}
                                />
                                <label htmlFor="password" className={isLabelActive ? 'active' : ''}>
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
                            <form onSubmit={handleRegisterSubmit}>
                                {/* Username input */}
                                <div className="input-container has-feedback">
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        autoComplete="off"
                                        pattern="[\w_-]{3,20}"
                                        title="Username must contain from 3 to 20 characters such as any letter, number, an underscore, or a hyphen."
                                        onChange={handleInputRegister}
                                        onBlur={handleInputRegister}
                                        onFocus={handleInputRegister}
                                        value={userRegister.username}
                                    />
                                    <label htmlFor="name" className={isLabelActive ? 'active' : ''}>
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
                                        id="email"
                                        name="email"
                                        required
                                        autoComplete="off"
                                        pattern="[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+"
                                        title="Not an e-mail!"
                                        onChange={handleInputRegister}
                                        onBlur={handleInputRegister}
                                        onFocus={handleInputRegister}
                                        value={userRegister.email}
                                    />
                                    <label htmlFor="email" className={isLabelActive ? 'active' : ''}>
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
                                        id="password"
                                        name="password"
                                        required
                                        autoComplete="off"
                                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}"
                                        title="Password must contain at least one number and one uppercase and lowercase letter, and from 8 to 20 characters."
                                        onChange={handleInputRegister}
                                        onBlur={handleInputRegister}
                                        onFocus={handleInputRegister}
                                        value={userRegister.password}
                                    />
                                    <label htmlFor="password" className={isLabelActive ? 'active' : ''}>
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