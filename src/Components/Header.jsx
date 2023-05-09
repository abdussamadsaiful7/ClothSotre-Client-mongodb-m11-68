/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='banner'>
            <div className='flex justify-between pb-40 mx-20 pt-6 font-bold'>
                <div>
                    logo
                </div>
                <div className='space-x-6'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/addCloth">Add Cloth</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/about">About Us</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;