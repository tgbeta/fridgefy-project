import "./App.css";
import MyFridge from "./components/MyFridge/myFridge";
import MyRecipes from "./components/MyRecipes/myRecipes";
import NavBar from "./components/NavBar/NavBar";
import Search from "./components/Search/search";


function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="column-container">
       <MyFridge />
        <Search />
        <MyRecipes />
      </div>


{/*       
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
      

      <div>
        <h2>Items to Buy</h2>
        <div>
          <p>Item</p>
          <button>X</button>
        </div>
      </div> */}
    </div>
  );
}

export default App;
