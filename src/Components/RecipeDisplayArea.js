import React from "react";
import SingleItem from "./SingleItem";
import { v4 as uuidv4 } from 'uuid';


const RecipeDisplayArea = ({data, setData, bookmarks, setBookmarks, showAlert}) => {
  return (
    <div className="container mt-4 text-center">
      <div className="card-deck">
        {data.map((item, index)=>{
            return (
                <SingleItem showAlert={showAlert} bookmarks={bookmarks} setBookmarks={setBookmarks} id={uuidv4()} label={item.recipe.label} image={item.recipe.image} data={item}/>
            )
        })}
      </div>
    </div>
  );
};

export default RecipeDisplayArea;
