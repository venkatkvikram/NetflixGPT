import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateCredentials } from "../utils/validateCredentials";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [signIn, setSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const fullname = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();

  const handleSignInClick = () => {
    const message = validateCredentials(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    if (!signIn) {
      //signup
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth, {
            displayName: fullname.current.value, photoURL: "https://avatars.githubusercontent.com/u/85410384?v=4"
          }).then(() => {
            navigate("/browse");
          }).catch((error) => {
            setErrorMessage(error?.message)
          });
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + message);
          // ..
        });
    } else {
      //login
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + message);
        });
    }
  };

  const toggleSignInForm = () => {
    setSignIn(!signIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web/IN-en-20250303-TRIFECTA-perspective_d5f81427-d6cf-412d-8e86-2315671b9be1_medium.jpg" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 bg-opacity-80"
      >
        <h1 className="font-bold text-white text-3xl py-4">{signIn ? "Sign in" : "Sign Up"}</h1>
        {!signIn && <input ref={fullname} type="text" placeholder="fullname" className="p-2 w-full my-2 bg-blue-50" />}
        <input ref={email} type="text" placeholder="email" className="p-2 w-full my-2 bg-blue-50" />
        <input ref={password} type="password" placeholder="password" className="p-2 w-full my-2 bg-amber-50" />
        <p className="text-red text-lg cursor-pointer text-red-600 font-bold">{errorMessage}</p>
        <button className="p-4 my-4 bg-amber-800 w-full" onClick={handleSignInClick}>
          {signIn ? "Sign in" : "Sign up"}
        </button>
        <p className="text-white cursor-pointer" onClick={toggleSignInForm}>
          {signIn ? "New to Netflix? Sign Up" : "Already have an account? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
