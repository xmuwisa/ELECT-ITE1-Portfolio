import Image from 'next/image';

export default function Photo() {
    return (
        <div className="px-8 mt-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-3 sm:grid-rows-2 gap-2 md:gap-4 h-[750px] sm:h-96">
                <div className="row-span-1 sm:row-span-2 rounded-xl">
                    <Image
                        quality={100}
                        src="/images/1.png"
                        alt="Flower"
                        width={500}
                        height={500}
                        className="w-full h-full rounded-xl object-cover object-center"
                    />
                </div>
                <div className="rounded-xl">
                    <Image
                        quality={100}
                        src="/images/3.png"
                        alt="Flower"
                        width={500}
                        height={500}
                        className="w-full h-full rounded-xl object-cover object-center"
                    />
                </div>
                <div className="rounded-xl">
                    <Image
                        quality={100}
                        src="/images/2.png"
                        alt="Flower"
                        width={500}
                        height={500}
                        className="w-full h-full rounded-xl object-cover object-center"
                    />
                </div>
            </div>
        </div>
    );
}
