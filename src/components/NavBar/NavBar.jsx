import React, { useState, useContext } from "react";
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { auth } from '../../firebase-config'
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { AppContext } from "./appContext";

const provider = new GoogleAuthProvider();
function NavBar () {
    const [user, setUser] = useState('User');
    const login = useContext(AppContext);
    // console.log(login);

    // const handleChangeForRecipeBtn = () => {
    //   alert("You should log-in first!");
    // }

    // const handleChangeForListBtn = () => {
    //   alert("You should log-in first!");
    // }

    const loginWithGoogle = () => {
      signInWithPopup(auth, provider).then((result)=>{
        console.log(result);
        login.setIsLogIn(true);
        // console.log(result.user.displayName)
        setUser(result.user.displayName);
        // emailVerified: true
      })
    }

    const logoutWithGoogle = () => {
      signOut(auth).then(()=> {
        alert("Log out");
        setUser('User');
        login.setIsLogIn(false);
      }).catch((error) => {
        console.log("An error happened.");
      });
    }

    return (
      <nav>
       <Link to='/'>Fridgefy</Link>
       <Link to='/recipes'>Recipes</Link>
       <Link to='/myshoppinglist'>My Shopping List</Link>
       <p>Hello, {user}!</p>
       {!login.isLogIn?<button onClick={()=>loginWithGoogle()}>LogIn</button>
        :<button onClick={()=>logoutWithGoogle()}>LogOut</button>
       }
      </nav>
    );

  
}

export default NavBar;