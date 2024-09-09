import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth, db } from './firebaseConfig'; // Ensure Firebase is configured
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore';



export const Home = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState(false); // State to control dropdown visibility
    const dropdownRef = useRef(null); // Reference to the dropdown
    const [musicItems, setMusicItems] = useState([]);
    const [videos, setVideos] = useState([]);


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


    useEffect(() => {
        const fetchVideos = async () => {
            const comedyCollection = collection(db, "comedy");
            const comedySnapshot = await getDocs(comedyCollection);
            const videoData = comedySnapshot.docs.map(doc => doc.data());
            setVideos(videoData);
        };

        fetchVideos();
    }, []);


    useEffect(() => {
        const fetchMusic = async () => {
            try {
                const musicCollection = collection(db, 'music');
                const snapshot = await getDocs(musicCollection);
                const musicData = snapshot.docs.map(doc => doc.data());
                setMusicItems(musicData);
            } catch (error) {
                console.error("Error fetching music:", error);
            }
        };

        fetchMusic();
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

    // dark group/design-root

    return (
        <div
            className="relative flex size-full min-h-screen flex-col bg-[#111118] dark group/design-root  overflow-x-hidden"
            style={{ fontFamily: '"Be Vietnam Pro", "Noto Sans", sans-serif' }}
        >

            <div className="layout-container flex h-full grow flex-col">
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
                                                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Profile</li>
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
                <div className="gap-1 px-6 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col w-80">
                        <div className="flex h-full min-h-[700px] flex-col justify-between bg-[#111118] p-4">
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-3 px-3 py-2 rounded-full bg-[#292938]">
                                        <div
                                            className="text-white"
                                            data-icon="House"
                                            data-size="24px"
                                            data-weight="fill"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24px"
                                                height="24px"
                                                fill="currentColor"
                                                viewBox="0 0 256 256"
                                            >
                                                <path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z" />
                                            </svg>
                                        </div>
                                        <p className="text-white text-sm font-medium leading-normal">
                                            For you
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3 px-3 py-2">
                                        <div
                                            className="text-white"
                                            data-icon="MusicNoteSimple"
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
                                                <path d="M210.3,56.34l-80-24A8,8,0,0,0,120,40V148.26A48,48,0,1,0,136,184V50.75l69.7,20.91a8,8,0,1,0,4.6-15.32ZM88,216a32,32,0,1,1,32-32A32,32,0,0,1,88,216Z" />
                                            </svg>
                                        </div>
                                        <p className="text-white text-sm font-medium leading-normal" onClick={() => navigate("/create-music")}>
                                            Kids' music
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3 px-3 py-2">
                                        <div
                                            className="text-white"
                                            data-icon="Vignette"
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
                                                <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM178.05,87.66C164.59,77.56,146.81,72,128,72S91.41,77.56,78,87.66C63.79,98.27,56,112.6,56,128s7.79,29.73,22,40.34C91.41,178.44,109.19,184,128,184s36.59-5.56,50.05-15.66C192.21,157.73,200,143.4,200,128S192.21,98.27,178.05,87.66ZM128,168c-30.88,0-56-17.94-56-40s25.12-40,56-40,56,17.94,56,40S158.88,168,128,168Z" />
                                            </svg>
                                        </div>
                                        <p className="text-white text-sm font-medium leading-normal" onClick={() => navigate("/create-comedy")}>
                                            Comedy shows
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3 px-3 py-2">
                                        <div
                                            className="text-white"
                                            data-icon="DotsThreeCircle"
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
                                                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm12-88a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,128Zm-88,0a12,12,0,1,1-12-12A12,12,0,0,1,96,128Z" />
                                            </svg>
                                        </div>
                                        <p className="text-white text-sm font-medium leading-normal">
                                            Mixes
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3 px-3 py-2">
                                        <div
                                            className="text-white"
                                            data-icon="Star"
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
                                                <path d="M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81h0a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Zm-15.22,5-45.1,39.36a16,16,0,0,0-5.08,15.71L187.35,216v0l-51.07-31a15.9,15.9,0,0,0-16.54,0l-51,31h0L82.2,157.4a16,16,0,0,0-5.08-15.71L32,102.35a.37.37,0,0,1,0-.09l59.44-5.14a16,16,0,0,0,13.35-9.75L128,32.08l23.2,55.29a16,16,0,0,0,13.35,9.75L224,102.26S224,102.32,224,102.33Z" />
                                            </svg>
                                        </div>
                                        <p className="text-white text-sm font-medium leading-normal">
                                            New releases
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#1919e6] text-white text-sm font-bold leading-normal tracking-[0.015em]">
                                <span className="truncate">New mix</span>
                            </button>
                        </div>
                    </div>
                    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                        <div className="@container">
                            <div className="@[480px]:p-4">
                                <div
                                    className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
                                    style={{
                                        backgroundImage:
                                            'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/d37fd641-c00c-431f-aa28-c09a349957aa.png")'
                                    }}
                                >
                                    <div className="flex flex-col gap-2 text-center">
                                        <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                                            Welcome to Interdimensional comedy
                                        </h1>
                                        <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                                            Create your own comedy shows and kids' music with AI
                                            assistance. Here's how:
                                        </h2>
                                    </div>
                                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#1919e6] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                                        <span className="truncate">Let's go</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-10 px-4 py-10 @container">
                            <div className="flex flex-col gap-4">
                                <h1 className="text-white tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                                    Your Comedy Shows
                                </h1>
                                <p className="text-white text-base font-normal leading-normal max-w-[720px]">
                                    This is the comedy section where you can find all your created comedy videos.
                                </p>
                            </div>

                            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
                                {videos.map((video, index) => (
                                    <div key={index} className="flex flex-col gap-3 pb-3 transition-transform transform hover:scale-105 hover:shadow-lg">
                                        <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl">
                                            <video controls className="w-full h-full rounded-xl">
                                                <source src={video.vid_url} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>
                                        <p className="text-white text-base font-medium leading-normal">
                                            Comedy Show {index + 1}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-10 px-4 py-10 bg-gray-800">
                            <h1 className="text-white text-3xl font-bold mb-4">
                                Your Kid's Music
                            </h1>
                            <p className="text-white text-lg mb-8">
                                Choose from a variety of musical genres, such as classical, jazz, and rock.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {musicItems && musicItems.map((item, index) => (
                                    <div key={index} className="flex flex-col items-center bg-gray-900 rounded-lg overflow-hidden shadow-lg p-4">
                                        
                                        <div
                                            className="w-full h-40 bg-center bg-no-repeat bg-cover rounded-lg mb-4"
                                            style={{ backgroundImage: `url(${item.image_file})` }}
                                        />

                                        <audio controls src={item.audio_file} className="w-full">
                                            Your browser does not support the audio element.
                                        </audio>

                                        
                                    </div>
                                ))}
                            </div>
                        </div>





                        <div className="@container">
                            <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
                                <div className="flex flex-col gap-2 text-center">
                                    <h1 className="text-white tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                                        Ready to create your own tunes?
                                    </h1>
                                    <p className="text-white text-base font-normal leading-normal max-w-[720px">
                                        You can start by checking out our AI-generated comedy shows and
                                        kids' music.
                                    </p>
                                </div>
                                <div className="flex flex-1 justify-center">
                                    <div className="flex justify-center">
                                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#1919e6] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow">
                                            <span className="truncate">Let's make some music!</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
