import React from 'react';
import style from './mystyle.module.css';

function Cards({...item}) {
    return (
        <div className={`w-i group ${style.cards} cursor-pointer`}>
            <img src={item.preview} width={250} height={600} alt={item.name} />
            <div className="group-hover:text-white text-gray-300 group px-2">
                <p className="text-xl mt-2 tracking-wide font-normal group-hover:font-bold">{item.name}</p>
                <p className="text-lg mt-1 opacity-0 group-hover:opacity-100 text-">{item.brand}</p>
                <p className="opacity-0 group-hover:opacity-100"><span className="text-green-400">Rs. </span>{item.price}</p>
            </div>
        </div>
    )
}

export default Cards
