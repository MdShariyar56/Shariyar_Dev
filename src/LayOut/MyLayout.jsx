import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const MyLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
             <Outlet></Outlet>
        </div>
    );
};

export default MyLayout;