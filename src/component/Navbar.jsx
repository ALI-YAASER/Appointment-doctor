import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true); // هذا المتغير يتحكم في حالة تسجيل الدخول
    const [isScrolled, setIsScrolled] = useState(false);

    // تغيير شكل النافبار عند التمرير لأسفل ليعطي تأثير عصري
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // منع التمرير في الصفحة الخلفية عند فتح قائمة الموبايل
    useEffect(() => {
        if (showMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [showMenu]);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
            isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-white py-5'
        }`}>
            <div className='container mx-auto px-4 md:px-10 flex items-center justify-between'>

                {/* --- Logo --- */}
                <img
                    onClick={() => navigate('/')}
                    className='w-36 md:w-44 cursor-pointer hover:opacity-80 transition-opacity'
                    src={assets.logo}
                    alt='Logo'
                />

                {/* --- Desktop Menu --- */}
                <ul className='hidden md:flex items-center gap-8 font-semibold text-gray-700'>
                    {['HOME', 'ALL DOCTORS', 'ABOUT', 'CONTACT'].map((item) => (
                        <NavLink
                            key={item}
                            onClick={() => {
                                setShowMenu(false);        // إغلاق القائمة
                                window.scrollTo(0, 0);     // الانتقال لأول الصفحة
                            }}
                            to={item === 'HOME' ? '/' : `/${item.toLowerCase().split(' ').pop()}`}
                            className={({ isActive }) => `relative group py-1 transition-colors hover:text-primary ${isActive ? 'text-primary' : ''}`}
                        >
                            {item}
                            <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full w-0`}></span>
                        </NavLink>
                    ))}
                </ul>

                {/* --- Right Side: Profile & Mobile Toggle --- */}
                <div className='flex items-center gap-4'>
                    {token ? (
                        <div className='flex items-center gap-2 cursor-pointer group relative bg-gray-50 p-1 pr-3 rounded-full hover:bg-gray-100 transition-all'>
                            <img className='w-8 h-8 rounded-md  object-cover border-2 border-white' src={assets.profile_pic} alt='Profile' />
                            <img className='w-2.5 transition-transform group-hover:rotate-180' src={assets.dropdown_icon} alt='' />

                            {/* Dropdown Menu (Desktop) */}
                            <div className="absolute top-full right-0 mt-2 pt-2 hidden group-hover:block w-48 z-50">
                                <div className="bg-white shadow-xl rounded-xl border border-gray-100 flex flex-col overflow-hidden">
                                    <p onClick={() => navigate('my-profile')} className='px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-50'>My Profile</p>
                                    <p onClick={() => navigate('my-appointments')} className='px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-50'>My Appointments</p>
                                    <p onClick={() => setToken(false)} className='px-4 py-3 hover:bg-red-50 text-red-500 transition-colors font-semibold'>Logout</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <button
                            onClick={() => navigate('/login')}
                            className='bg-primary text-white px-7 py-2.5 rounded-full font-medium hidden md:block hover:shadow-lg transition-all active:scale-95'
                        >
                            Create account
                        </button>
                    )}

                    {/* Mobile Menu Icon */}
                    <button onClick={() => setShowMenu(true)} className='md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors'>
                        <img className='w-6' src={assets.menu_icon} alt='Menu' />
                    </button>
                </div>

                {/* --- Mobile Side Menu --- */}
                <div className={`fixed inset-0 z-[100] bg-white h-screen w-full transition-all duration-500 ease-in-out ${showMenu ? 'translate-x-0' : 'translate-x-full'}`}>

                    {/* Header inside Mobile Menu */}
                    <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                        <img className='w-32' src={assets.logo} alt='Logo'/>
                        <button onClick={() => setShowMenu(false)} className='p-2 hover:bg-gray-100 rounded-full transition-colors'>
                            <img className='w-7' src={assets.cross_icon} alt='Close'/>
                        </button>
                    </div>

                    {/* Links List */}
                    <div className="flex flex-col h-full bg-white overflow-y-auto pb-20">
                        {/* Links List */}
                        <div className="flex flex-col h-full bg-white overflow-y-auto pb-20">
                            <ul className='flex flex-col gap-2 mt-5 px-4'>
                                {['HOME', 'ALL DOCTORS', 'ABOUT', 'CONTACT'].map((item) => (
                                    <NavLink
                                        key={item}
                                        onClick={() => {
                                            setShowMenu(false);        // إغلاق القائمة
                                            window.scrollTo(0, 0);     // الانتقال لأول الصفحة
                                        }}
                                        to={item === 'HOME' ? '/' : `/${item.toLowerCase().split(' ').pop()}`}
                                        className={({ isActive }) => `
                    text-lg font-medium py-4 px-4 rounded-xl transition-all duration-300 flex justify-between items-center
                    ${isActive
                                            ? 'bg-primary/10 text-primary border-l-4 border-primary'
                                            : 'text-gray-700 hover:bg-gray-50 hover:pl-6'}
                `}
                                    >
                                        {({ isActive }) => (
                                            <>
                                                {item}
                                                <span className={`transition-all duration-300 text-xl ${isActive ? 'opacity-100' : 'opacity-30'}`}>
                            ›
                        </span>
                                            </>
                                        )}
                                    </NavLink>
                                ))}
                            </ul>
                        </div>
                        {/* --- Mobile Auth Section --- */}
                        <div className='px-8 mt-10'>
                            {!token ? (
                                <button
                                    onClick={() => { navigate('/login'); setShowMenu(false); }}
                                    className='w-full bg-primary text-white mb-3 py-4 rounded-full font-bold shadow-md active:scale-95 transition-all'
                                >
                                    Login / Create Account
                                </button>
                            ) : (
                                <button
                                    onClick={() => { setToken(false); setShowMenu(false); }}
                                    className='w-full bg-red-50 text-red-500 mb-4 py-4 rounded-full font-bold border border-red-100 active:scale-95 transition-all'
                                >
                                    Logout
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;