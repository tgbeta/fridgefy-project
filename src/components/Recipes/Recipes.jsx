import React, { useEffect, useState } from 'react';
import MyFridge from '../MyFridge/MyFridge.jsx';
import Search from '../Search/Search.jsx';
import MyRecipes from '../MyRecipes/MyRecipes';

export default function Recipes() {

    const [ myRescipes, setMyRescipes ] = useState([]);

    const handleToAdd = (item) => {
        if(!myRescipes.includes(item)){
            setMyRescipes((prev) => [...prev, item])
        }else{
            alert(item.title + " has already in my recipe!")
        }
    };

    const handleToDelete = (id) => {
        let newRecipeList = myRescipes.filter((item, index) => {
            if(item.id != id){
                return item
            }
        });

        setMyRescipes(newRecipeList);
    };

    useEffect(() => {
        console.log("action");
        localStorage.setItem("myRescipes", JSON.stringify(myRescipes))
    }, [myRescipes])


    return (
        <div className="column-container">
            <MyFridge />
            <Search handleToAdd={handleToAdd} />
            <MyRecipes myRecipes={myRescipes} handleToDelete={handleToDelete} />
        </div>
    )
}