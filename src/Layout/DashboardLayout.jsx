import { FaBook, FaCalendarAlt, FaHome, FaSchool, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
    //const [cart] = useCart();
    //TODO: load data from the server to have dynamic isAdmin based on the data
    //const isAdmin = true;
    //const [isAdmin] = useAdmin();
    const isAdmin = false;
    const isInstructor = true;
    return (
        <>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-[#24a9e1] text-base-content">
                        {/* Sidebar content here */}
                        {
                            isAdmin ? <>
                                <li><NavLink to="/dashboard/adminhome"><FaHome></FaHome> Admin Home</NavLink></li>
                                <li><NavLink to="/dashboard/additem"><FaUtensils></FaUtensils> Add Items</NavLink></li>
                                <li><NavLink to="/dashboard/manageitems"><FaWallet></FaWallet> Manage Items</NavLink></li>
                                <li><NavLink to="/dashboard/managebookings"><FaBook></FaBook> Manage Bookings</NavLink></li>
                                <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> All Users</NavLink></li>
                            </> :
                            isInstructor ? <>
                            <li><NavLink to="/dashboard/addAClass"><FaHome></FaHome>Add A Class</NavLink></li>
                            <li><NavLink to="/dashboard/myClass"><FaCalendarAlt></FaCalendarAlt> My Class</NavLink></li>
                            <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> isInstructor</NavLink></li>
                            
                            </> : 
                            <>
                            <li><NavLink to="/dashboard/userhome"><FaSchool></FaSchool> My Selected Classes</NavLink></li>
                            <li><NavLink><FaCalendarAlt></FaCalendarAlt> My Enrolled Classes</NavLink></li>
                            </>
                        }



                        {/* <li><NavLink to="/dashboard/userhome"><FaSchool></FaSchool> My Selected Classes</NavLink></li>
                        <li><NavLink><FaCalendarAlt></FaCalendarAlt> My Enrolled Classes</NavLink></li> */}
                        {/* <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Payment History</NavLink></li> */}


                        <div className="divider"></div>
                        <li><NavLink to="/"><FaHome></FaHome>Style Camp Home</NavLink></li>
                    </ul>

                </div>
            </div>
        </>
    );
}

export default DashboardLayout;