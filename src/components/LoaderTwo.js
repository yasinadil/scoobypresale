import React, { useState, useEffect } from "react";
import "../scss/loadertwo.scss";

const LoaderTwo = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading && (
                <div className="loader-container">
                    <div className="moon"></div>
                    <div className="loader-bar"></div>
                </div>
            )}
            {!loading && (
                <div className="loader-container loader-container-exit">
                    <div className="moon"></div>
                    <div className="loader-bar loader-bar-exit"></div>
                </div>
            )}
        </>
    );
};

export default LoaderTwo;
