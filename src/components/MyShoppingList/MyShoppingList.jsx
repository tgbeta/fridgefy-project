import React from 'react';
import MyFridge from '../MyFridge/MyFridge.jsx';
import ItemsBuy from '../ItemsBuy/ItemsBuy.jsx';
import RecipesShoppingList from '../RecipesShoppingList/RecipesShoppingList.jsx';

export default function MyShoppingList() {

    return (
        <div className="column-container">
            <MyFridge />
            <RecipesShoppingList />
            <ItemsBuy />
        </div>
    )
}