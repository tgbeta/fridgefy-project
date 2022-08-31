import { createContext } from 'react';

export const RecipeContext = ({children}) => {
    const [recipes, setRecipes] = useState([]);

    const updateRecipes = (newRecipe) => {
        setRecipes([ ...recipes, newRecipe ]);
    }

    // return (

    // )
}