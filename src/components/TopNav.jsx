import { NavLink } from "react-router";

const TopNav = () => {
    return (
        <div>
            <nav className="bg-white border border-slate-400 shadow-lg shadow-blue-200 max-w-[98%] mx-auto rounded-br-lg rounded-bl-lg">
                <div
                    className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-gamepad-2 w-9 h-9 text-black border-1 border-white rounded-xl ">
                            <line x1="6" x2="10" y1="11" y2="11" />
                            <line x1="8" x2="8" y1="9" y2="13" />
                            <line x1="15" x2="15.01" y1="12" y2="12" />
                            <line x1="18" x2="18.01" y1="10" y2="10" />
                            <path
                                d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />
                        </svg>
                        <span
                            className=" font-pixelify self-center text-3xl whitespace-nowrap text-black">GameZone</span>
                    </NavLink>
                    <div
                        className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button
                            type="button"
                            className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                            id="user-menu-button"
                            aria-expanded="false"
                            data-dropdown-toggle="user-dropdown"
                            data-dropdown-placement="bottom">
                            <span className="sr-only">Open user menu</span>
                            <img
                                className="w-8 h-8 rounded-full"
                                src="/docs/images/people/profile-picture-3.jpg"
                                alt="user photo" />
                        </button>

                        <div
                            className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600"
                            id="user-dropdown">
                            <div className="px-4 py-3">
                                <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                            </div>
                            <ul className="py-2" aria-labelledby="user-menu-button">
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                                </li>
                            </ul>
                        </div>
                        <button
                            data-collapse-toggle="navbar-user"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-user"
                            aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14">
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div
                        className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                        id="navbar-user">
                        <ul
                            className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white   dark:border-gray-700">
                            <li>
                                <NavLink
                                    to="/"
                                    className={(
                                        { isActive }) => `group relative w-max font-ubuntu font-semibold block py-2 px-3 rounded-sm md:p-0 ${isActive ? 'text-blue-700 ' : 'text-gray-900'}  md:hover:bg-transparent md:hover:text-blue-700   md:dark:hover:bg-transparent `
                                    }>
                                    Home
                                    <span
                                        className="absolute -bottom-1 left-0 w-0 transition-all duration-300 h-0.5 bg-indigo-500 group-hover:w-full"
                                    ></span>
                                </NavLink>
                                
                            </li>

                            <li>
                                <NavLink
                                    to="/blogs"
                                    className={(
                                        { isActive }) => `group relative w-max font-ubuntu font-semibold block py-2 px-3 rounded-sm md:p-0 ${isActive ? 'text-blue-700 ' : 'text-gray-900 '}  md:hover:bg-transparent md:hover:text-blue-700  md:dark:hover:bg-transparent`
                                    }>
                                    Blogs
                                    <span
                                        className="absolute -bottom-1 left-0 w-0 transition-all duration-300 h-0.5 bg-indigo-500 group-hover:w-full"
                                    ></span>
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to='/tournaments'
                                    className={(
                                        { isActive }) => `group relative w-max font-ubuntu font-semibold block py-2 px-3 rounded-sm md:p-0 ${isActive ? 'text-blue-700' : 'text-gray-900 '}  md:hover:bg-transparent md:hover:text-blue-700   md:dark:hover:bg-transparent`
                                    }>Tournaments
                                    <span
                                    className="absolute -bottom-1 left-0 w-0 transition-all duration-300 h-0.5 bg-indigo-500 group-hover:w-full"
                                >

                                </span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/about'
                                    className={(
                                        { isActive }) => `group relative w-max font-ubuntu font-semibold block py-2 px-3 rounded-sm md:p-0 ${isActive ? 'text-blue-700 ' : 'text-gray-900 '}  md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent`
                                    }>About
                                    <span
                                        className="absolute -bottom-1 left-0 w-0 transition-all duration-300 h-0.5 bg-indigo-500 group-hover:w-full"
                                    ></span>
                                    </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/contact'
                                    className={(
                                        { isActive }) => `group relative w-max font-ubuntu font-semibold block py-2 px-3 rounded-sm md:p-0 ${isActive ? 'text-blue-700 ' : 'text-gray-900 '}  md:hover:bg-transparent md:hover:text-blue-700   md:dark:hover:bg-transparent`
                                    }>Contact
                                    <span
                                        className="absolute -bottom-1 left-0 w-0 transition-all duration-300 h-0.5 bg-indigo-500 group-hover:w-full"
                                    ></span>
                                    </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/forums'
                                    className={(
                                        { isActive }) => `group relative w-max font-ubuntu font-semibold block py-2 px-3 rounded-sm md:p-0 ${isActive ? 'text-blue-700 ' : 'text-gray-900 '}  md:hover:bg-transparent md:hover:text-blue-500  md:dark:hover:bg-transparent`
                                    }>Forums
                                    <span
                                        className="absolute -bottom-1 left-0 w-0 transition-all duration-300 h-0.5 bg-indigo-500 group-hover:w-full"
                                    ></span>
                                    </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/News'
                                    className={(
                                        { isActive }) => `group relative w-max font-ubuntu font-semibold  block py-2 px-3 rounded-sm md:p-0 ${isActive ? 'text-blue-700 ' : 'text-gray-900 '}  md:hover:bg-transparent md:hover:text-blue-700 dark:hover:bg-gray-700  md:dark:hover:bg-transparent`
                                    }>News
                                    <span
                                        className="absolute -bottom-1 left-0 w-0 transition-all duration-300 h-0.5 bg-indigo-500 group-hover:w-full"
                                    ></span>
                                    </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default TopNav;