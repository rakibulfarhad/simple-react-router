import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle={fontWeight: "bold",
    color: "red"}
    return (
        <div>
            <nav>


                <NavLink activeStyle={activeStyle} to="/">Home</NavLink>


                <NavLink activeStyle={activeStyle} to="/friends">Friends</NavLink>
                <NavLink activeStyle={activeStyle} to="/about">About</NavLink>
                <NavLink activeStyle={activeStyle} to="/about/culture">Culture</NavLink>


            </nav>
        </div>
    );
};

export default Header;