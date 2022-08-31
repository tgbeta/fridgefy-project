import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <div className="header-div">
        <div className="header-div-h1">
          <h1>Fridgefy</h1>
        </div>
        <div className="header-div-pages">
          <button>Recipes</button>
          <button>My Shopping List</button>
          <p>Hello, User!</p>
        </div>
        <div className="header-div-buttons">
          <button>Login</button>
          <button>LogOut</button>
        </div>
      </div>
    );
  }
}

export default NavBar;