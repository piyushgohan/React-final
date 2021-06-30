import React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios';
import Cards from './Cards';

function Clothing() {
    const [products,setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
        .then(res => setProducts(res.data))
        .catch(err => console.error(err));
    },[]);

    return (
        <div>
            <h1 className="tracking-widest text-4xl my-14 text-center text-white">{`Clothing for Men & Women`}</h1>
            <div className="flex justify-evenly w-full flex-wrap ">
                {
                    products.map((item) =>{
                     if(item.id<=5)
                        return <a href={`./product?id=${item.id}`}><Cards {...item} key={item.id} /></a>
                })
                }
            </div>
            <h1 className="tracking-widest text-4xl my-14 text-center text-white ">{`Accessories for Men & Women`}</h1>
            <div className="flex justify-evenly w-full flex-wrap ">
                {
                    products.map((item) =>{
                     if(item.id<=10 && item.id>5)
                        return <a href={`./product?id=${item.id}`}><Cards {...item} key={item.id}/></a>
                })
                }
            </div>

        </div>
    )
}

export default Clothing
