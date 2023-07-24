import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";



const Header = () => {
    const { user } = useContext(AuthContext)
   
    const nevItem = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/College'>Colleges</NavLink></li>
        <li><NavLink to='/Admission'>Admission</NavLink></li>
        <li><NavLink to='/MyCollege'>My College</NavLink></li>
        <li><NavLink to='/Register'>Register</NavLink></li>
        <li><NavLink to='/Login'>Login</NavLink></li>
        
    </>

    return (

        <div className="navbar bg-base-100 px-20 border-b-4 border-[#352f2f]">
            <div className="">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {nevItem}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">daisyUI</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {nevItem}
                </ul>
            </div>
            <div className="">
                {/* <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" /> */}
                <Link to="/Profile" className="text-2xl font-medium">{user?.displayName}</Link>
            </div>
        </div>

    );
};

export default Header;
