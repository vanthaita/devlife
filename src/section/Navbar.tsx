'use client';
import { useIsMobile } from '@/hooks/use-mobile';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaTelegram, FaYoutube, FaDiscord, FaSignInAlt } from 'react-icons/fa';
const Navbar = () => {
    const isMobile = useIsMobile();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const socialItems = [
        { icon: <FaFacebook />, link: 'https://facebook.com' },
        { icon: <FaInstagram />, link: 'https://instagram.com' },
        { icon: <FaTwitter />, link: 'https://twitter.com' },
        { icon: <FaTelegram />, link: 'https://telegram.org' },
        { icon: <FaYoutube />, link: 'https://youtube.com' },
        { icon: <FaDiscord />, link: 'https://discord.com' },
    ];
    const navItems = [
        { label: 'Security', link: '/security' },
        { label: 'Software', link: '/software' },
        { label: 'Hardware', link: '/hardware' },
        { label: 'AI & Machine Learning', link: '/ai-ml' },
        { label: 'Blockchain', link: '/blockchain' },
        { label: 'Cloud Computing', link: '/cloud-computing' },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={cn('w-[calc(100%+16px)] h-20 border-b-2 border-black flex justify-end items-center z-50 bg-white relative -left-4', `${isMobile ? 'px-8' : 'px-20'}`)}>
            {isMobile ? (
                <>
                    <button onClick={toggleMenu} className='text-2xl z-50'>
                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                    {isMenuOpen && (
                        <div className='absolute top-20 right-0 bg-white border-b-2 border-black w-[calc(100%-16px)] z-50'>
                            {navItems.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.link}
                                    className='block p-4 font-medium text-lg hover:text-blue-500 transition-colors duration-200'
                                    onClick={toggleMenu} 
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <div className='flex justify-center items-center border-t-2 border-gray-500'>
                                {socialItems.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.link}
                                        className='block p-4 font-medium text-lg hover:text-blue-500 transition-colors duration-200'
                                        onClick={toggleMenu} 
                                    >
                                        {item.icon}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </>
            ) : (
                <div className='gap-6 flex'>
                    {navItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.link}
                            className='font-medium text-lg hover:text-blue-500 transition-colors duration-200'
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;