import { FaGithubAlt, FaFacebookF, FaLinkedinIn } from 'react-icons/fa6';

const socialLinks = [
    {
        href: 'https://www.linkedin.com/in/marialuisa-eustaquio/',
        icon: <FaLinkedinIn />,
        label: 'LinkedIn',
    },
    {
        href: 'https://www.facebook.com/xmuwisa/',
        icon: <FaFacebookF />,
        label: 'Facebook',
    },
    {
        href: 'https://github.com/xmuwisa',
        icon: <FaGithubAlt />,
        label: 'GitHub',
    },
];

export default function Socials() {
    return (
        <div className="w-full p-6 border md:border-none border-whtGray dark:border-blkGray rounded-xl">
            <h1 className="sm:text-2xl text-xl text-center font-semibold mb-6">
                SOCIALS
            </h1>
            <div className="flex flex-row md:flex-col justify-center items-center dark:text-whtGray text-blkGray gap-4">
                {socialLinks.map((social, index) => (
                    <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:p-3 text-base sm:text-lg rounded-full dark:hover:bg-blkerGray hover:bg-whterGray hover:text-yellow-500 duration-200 transition-all ease-in-out"
                    >
                        {social.icon}
                    </a>
                ))}
            </div>
        </div>
    );
}
