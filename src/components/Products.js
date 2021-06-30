import React from 'react'
import {useLocation} from "react-router-dom";
import { useState,useEffect} from 'react';
import axios from 'axios';
import Preview from './Preview';

function Products() {
    const link = useLocation().search.split("=");
    const [product,setProduct] = useState([]);
    const [photos,setPhotos] = useState([]);

    useEffect(() => {
        axios.get(`https://5d76bf96515d1a0014085cf9.mockapi.io/product/${link[1]}`)
        .then(res => setProduct(res.data))
        .catch(err => console.log(err));
    },[]);

    useEffect(() =>{
        setPhotos(product.photos);
    },[product.photos])

    console.log(photos);
    return (
        <div className="flex flex-row px-20 my-10">
            <div className="ml-10">
                <img src={product.preview} width={400} height={800}  />
            </div>
            <div>
                <p>{product.name}</p>
                <p>{product.brand}</p>
                <p>Price: <span>Rs.</span>{product.price}</p>
                <p>Description:</p>
                <p>{product.description}</p>
                <p>Product Preview:</p>
                {/* {
                    <Preview Link={photos}/>
                } */}
            </div>
        </div>
    )
}

export default Products
