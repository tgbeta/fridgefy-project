import "./App.css";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="column-container">
        {/* Left Column Component */}
        <div className="column-sides">
          <h2>My Fridge</h2>
          <div>
            <input />
            <div>
              <button>Search</button>
              <button>Add</button>
            </div>
          </div>
          <div className="column-box">
            <p className="column-itens">Item:</p>
            <p className="column-button">X</p>
          </div>
        </div>

        {/* Middle Column Component */}
        <div className="column-middle">
          <div>
            <h2>Search</h2>
            <input />
          </div>
          <div>
            <p>Filter Area</p>
          </div>
          <div>
            <div>
              <img />
              <button></button>
              <button></button>
            </div>
          </div>
        </div>

        {/* Right Column Component */}
        <div className="column-sides">
          <h2>My Recipes</h2>
          <div>
            <p>Recipe</p>
            <button>X</button>
          </div>
        </div>
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
