import {
    APInfo,
    EducationInfo,
    Introduction,
    RelevantExp,
    Skills,
} from '@/components/home';

export default function Home() {
    return (
        <div className="mt-6 max-w-screen-lg w-full h-svh">
            <Introduction />
            <RelevantExp />
            <EducationInfo />
            <Skills />
            <APInfo />
        </div>
    );
}
