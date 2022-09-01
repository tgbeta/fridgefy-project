import { createContext, useState } from 'react';

export const IngredientContext = createContext();

export const IngredientProvider = ({children}) => {
    const [ingredients, setIngredients] = useState([]);

    const updateIngredients = (newIngredient) => {
        setIngredients([ ...ingredients, newIngredient ]);
    }

    return (
        <IngredientContext.Provider value={{ingredients, updateIngredients}}>
            {children}
        </IngredientContext.Provider>

    )
}