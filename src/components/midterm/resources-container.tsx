'use client';

import { useState } from 'react';
import { Resources } from '@/types/resources';
import { LightBulbIcon, XMarkIcon } from '@heroicons/react/24/solid';

interface ResourceContainerProps {
    data: Resources[];
    title: string;
    desc: string;
}

export default function ResourcesContainer({
    data,
    title,
    desc,
}: ResourceContainerProps) {
    const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
    const [selectedReflection, setSelectedReflection] = useState<string | null>(
        null
    );

    const handleImageClick = (pdf: string) => {
        setSelectedPdf(pdf);
    };

    const handleLightBulbClick = (reflection: string) => {
        setSelectedReflection(reflection);
    };

    const closeModal = () => {
        setSelectedPdf(null);
        setSelectedReflection(null);
    };

    return (
        <div className="w-full md:p-12 p-6 border border-whtGray dark:border-blkGray rounded-xl hover:border-transparent dark:hover:border-transparent transition-all duration-200 ease-in-out">
            <h1 className="sm:text-2xl text-xl font-semibold mb-2 text-center md:text-start">
                {title}
            </h1>
            <p className="md:text-left text-center md:text-base text-sm">
                {desc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-10 gap-6 md:mt-10 mt-12">
                {data.map((resource: Resources) => (
                    <div
                        key={resource.id}
                        className="rounded-lg group relative cursor-pointer transition-all duration-200 ease-in-out scale-100 hover:scale-95"
                        onClick={() => handleImageClick(resource.pdf)}
                    >
                        <div className="group relative">
                            <video
                                src={resource.video}
                                width="100%"
                                height="100%"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-72 object-cover rounded-lg"
                            >
                                Your browser does not support the video tag.
                            </video>
                            <div className="absolute h-full w-full top-0 bg-yellow-500 opacity-40 transition-all duration-200 ease-in-out rounded-lg"></div>
                        </div>
                        <div className="absolute opacity-0 group-hover:opacity-100 bottom-0 linear-gradient flex justify-between gap-2 bg-gradient-to-t dark:from-blk from-wht to-transparent w-full rounded-lg transition-all duration-200 ease-in-out pt-24 p-6 items-end">
                            <div className="flex flex-col">
                                <span className="text-base font-bold">
                                    {resource.title}
                                </span>
                                <span className="text-sm">{resource.date}</span>
                            </div>
                            <span
                                className="w-6 h-6 cursor-pointer"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleLightBulbClick(resource.reflection);
                                }}
                            >
                                <LightBulbIcon className="w-6 h-6 ml-auto text-yellow-500 opacity-80 hover:opacity-100 duration-300 transition-all ease-in-out" />
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {selectedPdf && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    onClick={closeModal}
                >
                    <div
                        className="bg-whterGray dark:bg-blkerGray rounded-lg w-11/12 md:w-3/4 lg:w-1/2 h-4/5 p-6 md:p-8 relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-4 right-4 text-xl font-bold text-yellow-500 hover:opacity-100 opacity-60 transition-all duration-300 ease-in-out"
                            onClick={closeModal}
                        >
                            <XMarkIcon className="w-6 h-6" />
                        </button>
                        <iframe
                            src={selectedPdf}
                            width="100%"
                            height="100%"
                            className="rounded-lg"
                        ></iframe>
                    </div>
                </div>
            )}

            {selectedReflection && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    onClick={closeModal}
                >
                    <div
                        className="bg-whterGray dark:bg-blkerGray rounded-lg w-11/12 md:w-3/4 lg:w-1/2 p-6 md:p-12 relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-4 right-4 text-xl font-bold text-yellow-500 hover:opacity-100 opacity-60 transition-all duration-300 ease-in-out"
                            onClick={closeModal}
                        >
                            <XMarkIcon className="w-6 h-6" />
                        </button>
                        <h2 className="text-xl font-bold mb-4">Reflection</h2>
                        <p className="text-sm md:text-base">
                            {selectedReflection}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
