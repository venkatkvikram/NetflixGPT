import React, { useEffect } from "react";
import NetflixLogo from "../assets/Netflix_Logo_PMS.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { setLangauge } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)
  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("user state change", user);
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleSelectLang = (e) => {
    dispatch(setLangauge(e.target.value))
  }

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-1 flex flex-col md:flex-row justify-between">
      <img className="w-44 mx-auto md:mx-0" src={NetflixLogo} alt="logo" />

      {user && (
        <div className="flex p-2 justify-between">
          {showGptSearch && <select className="p-2 bg-gray-900 m-2 text-white" onChange={handleSelectLang}>
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
            ))}
          </select>}
          <button className="py-2 px-4 bg-purple-800 text-white rounded-lg mx-4 my-2" onClick={handleGptSearchClick}>
            {showGptSearch ? "Home Page" : "GPT search"}
          </button>
          <img alt="usericon" className="hidden md:block w-12 h-12" src={user?.photoURL} />
          <button className="bg-red-600 p-2" onClick={handleSignOut}>
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
