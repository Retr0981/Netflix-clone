import React, { useState } from "react";
import Cards from "./Cards";
import Footer from "./Footer";
import Faq from "./Questions";
import data from "./data";
import "./homeScreen.css";
import SignUpScreen from "./SignUpScreen";
import { Link } from "react-router-dom";

function Home() {
  const [Questions, setQuestions] = useState(data);
  const [SignIn, setSignIn] = useState(false);

  return (
    <>
      {SignIn ? (
        <SignUpScreen />
      ) : (
        <div>
          <div
            className="banner"
            style={{
              backgroundImage: `url('./assets/bg.jpg')`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
              objectFit: "contain",
            }}
          >
            <div className="banner-content">
              <div className="banner-nav">
                <div className="logo">
                  <img src="./assets/logo.png" width="150px" alt="" srcSet="" />
                </div>

                <div className="login-btn">
                  <button
                    onClick={() => setSignIn(true)}
                    className="sign-in-btn"
                    type="submit"
                  >
                    Sign In
                  </button>
                </div>
              </div>

              <div className="banner-container">
                <div className="banner-text">
                  <h1>Unlimited movies, TV shows, and more.</h1>
                  <h2>Watch anywhere. Cancel anytime.</h2>
                </div>

                <div className="banner-form">
                  <h3>
                    Ready to watch? Enter your email to create or restart your
                    membership.
                  </h3>
                  <form action="">
                    <div className="form-group">
                      <input type="email" placeholder="Email Address" />
                    </div>

                    <div className="form-group">
                      <button onClick={() => setSignIn(true)} type="submit">
                        <Link className="link" to="/SignUpScreen">
                          {" "}
                          Get Started &#62;{" "}
                        </Link>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <Cards />

          <div className="card-header">
            <div className="Questions-header">
              <h1>Frequently Asked Questions</h1>
            </div>
          </div>

          {Questions.map((Question) => {
            return <Faq key={Question.id} {...Question} />;
          })}

          <div className="sub-form">
            <div className="banner-form">
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>
              <form action="" method="post">
                <div className="form-group">
                  <input type="email" placeholder="Email Address" required />
                </div>

                <div className="form-group">
                  <button onSubmit={() => setSignIn(true)} type="submit">
                    <Link className="link" to="/SignUpScreen">
                      {" "}
                      Get Started &#62;{" "}
                    </Link>
                  </button>
                </div>
              </form>
            </div>
          </div>

          <Footer />
        </div>
      )}
    </>
  );
}

export default Home;
