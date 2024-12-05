import Image from 'next/image';
import { BoltIcon } from '@heroicons/react/24/solid';

export default function Introduction() {
    return (
        <div className="px-0 md:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between my-6">
                <div className="mr-0 md:mr-6 mb-8 md:mb-0">
                    <Image
                        src="/images/Luisa.png"
                        alt="Maria Luisa Eustaquio"
                        width={500}
                        height={500}
                        quality={100}
                        className="rounded-full h-52 w-52 md:h-40 md:w-40 object-cover"
                    />
                </div>
                <div className="flex flex-col w-4/5 text-center md:text-left">
                    <span className="text-5xl sm:text-6xl md:text-[2.75rem] lg:text-6xl font-bold">
                        Maria Luisa Eustaquio
                    </span>
                    <div className="text-sm sm:text-base flex flex-col sm:flex-row items-center justify-center md:justify-start font-medium mt-2 ml-0 sm:ml-1 gap-1 pt-4 md:pt-0 px-8 sm:px-0">
                        <span>Polytechnic University of the Philippines</span>
                    </div>
                    <span className="ml-0 sm:ml-1 text-sm sm:text-base opacity-80 px-8 md:px-0">
                        Bachelor of Science in Information Technology
                    </span>
                </div>
            </div>
            <div className="rounded-xl text-center md:text-justify p-8 border border-whtGray dark:border-blkGray hover:border-yellow-500 dark:hover:border-yellow-500 mx-8 md:mx-0 text-sm sm:text-base md:my-12 my-0 ease-in-out duration-200">
                Hi, I'm <b className="text-yellow-500">Luisa</b>. I'm passionate
                about technology and love exploring new skills, especially in
                programming, system design, and data management. <br />
                <br />I enjoy collaborating with others, solving challenges, and
                coming up with creative solutions. I'm always eager to grow and
                take on opportunities that help me develop both personally and
                professionally.
            </div>
        </div>
    );
}
