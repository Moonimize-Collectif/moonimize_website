import React, { useEffect } from 'react';
import styles from '@/styles/Loader.module.css';

const Loader = () => {
    const [moonPosition, setMoonPosition] = React.useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setMoonPosition(moonPosition => moonPosition + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{width:"100vw", height:"100vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
            <div className={styles.moonOrbitLoader}>
                <div className={styles.planet} />
                <svg width="150" height="150">
                    <circle
                        cx="75"
                        cy="75"
                        r="58"
                        fill="none"
                        stroke="#ffffffaa"
                        strokeWidth="2"
                    />
                </svg>
                <div className={styles.moonContainer}>
                    <div
                        className={styles.moon}
                        style={{ transform: `rotate(${moonPosition}deg)` }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Loader;
