
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Section = ({ id, onActive, children, className = "" }) => {
    const { ref, inView } = useInView({
        threshold: 0.5, // Trigger when 50% of the section is visible
    });

    useEffect(() => {
        if (inView) {
            onActive(id);
        }
    }, [inView, id, onActive]);

    return (
        <section
            id={id}
            ref={ref}
            className={`h-screen w-full snap-start relative overflow-hidden ${className}`}
        >
            {children}
        </section>
    );
};

export default Section;
