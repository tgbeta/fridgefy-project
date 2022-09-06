import React, { useState, useContext } from "react";
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { auth } from '../../firebase-config'
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { AppContext } from "./appContext";
import { StyledNavBar } from "./Nav.styles";

const provider = new GoogleAuthProvider();
function NavBar () {
    const [user, setUser] = useState('User');
    const login = useContext(AppContext);

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
      <StyledNavBar>
      <nav>
       <Link className="title" to='/'>Fridgefy</Link>
       <Link className="route" to='/recipes'>Recipes</Link>
       <Link className="route" to='/myshoppinglist'>My Shopping List</Link>
       <p>Hello, {user}!</p>
       {!login.isLogIn?<button onClick={()=>loginWithGoogle()}>LogIn</button>
        :<button onClick={()=>logoutWithGoogle()}>LogOut</button>
       }
      </nav>
      </StyledNavBar>
    );

  
}

export default NavBar;