
import { motion } from 'framer-motion';

const DotNavigation = ({ activeSection }) => {
    const sections = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'projects', label: 'Projects' },
        { id: 'skills', label: 'Skills' },
        { id: 'contact', label: 'Contact' },
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-6 items-end">
            {sections.map((section) => (
                <div
                    key={section.id}
                    className="group flex items-center gap-4 cursor-pointer"
                    onClick={() => scrollToSection(section.id)}
                >
                    <span
                        className={`text-sm font-medium tracking-wide uppercase transition-all duration-300 ${activeSection === section.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'
                            }`}
                    >
                        {section.label}
                    </span>
                    <motion.div
                        className={`w-3 h-3 rounded-full border border-white transition-colors duration-300 ${activeSection === section.id ? 'bg-white scale-125' : 'bg-transparent hover:bg-white/50'
                            }`}
                        layoutId="activeDot"
                    />
                </div>
            ))}
        </div>
    );
};

export default DotNavigation;
