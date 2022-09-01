import React from 'react';
import MyFridge from '../MyFridge/MyFridge.jsx';
import Search from '../Search/Search.jsx';
import MyRecipes from '../MyRecipes/MyRecipes';

export default function Recipes() {

    return (
        <div className="column-container">
            <MyFridge />
            <Search />
            <MyRecipes />
        </div>
    )
}