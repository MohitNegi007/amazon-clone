import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/outline";

import {
  signInWithGoogle,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { selectItems } from "../slices/basketSlice";

const Header = () => {
  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  // same as above line but now logic/function here not in basketSlice
  //state is glbal state , basket is reducer (that is defined in store) and items is array defined in basketSlice
  // const items = useSelector((state) => state.basket.items);
  const router = useRouter();
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setName(result.user.displayName);
        setImgUrl(result.user.photoURL);

        onAuthStateChanged(auth, (user) => {
          if (user) {
            setUserLoggedIn(true);
            console.log("state changed");
          } else {
            return;
          }
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const signOutWithGoogle = () => {
    signOut(auth);
    setName("Sign In");
    setImgUrl(" ");
    setUserLoggedIn(false);
  };

  return (
    <header>
      {/* top nav */}

      <div className="flex  items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="/images/amazonLogo.png"
            width={130}
            height={25}
            className=" cursor-pointer mx-3"
            alt="img"
            onClick={() => router.push("/")}
          />
        </div>
        {/* search */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500 ">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            type="text"
          />
          <SearchIcon className=" h-12 p-4" />
        </div>
        {/* right  */}
        <div className="text-white flex items-center text-xs mx-6 whitespace-nowrap">
          <div className="link  flex flex-col items-center mx-2">
            {userLoggedIn ? (
              <img
                className="object-contain rounded-full mb-1"
                src={imgUrl}
                height={20}
                width={20}
              />
            ) : (
              <UserIcon className="h-5 text-white" />
            )}
            {userLoggedIn ? (
              <p>{name} </p>
            ) : (
              <p onClick={signInWithGoogle}>Hello , Sign In</p>
            )}
            <p className="font-extralight md:text-sm">Account & Lists</p>
          </div>

          {userLoggedIn && (
            <button onClick={signOutWithGoogle} className="m-2">
              Sign Out
            </button>
          )}
          <div className="link  mx-2">
            <p>Returns</p>
            <p className="font-extralight md:text-sm">& Orders</p>
          </div>
          <div
            onClick={() => router.push("/checkout")}
            className=" relative flex items-center  link  mx-2"
          >
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4  bg-yellow-400 text-center rounded-full text-black font-bold ">
              {items.length}
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extralight md:text-sm mt-2 ">
              Basket
            </p>
          </div>
        </div>
      </div>
      {/* button nav */}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm ">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
};

export default Header;
