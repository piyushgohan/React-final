import style from "./mystyle.module.css";
import React from 'react';

function ButtonIcon({title, Icon}) {
    return (
        <div className="flex flex-col items-center group">
            <a href="/" className={`bg-gradient-to-r from-green-400 to-blue-500 
            p-5 rounded-full ${style.glow}`}>
                <Icon className="h-20 m-2 text-white animate-pulse" />
            </a>
            <p className="mt-2 text-lg text-gray-400 group-hover:text-white font-medium tracking-wider">{title}</p>
        </div>
    )
}

export default ButtonIcon
