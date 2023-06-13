import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import './NavBar.css';
import DarkModeToggle from 'react-dark-mode-toggle';
import styleLogo2 from '../../../assets/StyleCamp_logo.png'
import useAuth from "../../../hooks/useAuth";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";

const NavBar = () => {
    const { user, logOut } = useAuth();
    const [isAdmin]  = useAdmin();
    const [isInstructor]  = useInstructor();
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

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/instructors">Instructors</Link></li>
        <li><Link to="/order/salad">Classes</Link></li>
        {
            user && <li><Link to={isAdmin ? '/dashboard/manageUsers' : isInstructor ? '/dashboard/myclass' : '/dashboard/selectedClasses'}>Dashboard</Link></li>
        }
    </>
    return (
        <div className='mx-auto max-w-screen-2xl md:px-4'>
            <div className="navbar border-b-2 sticky z-30 bg-base-200 lg:bg-inherit bg-opacity-80">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost px-2 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black bg-opacity-75 text-white rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <a className="btn btn-ghost normal-case bg-opacity-10 border-0 flex gap-0 justify-center items-center p-0"><img className="w-[25px] md:w-[50px]" src={styleLogo2} /><span className="font-extrabold text-md md:text-2xl text-[#24a9e1]">Style Camp</span></a>
                    </motion.div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end px-1 md:px-0">
                    {
                        user ? <div className="flex items-center">
                            <Link onClick={handleLogOut} className="btn btn-neutral btn-sm text-white bg-[#24a9e1] border-0 mr-3">LogOut</Link> 
                            {
                                user.photoURL && <div className="tooltip tooltip-bottom hidden md:block" data-tip={`${user.displayName}`}>
                                    <img style={{ height: "50px", width: "50px" }} src={user.photoURL} className='rounded-3xl mr-3 border-2 border-gray-300' />
                                </div>

                            }
                            </div>
                            :
                            <div>
                                <Link to="/login" className="btn btn-neutral btn-sm text-white bg-[#24a9e1] border-0 mr-3">Login</Link>
                            </div>
                    }
                    <motion.div
                        className="hidden md:block"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2 }}
                    >
                        <DarkModeToggle
                            onChange={toggleDarkMode}
                            checked={isDarkMode}
                            size={50}
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;