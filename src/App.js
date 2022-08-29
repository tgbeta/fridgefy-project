import "./App.css";

function App() {
  return (
    <div className="App">

      {/* Recipes Page */}
      {/* Header Component */}
      <div>
        <div>
          <h1>fridgefy</h1>
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
      <div>
        <h2>My Recipes</h2>
        <div>
          <p>Recipe</p>
          <button>X</button>
        </div>
      </div>
      

      {/* My Shopping List Page */}
      {/* Header Component */}
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
