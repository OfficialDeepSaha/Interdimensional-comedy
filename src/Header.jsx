import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth, db } from './firebaseConfig';

const Header = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState(false); // State to control dropdown visibility
    const dropdownRef = useRef(null); // Reference to the dropdown


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);



      // Handle logout
      const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/login'); // Redirect to login page after logout
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    const handleToggleDropdown = () => {
        setDropdownOpen((prev) => !prev);
    };

    // Close the dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false); // Close the dropdown if click is outside
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#292938] px-10 py-3">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-4 text-white">
                            <div className="size-4">
                                <svg
                                    viewBox="0 0 48 48"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clipPath="url(#clip0_6_330)">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                                            fill="currentColor"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_6_330">
                                            <rect width={48} height={48} fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                                Interdimensional comedy
                            </h2>
                        </div>
                        <div className="flex items-center gap-9">
                            <a className="text-white text-sm font-medium leading-normal" href="#">
                                Kids' music
                            </a>
                            <a className="text-white text-sm font-medium leading-normal" href="#" onClick={() => navigate("/create-comedy")}>
                                Comedy shows
                            </a>
                            <a className="text-white text-sm font-medium leading-normal" href="#">
                                Mixes
                            </a>
                            <a className="text-white text-sm font-medium leading-normal" href="#">
                                New releases
                            </a>
                            <a className="text-white text-sm font-medium leading-normal" href="#">
                                Your library
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-1 justify-end gap-8">
                        <label className="flex flex-col min-w-40 !h-10 max-w-64">
                            <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                                <div
                                    className="text-[#9d9db8] flex border-none bg-[#292938] items-center justify-center pl-4 rounded-l-xl border-r-0"
                                    data-icon="MagnifyingGlass"
                                    data-size="24px"
                                    data-weight="regular"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24px"
                                        height="24px"
                                        fill="currentColor"
                                        viewBox="0 0 256 256"
                                    >
                                        <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
                                    </svg>
                                </div>
                                <input
                                    placeholder="Search"
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#292938] focus:border-none h-full placeholder:text-[#9d9db8] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                                    defaultValue=""
                                />
                            </div>
                        </label>
                        <div className="flex gap-2">
                            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#1919e6] text-white text-sm font-bold leading-normal tracking-[0.015em]" onClick={() => navigate('/subscription')}>
                                <span className="truncate">Upgrade to Premium</span>
                            </button>

                            {user ? (
                                <div className="relative flex items-center">
                                    {/* Profile Icon (Circular Button) */}
                                    <div className="relative group">
                                        <button className="w-10 h-10 rounded-full bg-gray-500 hover:bg-gray-700 flex items-center justify-center" onClick={handleToggleDropdown}>
                                            {/* You can replace this with the user's avatar if available */}
                                            <span className="text-white text-lg">{user.email.charAt(0).toUpperCase()}</span>
                                        </button>

                                        {dropdownOpen && (
                                            <div
                                                ref={dropdownRef}
                                                className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg"
                                            >
                                                <ul className="py-2">
                                                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer" onClick={()=> navigate("/profile")}>Profile</li>
                                                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer" onClick={handleLogout}>
                                                        Logout
                                                    </li>
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ) : (

                                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#292938] text-white text-sm font-bold leading-normal tracking-[0.015em]" onClick={() => navigate('/login')}>
                                    <span className="truncate">Log in</span>
                                </button>)}
                        </div>
                    </div>
                </header>
  )
}


export default Header;