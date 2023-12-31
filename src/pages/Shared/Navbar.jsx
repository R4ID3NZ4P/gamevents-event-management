import { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import userLogo from "../../assets/user.png"

const Navbar = () => {
    const location = useLocation();
    const { user, logout } = useContext(AuthContext);
    const photo = user && user?.photoURL ? user.photoURL : userLogo;
    const navLinks = (
        <>
            <li>
                <NavLink to={"/"}>Home</NavLink>
            </li>
            {!user && <>
                <li>
                    <NavLink to={"/login"}>Login</NavLink>
                </li>
                <li>
                    <NavLink to={"/register"}>Register</NavLink>
                </li>
                
            </>
            }
            <li>
                <NavLink to={"/profile"}>Profile</NavLink>
            </li>
            <li>
                <NavLink to={"/orders"}>Orders</NavLink>
            </li>
        </>
    );

    return (
        <div className={location.pathname === "/" ? "text-white" : ""}>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow ${location.pathname === "/" ? "bg-black" : "bg-base-100"} rounded-box w-52`}
                        >
                            {navLinks}
                        </ul>
                    </div>
                    <a className="normal-case text-xl">Gam<span className="text-red-600">e</span>vents</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <img src={user && photo} alt="" className="rounded-full w-10 mr-2"/>
                    <p className="mr-2">{user?.displayName}</p>
                    {user ? <a className="btn btn-sm" onClick={() => {
                        logout()
                        .catch(e => console.log(e.code))
                    }}>Logout</a> :
                    <Link className="btn btn-sm" to={"/login"}>Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;
