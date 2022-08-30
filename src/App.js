import "./App.css";
import MyFridge from "./components/MyFridge/MyFridge";
import MyRecipes from "./components/MyRecipes/MyRecipes";
import NavBar from "./components/NavBar/NavBar";
import Search from "./components/Search/Search";



function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="column-container">
       <MyFridge />
        <Search />
        <MyRecipes />
      </div>


      // * My Shopping List Page * * Header Component *
      <div>
        <div>
          <p>fridgefy</p>
        </div>
        <div>
          <button>Recipes</button>
          <button>My Shopping List</button>
          <p>Hello, user!</p>
        </div>
        <div>
          <button>Login</button>
          <button>LogOut</button>
        </div>
      </div>
      {/* Left Column Component */}
      <div>
        <h2>My Fridge</h2>
        <div>
          <input />
          <button>Add</button>
        </div>
        <div>
          <p>Item</p>
          <button>X</button>
        </div>
      </div>
      {/* Middle Column Component */}
      <div>
        <div>
          <p>Recipe Name</p>
          <button>X</button>
          <button>Arrow Icon</button>
        </div>
        <div>
          <p>More Info...</p>
          <img />
        </div>
      </div>
      {/* Right Column Component */}
      <div>
        <h2>Items to Buy</h2>
        <div>
          <p>Item</p>
          <button>X</button>
        </div>
      </div>
    </div>
  );
}

export default App;
