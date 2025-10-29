import React from 'react';
import useInView from '../hooks/useInView';

// স্ক্রল অ্যানিমেশনের জন্য র‍্যাপার কম্পোনেন্ট
const Animated = ({ children, className }) => {
    const [ref, isInView] = useInView({ threshold: 0.1 });
    return (
        <div 
            ref={ref} 
            className={`${className} transition-all duration-1000 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            {children}
        </div>
    );
};

export default Animated;

