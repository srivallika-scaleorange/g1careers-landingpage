import React from 'react';
import Subscribe from './Subscribe';
const LoginPage = () => {
  return (
    <>
      {/* Page Title Section */}
      <section className="page-title centred pt_110">
        <div className="auto-container">
          <div className="content-box">
            <h1>Login</h1>
           
          </div>
        </div>
      </section>

      {/* Sign Section */}
      <section className="sign-section pt_110 pb_120">
        <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-25.png)" }}></div>
        <div className="auto-container">
          <div className="form-inner">
            <form method="post" action="https://azim.hostlin.com/Jobaway/login.html">
              <div className="form-group">
                <label>Email <span>*</span></label>
                <input type="email" name="email" required />
              </div>
              <div className="form-group">
                <label>Password <span>*</span></label>
                <input type="password" name="password" required />
              </div>
              <div className="form-group message-btn">
                <button type="submit" className="theme-btn btn-one">Log In</button>
              </div>
              <span className="text">or</span>
              <ul className="social-links clearfix">
                <li>
                  <a href="login.html"><img src="assets/images/icons/icon-25.png" alt="" />Continue with Google</a>
                </li>
                <li>
                  <a href="login.html"><img src="assets/images/icons/icon-26.png" alt="" />Continue with Facebook</a>
                </li>
              </ul>
            </form>
            <div className="other-option">
              <div className="check-box">
                <input className="check" type="checkbox" id="checkbox1" />
                <label htmlFor="checkbox1">Remember me</label>
              </div>
              <button className="forgot-password">Forget password?</button>
            </div>
            <div className="lower-text centred">
              <p>Not registered yet? <a href="signup.html">Create an Account</a></p>
            </div>
          </div>
        </div>
      </section>
      <Subscribe/>
    </>
  );
};

export default LoginPage;