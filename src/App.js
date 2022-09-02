import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { RecipeProvider } from "./components/RecipeContext";
import Recipes from "./components/Recipes/Recipes";
import MyShoppingList from "./components/MyShoppingList/MyShoppingList";
import Search from "./components/Search/Search";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/NavBar/ProtectedRoute";
import { AppContext } from "./components/NavBar/appContext";
import { useState } from "react";

function App() {
  const [isLogIn, setIsLogIn] = useState(false);
  return (
    <div className="App">
      <AppContext.Provider value={{ isLogIn, setIsLogIn }}>
        <RecipeProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <h2>This is a home page.</h2>
                    <p>
                      Let's begin to search recipes! If you want to use other
                      features, please log-in first.
                    </p>
                    <Search />
                  </>
                }
              />
              <Route
                path="/recipes"
                element={
                  <>
                    <ProtectedRoute>
                      <Recipes />
                    </ProtectedRoute>
                  </>
                }
              />
              <Route
                path="/myshoppinglist"
                element={
                  <>
                    <ProtectedRoute>
                      <MyShoppingList />
                    </ProtectedRoute>
                  </>
                }
              />
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
            </Routes>
          </BrowserRouter>
        </RecipeProvider>
      </AppContext.Provider>
      {/* </div> */}
    </div>
  );
}

export default App;
