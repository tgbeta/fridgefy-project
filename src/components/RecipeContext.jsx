import { createContext, useState, useReducer } from 'react';
import {
    getDocs,
    collection,
    addDoc,
    doc,
    deleteDoc,
    updateDoc,
    where,
    query,
} from 'firebase/firestore';
  
import { db } from '../firebase-config';

const recipesCollection = collection(db, 'recipes');

export const RecipeContext = createContext();

export const RecipeProvider = ({children}) => {
    const [recipes, setRecipes] = useState([]);

    const updateRecipes = (newRecipe) => {
        setRecipes([ ...recipes, newRecipe ]);
    }

    const addRecipe = async(recipe) => {
        const newRecipe = await addDoc(recipesCollection, recipe);
        setRecipes([...recipes, {...recipe, dbId:newRecipe.id } ])
    }

    const removeRecipe = async(recipe) => {
        const recipeRemoved = doc(db, 'recipes', recipe.id);
        await deleteDoc(recipeRemoved);
        const filteredRecipe = recipes.filter((item) => item.id !== recipe.id);
        setRecipes([filteredRecipe]);
    }

    const getRecipes = async() => {
        const recipeGet = query(recipesCollection);
        const response = await getDocs(recipeGet);
        return response;
    }

    return (
        <RecipeContext.Provider value={{recipes, updateRecipes, addRecipe, removeRecipe, getRecipes}}>
            {children}
        </RecipeContext.Provider>

    )
}



