import React from "react";
import image from "../../icons/facebook.svg";

const Login = () => {
  return (
    <div className="login_wrapper">
      <div className="login_wrap container">
        <div className="login-1">
          <img src={image} alt="facebook logo" />
          <span>
            Facebook helps you share and connect with people in your life.
          </span>
        </div>
        <div className="login-2">
          <div className="carder">
            <div class="row">
              <div className="col">
                <form>
                  <div className="text_input">
                    <input type="text" className="input" />
                  </div>
                  <div className="text_input">
                    <input type="text" className="input" />
                  </div>
                  <div className="text_input">
                    <button className="btn btn-primary">Login</button>
                  </div>
                  <hr />

                  <button className="btn btn-block">Create New Account</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="register"></div>
    </div>
  );
};

export default Login;
