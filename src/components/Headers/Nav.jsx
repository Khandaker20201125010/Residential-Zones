import { NavLink } from "react-router-dom";
import moment from 'moment';
import ico from '../../assets/image/cottage_FILL0_wght400_GRAD0_opsz24.png';
import { AuthContext } from "../Providers/Authprovider";
import { useContext } from "react";
const Nav = () => {
    const {user,logOut} = useContext(AuthContext);
    const  handelSignOut = () => {
        logOut()
        .then()
        .catch()


    }
    const links = (
        <>
            <li>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? 'btn btn-outline btn-primary' : 'font-bold'
                    }
                    to='/'
                >
                    Home
                </NavLink>
            </li>

            <li>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? 'btn btn-outline btn-primary' : 'font-bold'
                    }
                    to="/UpdateProfile"
                >
                    Update Profile
                </NavLink>
            </li>

            <li>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? 'btn btn-outline btn-primary' : 'font-bold'
                    }
                    to="/DetailsPage"
                >
                    Details Page
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? 'btn btn-outline btn-primary' : 'font-bold'
                    }
                    to="/UserProfile"
                >
                    Profile
                </NavLink>
            </li>
        </>
    );

    return (
        <div className="navbar w-full mt-5 bg-teal-500 font-bold">
            <div className="navbar-start skeleton bg-teal-500">
                <div className="dropdown">
                    <div role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="ml-10 text-3xl text-blue-900 flex flex-col font-bold">Residential <span className="text-blue-700 ml-16 text-2xl flex gap-2 font-bold"><img src={ico} alt="" /> Zones</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4 text-white">
                    {links}
                </ul>
            </div>
            <p className='ml-12 text-xl w-96 font-bold'>{moment().format('MMMM Do YYYY, h:mm a')}</p>
          
            <div className="navbar-end gap-5 mr-5">
            {
                user ?
                <button onClick={handelSignOut} className="btn btn-info text-white w-28">Sign Out</button>
                :
                <NavLink to="/Login">
                    <button className="btn btn-info text-white w-28">Log in</button>
                </NavLink>

            }
                
            </div>
        </div>
    );
};

export default Nav;