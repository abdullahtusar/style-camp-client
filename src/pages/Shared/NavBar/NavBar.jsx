import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import './NavBar.css';
import DarkModeToggle from 'react-dark-mode-toggle';
import styleLogo from '../../../assets/logo_stylecamp.png'
const NavBar = () => {
    const [isDarkMode, setIsDarkMode] = useState(
        localStorage.getItem('darkMode') === 'true'
    );

    useEffect(() => {
        localStorage.setItem('darkMode', isDarkMode);
        if (isDarkMode) {
            document.documentElement.classList.add('dark-mode');
        } else {
            document.documentElement.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };


    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Instructors</Link></li>
        <li><Link to="/order/salad">Classes</Link></li>
    </>
    return (
        <div className='max-w-screen-2xl mx-auto px-4'>
            <div className="navbar border-b-2 px-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden pl-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="font-semibold menu menu-compact dropdown-content mt-3 p-2 shadow bg-black bg-opacity-75 text-white rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case bg-opacity-10 border-0 flex gap-0 justify-center items-center p-0"><img width="50px" src={styleLogo}/><span className="font-extrabold text-xl md:text-2xl text-[#ee4036]">Style Camp</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="font-semibold menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <DarkModeToggle
                        onChange={toggleDarkMode}
                        checked={isDarkMode}
                        size={50}
                    />
                </div>
            </div>
        </div>
    );
};

export default NavBar;