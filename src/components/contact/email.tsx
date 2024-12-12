'use client';

import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
    name: string;
    email: string;
    message: string;
}

export default function Email() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
    });

    const [status, setStatus] = useState<string>('');

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const response = await fetch('https://formspree.io/f/meoqwdqk', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            setFormData({ name: '', email: '', message: '' });
            setStatus('Your email has been sent successfully!');
        } else {
            setStatus('Oops! Something went wrong. Please try again later.');
        }
        setTimeout(() => {
            setStatus('');
        }, 3000);
    };

    return (
        <div className="w-full p-6 border md:border-none border-whtGray dark:border-blkGray rounded-xl">
            <h1 className="sm:text-2xl text-xl font-semibold mb-6 text-center md:text-start">
                SEND ME A MESSAGE
            </h1>

            <form
                onSubmit={handleSubmit}
                className="text-sm sm:text-base flex flex-col gap-4"
            >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                    <label htmlFor="name" className="w-32">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="p-4 border border-whtGray bg-transparent dark:border-blkGray rounded-xl w-full active:border-whtGray hover:border-yellow-500 dark:hover:border-yellow-500 duration-200 transition-all ease-in-out opacity-75 hover:opacity-100 focus:opacity-100"
                    />
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-2 text-sm sm:text-base">
                    <label htmlFor="email" className="w-32">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="p-4 border border-whtGray bg-transparent dark:border-blkGray rounded-xl w-full active:border-whtGray hover:border-yellow-500 dark:hover:border-yellow-500 duration-200 transition-all ease-in-out opacity-75 hover:opacity-100 focus:opacity-100"
                    />
                </div>

                <div className="flex flex-col md:flex-row items-start gap-2 text-sm sm:text-base">
                    <label htmlFor="message" className="w-32 pt-0 md:pt-4">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="p-4 border border-whtGray bg-transparent dark:border-blkGray rounded-xl w-full h-56 resize-none overflow-y-auto active:border-whtGray hover:border-yellow-500 dark:hover:border-yellow-500 duration-200 transition-all ease-in-out opacity-75 hover:opacity-100 focus:opacity-100"
                    />
                </div>

                <button
                    type="submit"
                    className="mt-4 p-2 bg-whtGray dark:bg-blkGray hover:bg-yellow-500 dark:hover:bg-yellow-500 rounded-xl opacity-75 hover:opacity-100 transition-all duration-200 ease-in-out"
                >
                    Send Message
                </button>
            </form>
            {status && (
                <p
                    className={`mt-4 text-xs sm:text-sm text-center ${status === 'Your email has been sent successfully!' ? 'text-yellow-500' : 'text-red-500'}`}
                >
                    {status}
                </p>
            )}
        </div>
    );
}
