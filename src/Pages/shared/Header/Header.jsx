import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const Header = () => {
    const { user, SignOutUser, loginWithGoogle, CreateUser, login } = useContext(AuthContext)
    // console.log(user)

    const handleSignOut = () => {
        SignOutUser()

    }



    const routeName = <>
        <li><NavLink className={({ isActive }) => (isActive ? 'text-error font-semibold  ' : 'text-dark')} to="/">Home</NavLink></li>
        <li><NavLink className={({ isActive }) => (isActive ? 'text-error  font-semibold' : 'text-dark')} to="/allToys">All Toys</NavLink></li>
        
            <><li><NavLink className={({ isActive }) => (isActive ? 'text-error font-semibold ' : 'text-dark')} to="/myToys">My Toys</NavLink></li>
                <li><NavLink className={({ isActive }) => (isActive ? 'text-error  font-semibold' : 'text-dark')} to="/addAToy">Add A Toy</NavLink></li></>
        
        <li><NavLink className={({ isActive }) => (isActive ? 'text-error  font-semibold' : 'text-dark')} to="/blogs">Blogs</NavLink></li>


    </>
    return (
        <div className='container mx-auto'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {

                                routeName

                            }
                        </ul>
                    </div>
                    <img src="https://i.ibb.co/bj0LbmF/lego-2-svgrepo-com-1.png" className='w-8 md:w-16' alt="" />
                    <h2 className='font-bold md:text-xl'><span className='md:font-extrabold'>G</span>O LO<span className='md:font-extrabold'>G</span>O</h2>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {

                            routeName

                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        <div className="tooltip tooltip-left" data-tip={user?.displayName}>

                            {
                                user?.photoURL ? <img style={{ height: 50, width: 50 }} src={user.photoURL} className="rounded-full mx-2 " /> : ""
                            }

                        </div>
                    }
                    {
                        user ? <Link ><button onClick={handleSignOut} className="btn  bg-purple-400 ">Log out</button>
                        </Link> : <Link to="/login"><button className="btn  bg-purple-400 ">Login</button>
                        </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;