import React from 'react'

function Footer() {
    return (
        <footer className="flex flex-row justify-between text-gray-300 mt-20 box-border px-20 mb-10">
            <div className="flex flex-col">
                <h3 className="text-2xl my-2 text-yellow-400 tracking-widest font-bold">ONLINE STORE</h3>
                <p className="font-semibold mb-1 cursor-pointer hover:text-white text-lg">MEN CLOTHING</p>
                <p className="font-semibold mb-1 cursor-pointer hover:text-white text-lg">WOMEN CLOTHING</p>   
                <p className="font-semibold mb-1 cursor-pointer hover:text-white text-lg">MEN ACCESSORIES</p>
                <p className="font-semibold mb-1 cursor-pointer hover:text-white text-lg">WOMEN ACCESSORIES</p>
            </div>
            <div className="flex flex-col">
                <h3 className="text-2xl my-2 text-yellow-400 tracking-widest font-bold">HELPFUL LINKS</h3>
                <p className="font-semibold mb-1 cursor-pointer hover:text-white text-lg">HOME</p>
                <p className="font-semibold mb-1 cursor-pointer hover:text-white text-lg">ABOUT</p>
                <p className="font-semibold mb-1 cursor-pointer hover:text-white text-lg">CONTACT</p>
            </div>
            <div className="flex flex-col">
                <h3 className="text-2xl my-2 text-yellow-400 tracking-widest font-bold">PATNERS</h3>
                <p className="font-semibold mb-1 cursor-pointer hover:text-white text-lg">ZARA</p>
                <p className="font-semibold mb-1 cursor-pointer hover:text-white text-lg">PANTALOONS</p>
                <p className="font-semibold mb-1 cursor-pointer hover:text-white text-lg">LEVIS</p>
                <p className="font-semibold mb-1 cursor-pointer hover:text-white text-lg">UCB</p>
                <p className="font-semibold mb-1 cursor-pointer hover:text-white text-lg">+ MANY MORE</p>
            </div>
            <div className="flex flex-col">
                <h3 className="text-2xl my-2 text-yellow-400 tracking-widest font-bold">ADDRESS</h3>
                <p className="font-semibold mb-1 text-white text-lg">BUILDING 101</p>
                <p className="font-semibold mb-1 text-white text-lg">CENTRAL AVENUE</p>
                <p className="font-semibold mb-1 text-white text-lg">LA - 902722</p>
            </div>
        </footer>
    )
}

export default Footer
