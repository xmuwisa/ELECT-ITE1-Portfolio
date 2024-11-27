import Image from 'next/image';

export default function Photo() {
    return (
        <div className="px-8 mt-12 opacity-50">
            <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-3 sm:grid-rows-2 gap-2 md:gap-4 h-[750px] sm:h-96">
                <div className="bg-stone-950 row-span-1 sm:row-span-2 rounded-xl"></div>
                <div className="bg-stone-950 rounded-xl"></div>
                <div className="bg-stone-950 rounded-xl"></div>
            </div>
        </div>
    );
}
