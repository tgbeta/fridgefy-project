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
                    <h2 className="home-heading">This is a home page.</h2>
                    <p className="home-text"> 
                      Let's begin to search recipes! If you want to use other
                      features, please <span className="log-in">log-in</span> first.
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
            </Routes>
          </BrowserRouter>
        </RecipeProvider>
      </AppContext.Provider>
    </div>
  );
}

export default App;
