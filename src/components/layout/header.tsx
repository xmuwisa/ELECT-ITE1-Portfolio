'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
    HomeIcon,
    DocumentIcon,
    ClipboardIcon,
    BookOpenIcon,
    EnvelopeIcon,
} from '@heroicons/react/24/outline';
import ThemeToggler from '@/components/layout/theme-toggler';

const Header = () => {
    const pathname = usePathname();
    const Links = [
        {
            name: 'Home',
            icon: <HomeIcon className="h-5 w-5" />,
            href: '/',
            target: '_self',
        },
        {
            name: 'Midterm',
            icon: <ClipboardIcon className="h-5 w-5" />,
            href: '/midterm',
            target: '_self',
        },
        {
            name: 'Final Exam',
            icon: <BookOpenIcon className="h-5 w-5" />,
            href: '/final-exam',
            target: '_self',
        },
        {
            name: 'Contact',
            icon: <EnvelopeIcon className="h-5 w-5" />,
            href: '/contact',
            target: '_self',
        },
    ];

    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`sticky top-0 z-20 w-full flex items-center justify-center p-4 transition-all duration-200 ease-in-out ${
                isScrolled
                    ? 'bg-gradient-to-b from-whtest dark:from-blkest via-transparent to-transparent'
                    : ''
            }`}
        >
            <div
                className={`inline-flex items-center border border-transparent justify-center rounded-full h-16 p-4 space-x-2 transition-all duration-200 ease-in-out ${
                    isScrolled
                        ? ' border-whtGray dark:border-blkGray bg-wht dark:bg-blk'
                        : ''
                }`}
            >
                <Link key="home" href={Links[0].href} target={Links[0].target}>
                    <div className="flex items-center space-x-2 rounded-full group hover:py-2 hover:px-4 hover:bg-whterGray dark:hover:bg-blkerGray transition-all duration-200 ease-in-out">
                        {Links[0].icon}
                        <span className="hidden group-hover:inline-block transition-all duration-200 ml-2">
                            {Links[0].name}
                        </span>
                    </div>
                </Link>

                <div className="h-full border-r border-whtGray dark:border-blkGray"></div>

                {Links.slice(1).map((link) => (
                    <Link key={link.name} href={link.href} target={link.target}>
                        <div className="flex items-center space-x-2 rounded-full group hover:py-2 hover:px-4 hover:bg-whterGray dark:hover:bg-blkerGray transition-all duration-200 ease-in-out">
                            {link.icon}
                            <span className="hidden group-hover:inline-block transition-all duration-200 ml-2">
                                {link.name}
                            </span>
                        </div>
                    </Link>
                ))}

                <div className="h-full border-r border-whtGray dark:border-blkGray"></div>

                <span className="rounded-full hover:p-2 hover:bg-whterGray dark:hover:bg-blkerGray transition-all duration-200 ease-in-out">
                    <ThemeToggler />
                </span>
            </div>
        </header>
    );
};

export default Header;
