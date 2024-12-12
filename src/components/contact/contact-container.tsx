import { Email, Socials } from '@/components/contact';

export default function Introduction() {
    return (
        <div className="w-full flex flex-col md:flex-row gap-6 md:gap-0">
            <div className="w-full">
                <Email />
            </div>
            <div className="h-auto hidden md:block self-stretch border-r border-whtGray dark:border-blkGray my-6"></div>
            <div className="w-full md:w-auto">
                <Socials />
            </div>
        </div>
    );
}
