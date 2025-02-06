'use client';

import React, { useState, useEffect } from 'react';
import { IoIosArrowRoundUp } from 'react-icons/io';

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="fixed bottom-4 right-4">
            {visible && (
                <button
                    onClick={scrollToTop}
                    className="p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition duration-300"
                >
                    <IoIosArrowRoundUp size={24} />

                </button>
            )}
        </div>
    );
};

export default ScrollToTopButton;
