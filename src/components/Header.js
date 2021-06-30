import React from 'react';
import logo from './SHOPLANE.gif';
import MenuItems from './MenuItems';
import {
    HomeIcon,
    CollectionIcon,
    ChipIcon,
    SearchIcon,
    LoginIcon,
    ShoppingCartIcon,
} from '@heroicons/react/outline';

function Header() {
    return (
        <header className="flex flex-row justify-between">
            <div className="flex flex-row items-center mt-5 box-border ml-3">
                <a href="./"><MenuItems title="home" Icon={HomeIcon} /></a>
                <a href="./"><MenuItems title="clothing" Icon={CollectionIcon} /></a>
                <a href="./"><MenuItems title="Accessories" Icon={ChipIcon} /></a>
            </div>
            <div className="mt-3 cursor-pointer">
                <img src={logo} width={350} height={150} alt="logo" />
            </div>
            <div className="flex flex-row items-center mt-5 box-border mr-3">
                <div className="flex flex-row items-center box-border">
                    <MenuItems title="Search" Icon={SearchIcon} />
                </div>
                <MenuItems title="Cart" Icon={ShoppingCartIcon} />
                <MenuItems title="login" Icon={LoginIcon} />
            </div>
        </header>
    )
}

export default Header