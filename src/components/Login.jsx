import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [signIn, setSignIn] = useState(true);

  const toggleSignInForm = () => {
    setSignIn(!signIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web/IN-en-20250303-TRIFECTA-perspective_d5f81427-d6cf-412d-8e86-2315671b9be1_medium.jpg" />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 bg-opacity-80">
        <h1 className="font-bold text-white text-3xl py-4">{signIn ? "Sign in" : "Sign Up"}</h1>
        {!signIn && <input type="text" placeholder="fullname" className="p-2 w-full my-2 bg-blue-50" />}
        <input type="text" placeholder="email" className="p-2 w-full my-2 bg-blue-50" />
        <input type="password" placeholder="password" className="p-2 w-full my-2 bg-amber-50" />
        <button className="p-4 my-4 bg-amber-800 w-full">{signIn ? "Sign in" : "Sign up"}</button>
        <p className="text-white cursor-pointer" onClick={toggleSignInForm}>{signIn ? "New to Netflix? Sign Up" : "Already have an account? Sign In"}</p>
      </form>
    </div>
  );
};

export default Login;
