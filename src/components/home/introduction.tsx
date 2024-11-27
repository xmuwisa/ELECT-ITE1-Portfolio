import Image from 'next/image';
import { BoltIcon } from '@heroicons/react/24/solid';

export default function Introduction() {
    return (
        <div className="px-0 md:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between my-6">
                <div className="flex flex-col w-4/5 space-y-1 text-center md:text-left">
                    <span className="text-5xl sm:text-6xl font-bold">
                        Maria Luisa Eustaquio
                    </span>
                    <div className="text-sm sm:text-base md:text-lg flex flex-col sm:flex-row items-center justify-center md:justify-start font-medium ml-0 sm:ml-1 gap-2 pt-4 md:pt-0 px-8 sm:px-0">
                        <span>Undergraduate</span>
                        <BoltIcon className="h-4 w-4 text-yellow-500" />
                        <span>Polytechnic University of the Philippines</span>
                    </div>
                    <span className="ml-0 sm:ml-1 text-sm sm:text-base md:text-lg opacity-50 px-8 md:px-0">
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
            <div className="rounded-xl text-center md:text-justify p-8 border border-whtGray dark:border-blkGray mx-8 md:mx-0 text-sm sm:text-base md:my-12 my-0 ">
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
