'use client';

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
            name: 'Prelim',
            icon: <DocumentIcon className="h-5 w-5" />,
            href: '/prelim',
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

    return (
        <header className="absolute z-20 w-full flex items-center justify-center p-4">
            <div className="inline-flex items-center justify-center h-16 border rounded-full space-x-2 border-whtGray dark:border-blkGray p-4">
                {Links.map((link) => (
                    <Link key={link.name} href={link.href} target={link.target}>
                        <div
                            className={`flex items-center space-x-2 rounded-full group hover:py-2 hover:px-4 hover:bg-whterGray dark:hover:bg-blkerGray transition-all duration-300 ease-in-out`}
                        >
                            {link.icon}
                            <span className="hidden group-hover:inline-block transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 ml-2">
                                {link.name}
                            </span>
                        </div>
                    </Link>
                ))}
                <span className="rounded-full hover:p-2 hover:bg-whterGray dark:hover:bg-blkerGray transition-all duration-300 ease-in-out">
                    <ThemeToggler />
                </span>
            </div>
        </header>
    );
};

export default Header;
