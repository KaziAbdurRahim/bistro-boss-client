import React from 'react';

const Navbar = () => {
    const links = < >
        <li><a>Item 1</a></li>
        <li>
            <details>
                <summary>Parent</summary>
                <ul className="p-2 bg-black">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
            </details>
        </li>
        <li><a>Item 3</a></li>
    </>
    return (
        <div className="navbar opacity-65 bg-black text-white shadow-sm fixed z-10 max-w-screen-xl flex  justify-between ">
            <div className="">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        class="menu menu-sm dropdown-content bg-black rounded-box z-1 mt-3 w-52 p-2 shadow ">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Bistro Boss</a>
            </div>
           <div className='flex'>
           <div className="hidden lg:flex">
                <ul className="menu menu-horizontal px-1 bg-black">
                    {links}
                </ul>
            </div>
            <div className="">
                <a className="btn">Button</a>
            </div>
           </div>
        </div>
    );
};

export default Navbar;