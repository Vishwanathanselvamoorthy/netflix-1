import React, { useRef, useState } from "react";
import Header from "./Header";
import { MY_PROFILE, NETFLIX_BG_IMG } from "../utils/constants";
import { validation } from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [validateMsg, setValidateMsg] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmitForm = () => {
    const validateMessage = validation(
      email.current.value,
      password.current.value
    );
    setValidateMsg(validateMessage);

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: MY_PROFILE,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setValidateMsg("User Not Present");
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute w-full  ">
        <img
          className="w-full h-screen"
          src={NETFLIX_BG_IMG}
          alt="netflix-bg"
        />
      </div>
      <form
        className="absolute  mt-[10vh] mx-auto right-0 left-0 w-4/12 bg-black/70 p-20"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-3xl font-bold  text-white text-center ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            className="w-full my-5 p-3 font-semibold text-lg rounded-lg text-white bg-gray-800/80 border-2 border-gray-400"
            placeholder="Name"
          />
        )}
        <input
          ref={email}
          type="email"
          className="w-full my-5 p-3 font-semibold text-lg rounded-lg text-white bg-gray-800/80 border-2 border-gray-400"
          placeholder="Email"
        />
        <input
          ref={password}
          type="password"
          className="w-full my-5 p-3 font-semibold text-lg rounded-lg text-white bg-gray-800/80  border-2 border-gray-400"
          placeholder="Password"
        />
        <p className="text-lg font-semibold text-red-600 mb-3 ">
          {validateMsg}
        </p>
        <button
          className="bg-red-600 w-full p-3 text-white font-semibold text-lg rounded-lg"
          onClick={handleSubmitForm}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="text-lg mt-5 font-semibold  text-white cursor-pointer"
          onClick={handleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up now."
            : "Already Registered? Sign In now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
