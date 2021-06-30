import style from "./mystyle.module.css";
import React from 'react';

function MenuItems({title, Icon}) {
    return (
        <div className={`group flex flex-col items-center w-12 cursor-pointer sm:w-24 hover:text-white font-semibold ${style.bounce} mt-3`}>
            <Icon className="h-11 mb-1 text-gray-300 group-hover:text-white" />
            <p className="tracking-widest opacity-0 group-hover:opacity-100 uppercase">{title}</p>
        </div>
    )
}

export default MenuItems
