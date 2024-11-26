import Image from 'next/image';
import { BoltIcon } from '@heroicons/react/24/solid';

export default function Introduction() {
    return (
        <div className="px-0 md:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between my-6">
                <div className="flex flex-col w-4/5 space-y-1 text-center md:text-left">
                    <span className="text-6xl sm:text-7xl font-bold">
                        Hello, I'm Luisa!
                    </span>
                    <div className="text-sm sm:text-base md:text-lg flex flex-col sm:flex-row items-center justify-center md:justify-start font-medium ml-1 gap-2 pt-4 md:pt-0 px-8 sm:px-0">
                        <span>Undergraduate</span>
                        <BoltIcon className="h-4 w-4 text-yellow-500" />
                        <span>Polytechnic University of the Philippines</span>
                    </div>
                    <span className="ml-1 text-sm sm:text-base md:text-lg opacity-50 px-8 md:px-0">
                        Bachelor of Science in Information Technology
                    </span>
                </div>
                <Image
                    src="/images/Luisa.png"
                    alt="Maria Luisa Eustaquio"
                    width={500}
                    height={500}
                    quality={100}
                    className="rounded-full h-52 w-52 md:h-40 md:w-40 object-cover my-12 md:my-0"
                />
            </div>
            <div className="text-center md:text-left px-8 md:px-0 text-sm sm:text-base md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        </div>
    );
}
