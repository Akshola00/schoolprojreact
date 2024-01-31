import React from "react";
import {Link} from "react-router-dom"
export const Navbar = () => {
    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* logo of the school */}
                <div className="text-white font-bold text-lg">
                    School Logo
                </div>

                {/* nav links */}
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="text-white hover:text-green-400" >Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-white hover:text-green-400" >About</Link>
                    </li>
                    <li>
                        <Link to="/gallery" className="text-white hover:text-green-400" >Gallery</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="text-white hover:text-green-400">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}