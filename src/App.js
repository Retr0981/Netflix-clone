import React, { useEffect } from "react";
import Home from "./Components/homeScreen";
import Private from "./Components/Private";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import { auth } from "./Components/firebase";
import { useDispatch } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";

//If there  is no user show the homeScreen else
// show the rest of the app

function App() {
  const User = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    /* onAuthStateChanged gives user call back by storing their crendentials in the localstorage */
    const unSubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //Logged In
        // console.log(authUser);
        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email,
            photo: authUser.photoURL,
            name: authUser.displayName,
          })
        );
      } else {
        //Logged Out
        dispatch(logout());
      }
    });

    return unSubscribe;
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        {!User ? (
          <Home />
        ) : (
          <Routes>
            <Route path="/" element={<Private />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
