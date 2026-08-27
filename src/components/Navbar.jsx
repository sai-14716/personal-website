import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleNavigation = (id) => {
        if (location.pathname !== '/') {
            // If not on home page, navigate to home and then scroll
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full z-50 flex justify-center items-center py-6 mix-blend-difference text-white bg-transparent backdrop-blur-sm"
        >
            <ul className="flex space-x-12 text-lg font-medium tracking-wide">
                <li>
                    <button onClick={() => handleNavigation('about')} className="hover:text-gray-300 transition-colors uppercase">
                        About
                    </button>
                </li>
                <li>
                    <button onClick={() => handleNavigation('projects')} className="hover:text-gray-300 transition-colors uppercase">
                        Projects
                    </button>
                </li>
                <li>
                    <button onClick={() => handleNavigation('contact')} className="hover:text-gray-300 transition-colors uppercase">
                        Contact Me
                    </button>
                </li>
            </ul>
        </motion.nav>
    );
};

export default Navbar;
