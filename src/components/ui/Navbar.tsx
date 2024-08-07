import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link 
                    className="text-white text-lg font-bold" 
                    to="/"
                >
                    Asociaciones
                </Link>

                <div className="flex">
                    <NavLink 
                        className="text-gray-300 mx-2 hover:text-white" 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className="text-gray-300 mx-2 hover:text-white" 
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className="text-gray-300 mx-2 hover:text-white" 
                        to="/login"
                    >
                        Logout
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};
