import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { RecipeProvider } from "./components/RecipeContext";
import Recipes from "./components/Recipes/Recipes";
import MyShoppingList from "./components/MyShoppingList/MyShoppingList";

function App() {
  return (
    <div className="App">
      <NavBar />
      <RecipeProvider>
          <Recipes />
          {/* <MyShoppingList /> */}
      </RecipeProvider>
      

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
