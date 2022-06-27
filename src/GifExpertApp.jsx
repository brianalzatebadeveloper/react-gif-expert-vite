import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState([]);

  const onAddCategory = (value) => {

    if ( !categories.includes(value) )
    {
      setCategories(ctg => [value, ...ctg]);
    }
  }

  return (
    <>
      {/* title */}
      <h1>GifExpertApp</h1>

      {/* input */}
      <AddCategory onAddCategory={onAddCategory} />

      {/* list gifs */}
      <ol>
        { 
          categories.map( category => (
              <GifGrid 
                key={category}
                category={category} 
              />
          )) 
        }
      </ol>

      {/* gif item */}
    </>
  )
}
