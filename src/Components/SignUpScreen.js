import React, { useRef } from "react";
import "./SignUpScreen.css";
import { auth, provider } from "./firebase";

function SignUpScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const SignIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const googleSignIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider);
  };
  return (
    <>
      <div
        className="signUpScreen"
        style={{
          backgroundImage: `url('./assets/banner.jpg')`,
          backgroundPosition: `center center`,
          backgroundSize: `cover`,
        }}
      >
        <div className="container">
          <form action="">
            <h1>SignIn</h1>
            <input ref={emailRef} type="email" placeholder="Email" />
            <input ref={passwordRef} type="password" placeholder="Password" />
            <button type="submit" onClick={SignIn}>
              Sign In
            </button>
            <h5>
              <span className="signUpScreen_gray"> New to Netflix? </span>
              <span className="signUpScreen_link" onClick={register}>
                Sign Up Now
              </span>
            </h5>

            <button onClick={googleSignIn} class="google">
              Continue with Google
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUpScreen;
