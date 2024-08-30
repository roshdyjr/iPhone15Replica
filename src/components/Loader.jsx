import { Html } from '@react-three/drei';
import React from 'react';

const Loader = () => {
    return (
        <Html>
            <div className="absolute inset-0 flex justify-center items-center bg-gray-900 bg-opacity-75 z-50">
                <div className="flex flex-col items-center">
                    <div className="w-24 h-24 border-8 border-t-8 border-blue-400 border-opacity-70 rounded-full animate-spin"></div>
                    <span className="mt-6 text-white text-xl font-semibold animate-pulse">Loading...</span>
                </div>
            </div>
        </Html>
    );
};

export default Loader;
