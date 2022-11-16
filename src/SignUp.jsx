import React from "react";

function SignUp() {
  return (
    <div>
      <div className="d-lg-flex half">
        <div
          className="bg order-1 order-md-2 d-flex flex-column justify-content-center  text-white text-center "
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1569878698890-41d806cfe9e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80)",
          }}
        >
          <h1 className="pic--text">Work,Travel,Repeat</h1>
        </div>
        <div className="contents order-2 order-md-1">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-7">
                <div className="mb-5">
                  <h2 className="heading-text">Welcome Traveler</h2>
                  <p className="mb-4">
                    Sign Up Now For More Update About Traveling
                  </p>
                </div>
                <form action="#" method="get">
                  <div className="form-group last mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="User Name"
                    />
                  </div>
                  <div className="form-group last mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="form-group last mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                    />
                  </div>
                  <div className="d-flex mb-3 mt-5 align-items-center"></div>
                  {/* submit button */}
                  <input type="submit" defaultValue="Log In" className="btn " />
                  <div className="social-login">
                    <a
                      href="#"
                      className="text-black d-flex justify-content-center align-items-center pt-4"
                      style={{ textDecoration: "none" }}
                    >
                      <span> Already have an account? </span>
                      <span
                        style={{
                          marginLeft: "5px",
                          fontWeight: "bold",
                          color: "#219ebc",
                        }}
                      >
                        Log In
                      </span>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
