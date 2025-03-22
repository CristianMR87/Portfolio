import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
    return (
        <button
            onClick={onClick}
            className={`flex items-center justify-center w-10 h-10 bg-gradient-to-br from-gray-950 to-blue-950 border border-cyan-400/30 rounded-full shadow-lg shadow-blue-500/40 hover:shadow-blue-400/60 active:shadow-blue-400/60 transition-all duration-300 cursor-pointer ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
