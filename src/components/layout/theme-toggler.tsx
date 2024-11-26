'use client';

import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeToggler = () => {
    const { theme, setTheme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <button
            aria-label={`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} mode`}
            onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
            className="flex items-center justify-center rounded-full transition"
        >
            {currentTheme === 'dark' ? (
                <SunIcon className="h-6 w-6 text-yellow-500" />
            ) : (
                <MoonIcon className="h-5 w-5 text-yellow-500" />
            )}
        </button>
    );
};

export default ThemeToggler;
