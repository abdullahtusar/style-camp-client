import { FaCalendarAlt, FaHome, FaPlus, FaSchool, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const DashboardLayout = () => {
    //const [cart] = useCart();
    //TODO: load data from the server to have dynamic isAdmin based on the data
    //const isAdmin = true;
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    //const isAdmin = true;
    //const isInstructor = true;
    return (
        <>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-start mt-12">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary bg-[#24a9e1] border-0 text-white drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side bg-[#24a9e1]">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full text-base-content">
                        {/* Sidebar content here */}
                        {
                            isAdmin ? <>
                                <li><NavLink to="/dashboard/manageClasses"><FaSchool></FaSchool> Manage Classes</NavLink></li>
                                <li><NavLink to="/dashboard/manageUsers"><FaUsers></FaUsers> Manage Users</NavLink></li>
                            </> :
                            isInstructor ? <>
                            <li><NavLink to="/dashboard/addAClass"><FaPlus></FaPlus>Add A Class</NavLink></li>
                            <li><NavLink to="/dashboard/myclass"><FaSchool></FaSchool> My Class</NavLink></li>
                            </> : 
                            <>
                            <li><NavLink to="/dashboard/selectedClasses"><FaSchool></FaSchool> My Selected Classes</NavLink></li>
                            <li><NavLink to="/dashboard/enrolledClasses"><FaCalendarAlt></FaCalendarAlt> My Enrolled Classes</NavLink></li>
                            <li><NavLink to="/dashboard/paymentHistory"><FaCalendarAlt></FaCalendarAlt> My Payment History</NavLink></li>
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