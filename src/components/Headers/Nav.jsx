import { NavLink } from "react-router-dom";
import ico from '../../assets/image/cottage_FILL0_wght400_GRAD0_opsz24.png'
const Header = () => {
    const links = <>
        <li>  <NavLink
            className={({ isActive }) =>
                isActive ? 'btn btn-outline btn-primary' : 'font-bold'
            }
            to='/'
        >
            Home
        </NavLink></li>

        <li><NavLink className={({ isActive }) =>
            isActive ? 'btn btn-outline btn-primary' : 'font-bold'
        } to="/Update Prfile"
        >
           Update Profile
        </NavLink></li>

        <li><NavLink className={({ isActive }) =>
            isActive ? 'btn btn-outline btn-primary' : 'font-bold'
        } to="/DetailsPage">
           Details Page </NavLink>
        </li>
        <li><NavLink className={({ isActive }) =>
            isActive ? 'btn btn-outline btn-primary' : 'font-bold'
        } to="/UserProfile">
           Profile </NavLink>
        </li>
      
    </>
    return (
        <div className="navbar skeleton w-full bg-teal-500 mt-10 font-bold max-sm:flex max-sm:flex-col shadow-lg  relative">
            
            <div className="navbar-start">
              
                <div className="dropdown">
                    <div className="0" role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                    
                </div>
                <a className="ml-10 text-3xl text-blue-900 flex flex-col ">Residential <span className=" text-blue-700 ml-16 text-2xl flex gap-2"><img src={ico} alt="" /> Zones</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4 text-white">
                    {links}
                </ul>
                
            </div>
            <div className="navbar-end gap-5 mr-5 ">     
                <button className="btn btn-info text-white w-28">Log in</button>
            </div>
            

        </div>
    );
};

export default Header;