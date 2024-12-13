import Image from 'next/image';
import { MidtermContainer } from '@/components/midterm';
import { LightBulbIcon } from '@heroicons/react/24/solid';

export default function Midterm() {
    return (
        <div className="mt-6 max-w-screen-lg w-full px-8">
            <div className="flex items-center justify-center flex-col gap-5">
                <span className="text-3xl sm:text-4xl font-bold">Midterm</span>
                <div className="text-center md:text-base text-sm mb-10">
                    TThis midterms page highlights my academic journey through a
                    collection of assignments and activities. It serves as a
                    platform where I showcase my submitted works, along with
                    thoughtful reflections on the insights and lessons I gained
                    from each experience.{' '}
                    <span className="opacity-50 hover:opacity-100 transition-all duration-200 ease-in-out">
                        Click on the video preview to open the corresponding PDF
                        of the work, or click the{' '}
                        <span className="inline-flex items-center">
                            <LightBulbIcon className="h-3 w-3 text-yellow-500" />{' '}
                        </span>{' '}
                        icon when hovering to view the reflection.
                    </span>
                </div>

                <MidtermContainer />
            </div>
        </div>
    );
}
