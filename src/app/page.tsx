import { Introduction, Photo, Overview } from '@/components/home';

export default function Home() {
    return (
        <div className="mb-24 max-w-screen-lg w-full">
            <Introduction />
            <Photo />
            <Overview />
        </div>
    );
}
