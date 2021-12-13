import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

 
const GifExpertApp = () =>{

   
   const [categories, setCategories] = useState(['Betty la fea']);

   
    return(
        <>
        <h2 className="animate__hinge">Busca Gifs</h2>
        <AddCategory setCategories={setCategories}/>
        <hr />

        

        <ol>
            {
                categories.map(category  => 
                    <GifGrid 
                        key={category}
                        category= {category}
                    />
                )
            }
        </ol>
        </>
    ) 
}
export default GifExpertApp;

