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
  
import { auth, db } from '../firebase-config';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

const recipesCollection = collection(db, 'recipes');

export const RecipeContext = createContext();

export const RecipeProvider = ({children}) => {
    const [recipes, setRecipes] = useState([]);
    const [user, setUser] = useState(null);
    useEffect(()=> {
        onAuthStateChanged(auth, async (user)=>{
            if(user){
                console.log('úser', user)
                setUser(user);
                const q = query(recipesCollection, where('userId', '==', user.uid))
                const result = await getDocs(q);
                const recipesFromDb = result.docs.map(doc => ({...doc.data(), dbId:doc.id}))
                setRecipes(recipesFromDb);
            } else {
                setUser(null);
                setRecipes([]);
            }
        })
    }, [])
    const updateRecipes = (newRecipe) => {
        setRecipes([ ...recipes, newRecipe ]);
    }

    const addRecipe = async(recipe) => {
        const recipeToAdd = {...recipe, userId:user.uid}
        const newRecipe = await addDoc(recipesCollection, recipeToAdd);
        setRecipes([...recipes, {...recipe, dbId:newRecipe.id } ]);
    }

    const removeRecipe = async(recipe) => {
        const recipeRemoved = doc(db, 'recipes', recipe.id);
        await deleteDoc(recipeRemoved);
        const filteredRecipe = recipes.filter((item) => item.id !== recipe.id);
        setRecipes([filteredRecipe]);
    }

    return (
        <RecipeContext.Provider value={{recipes, updateRecipes, addRecipe, removeRecipe, setRecipes}}>
            {children}
        </RecipeContext.Provider>

    )
}



