import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifts";

export const useFetchGifs = (category) =>{

    const [images,setImages] = useState([]);
    const [isloading, setIsloading] = useState(true);

    const getImages = async () =>{
        const newImages = await getGifts(category);
     
        setImages(newImages);
        setIsloading(false);
        console.log(images);

    }



    useEffect(()=>{
        getImages();

       
    }, []);


    return{
        images,
        isloading
    }

}