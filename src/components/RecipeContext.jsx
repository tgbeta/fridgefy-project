import { createContext, useState } from 'react';

export const RecipeContext = createContext();

export const RecipeProvider = ({children}) => {
    const [recipes, setRecipes] = useState([]);

    const updateRecipes = (newRecipe) => {
        setRecipes([ ...recipes, newRecipe ]);
    }

    return (
        <RecipeContext.Provider>
            {children}
        </RecipeContext.Provider>

    )
}