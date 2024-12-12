import Image from 'next/image';

export default function FinalExam() {
    return (
        <div className="mt-6 max-w-screen-lg w-full h-svh px-8">
            <div className="flex items-center justify-center flex-col gap-8">
                <span className="text-3xl sm:text-4xl font-bold">
                    Final Exam
                </span>
                <span className="text-center opacity-10 hover:opacity-100 transition-all duration-200 ease-in-out hover:text-yellow-500 cursor-alias">
                    Coming Soon: <span>A Chapter Yet to Be Written...</span>
                </span>
            </div>
        </div>
    );
}
