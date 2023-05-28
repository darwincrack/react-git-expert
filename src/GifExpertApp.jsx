import { useState } from "react"
import { AddCategory, GifGrid } from "./components";


export const GifexpertApp = () =>{

    const [categories,setCategories] = useState(['sonrisa']);

    const onAddCategory = (newCategory)=>{
        if(categories.includes(newCategory)) return;
        setCategories([newCategory,...categories]);
    
    } 

    return (
        <>


            <h1>gifExpertAppss</h1>
            <AddCategory 
                OnNewCategory={
                    (value)=>onAddCategory(value)
                }
            />
         
            {
                categories.map((category)=>(
                    <GifGrid 
                    key={category}
                    category={category}/>
                ))
            }
            
        </>
    )
}