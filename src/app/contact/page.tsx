import Image from 'next/image';
import { ContactContainer } from '@/components/contact';

export default function Midterm() {
    return (
        <div className="mt-6 max-w-screen-lg w-full h-svh px-8">
            <div className="flex items-center justify-center flex-col gap-10">
                <span className="text-3xl sm:text-4xl font-bold">Contact</span>
                <ContactContainer />
            </div>
        </div>
    );
}
