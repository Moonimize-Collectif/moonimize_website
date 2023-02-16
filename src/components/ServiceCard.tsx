import React, { useState, useEffect } from 'react';
import styles from '@/styles/ServiceCard.module.css';
import { MoonimizeButton } from './MoonimizeButton';
import { IconFooter } from './IconFooter';

const AnimatedElement = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 200) {
                setIsVisible(true);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`animated-element ${isVisible ? 'visible' : ''}`}>
            Hello, world!
        </div>
    );
};

export default AnimatedElement;

