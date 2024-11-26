import type { Config } from 'tailwindcss';
import { COLORS } from './src/configurations/colors';

export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                blk: COLORS.blk,
                wht: COLORS.wht,
                whtGray: COLORS.whtGray,
                whterGray: COLORS.whterGray,
                whtest: COLORS.whtest,
                blkGray: COLORS.blkGray,
                blkerGray: COLORS.blkerGray,
                blkest: COLORS.blkest,
            },
        },
    },
    plugins: [],
} satisfies Config;
