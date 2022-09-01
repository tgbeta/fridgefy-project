import { createContext, useState } from 'react';

export const IngredientContext = createContext();

export const RecipeProvider = ({children}) => {
    const [recipes, setRecipes] = useState([]);

    const updateRecipes = (newRecipe) => {
        setRecipes([ ...recipes, newRecipe ]);
    }

    return (
        <RecipeContext.Provider value={{recipes, updateRecipes}}>
            {children}
        </RecipeContext.Provider>

    )
}