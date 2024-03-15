import React, { useEffect } from "react";
import { NETFLIX_ICON_IMG } from "../utils/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBell } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = auth.currentUser;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);
  return (
    <div className="z-10 bg-gradient-to-r from-black/40  w-full px-5  flex justify-between fixed">
      <div className="flex items-center gap-5">
        <img className="w-32" src={NETFLIX_ICON_IMG} alt="netflix-logo" />
        <ul className="flex gap-5 font-semibold text-white">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className="flex items-center gap-8 text-white ">
        <FontAwesomeIcon className="text-xl" icon={faMagnifyingGlass} />
        <h1 className="text-xl font-semibold">{userDetails?.displayName}</h1>

        <FontAwesomeIcon className="text-xl" icon={faBell} />
        <img
          className="w-12 h-12 rounded-xl"
          src={userDetails?.photoURL}
          alt="user-img"
        />
        <button
          className="bg-red-600 px-2 py-1 rounded-xl font-semibold text-white"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
