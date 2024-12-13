import Link from 'next/link';
import { LightBulbIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

export default function Overview() {
    return (
        <div className="px-8 mt-24 flex flex-col">
            <span className="text-xl sm:text-3xl font-bold flex items-center gap-2">
                <LightBulbIcon className="h-4 sm:h-6 w-auto text-yellow-500" />
                This E-Porfolio Contains...
            </span>
            <span className="ml-1 py-2 text-sm sm:text-base text-justify">
                A comprehensive showcase of my academic journey, including
                quizzes, activities, exams, reflections, and multimedia evidence
                of my learning progress.
            </span>
            <div className="flex flex-col md:flex-row w-full mt-6 gap-4 transition-all ease-in-out duration-200 text-sm sm:text-base">
                <div className="group w-full md:w-2/4 rounded-xl border md:border-0 border-whtGray dark:border-blkGray opacity-80 hover:opacity-100 p-8 flex flex-col transition-all ease-in-out duration-200">
                    <span className="text-lg sm:text-xl font-bold">
                        MIDTERM
                    </span>
                    <span className="mt-2">
                        This page covers all the work completed during the
                        midterm period, including:
                    </span>
                    <ul className="list-disc mt-2 ml-4">
                        <li>Assignments</li>
                        <li>Individual Activities</li>
                        <li>Group Activities</li>
                        <li>Reflections</li>
                    </ul>
                    <span className="flex justify-end opacity-0 group-hover:opacity-100 ease-in-out duration-300">
                        <Link href="/midterm">
                            <ArrowRightIcon className="h-6 w-6 hover:text-yellow-500 ease-in-out duration-200 cursor-pointer" />
                        </Link>
                    </span>
                </div>
                <div className="h-auto hidden md:block self-stretch border-r border-whtGray dark:border-blkGray"></div>
                <div className="group w-full md:w-2/4 rounded-xl border md:border-0 border-whtGray dark:border-blkGray opacity-80 hover:opacity-100 p-8 flex flex-col transition-all ease-in-out duration-200">
                    <span className="text-lg sm:text-xl font-bold">
                        FINAL EXAM
                    </span>
                    <span className="mt-2">
                        This page highlights the final period's results,
                        including:
                    </span>
                    <ul className="list-disc mt-2 ml-4">
                        <li>Final Quizzes</li>
                        <li>Activities</li>
                        <li>Final Exam</li>
                        <li>Final Reflections</li>
                    </ul>
                    <span className="flex justify-end opacity-0 group-hover:opacity-100 ease-in-out duration-300">
                        <Link href="/final-exam">
                            <ArrowRightIcon className="h-6 w-6 hover:text-yellow-500 ease-in-out duration-200 cursor-pointer" />
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    );
}
