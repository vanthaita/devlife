import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaTelegram, FaYoutube, FaDiscord, FaSignInAlt } from 'react-icons/fa';

const Navbar = () => {
    const socialItems = [
        { icon: <FaFacebook />, link: 'https://facebook.com' },
        { icon: <FaInstagram />, link: 'https://instagram.com' },
        { icon: <FaTwitter />, link: 'https://twitter.com' },
        { icon: <FaTelegram />, link: 'https://telegram.org' },
        { icon: <FaYoutube />, link: 'https://youtube.com' },
        { icon: <FaDiscord />, link: 'https://discord.com' },
        { icon: <FaSignInAlt />, link: '/signin' },
    ];
    
    return (
        <nav className='w-[calc(100%+16px)] h-20 border-b-2 border-black flex justify-end items-center px-20 z-10 bg-white relative -left-4'>
        <div className='gap-6 flex'>
            {socialItems.map((item, index) => (
            <a
                key={index}
                href={item.link}
                className='font-medium text-2xl hover:text-blue-500 transition-colors duration-200'
            >
                {item.icon}
            </a>
            ))}
        </div>
        </nav>
    );
};

export default Navbar;