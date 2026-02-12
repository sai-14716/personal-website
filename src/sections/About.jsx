
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Facebook, Github } from 'lucide-react';

const About = () => {
    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <div className="h-full w-full flex flex-col md:flex-row items-center justify-center p-8 md:p-20 overflow-hidden relative">
            {/* Background/Layout Grid specific to About? Optional */}

            {/* Text Content - Enters from bottom/sync with image */}
            <motion.div
                className="flex-1 flex flex-col justify-center space-y-6 z-10 md:pr-10"
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }} // Increased from 0.8 for slower entry
                viewport={{ once: false, amount: 0.3 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">About Me</h2>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                    I am a passionate developer and researcher with a focus on Software Development and Machine Learning.
                    My journey involves exploring the depths of algorithms and the complexities of the human brain.
                </p>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                    Also interested in playing tennis and watching movies.
                </p>

                {/* Social Links */}
                <div className="flex gap-6 pt-4">
                    <SocialIcon href="https://instagram.com/s_s_srinivas" icon={<Instagram />} label="Instagram" />
                    <SocialIcon href="https://www.linkedin.com/in/srikantam-srinivas-a2b5631aa/" icon={<Linkedin />} label="LinkedIn" />
                    <SocialIcon href="https://github.com/sai-14716" icon={<Github />} label="GitHub" />
                </div>
            </motion.div>

            {/* Avatar / Video Section - Enters from right/bottom */}
            <motion.div
                className="flex-1 flex justify-center items-center relative  mt-10 md:mt-0"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }} // Increased from 0.8, synced
                viewport={{ once: false, amount: 0.3 }}
            >
                <div
                    className="relative w-64 h-64 md:w-96 md:h-96 rounded-2xl overflow-hidden border-4 border-zinc-800 shadow-2xl cursor-pointer group"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {/* Static Image (Poster) */}
                    <img
                        src="/images/about-avatar.jpeg" // Local path
                        alt="Avatar"
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                    />

                    {/* Video (Plays on Hover) */}
                    <video
                        ref={videoRef}
                        src="/videos/about-avatar.mp4" // Local path
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />

                    {/* Overlay or Frame effects? */}
                </div>
            </motion.div>
        </div>
    );
};

const SocialIcon = ({ href, icon, label }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors p-2 bg-zinc-800 rounded-full"
        whileHover={{ scale: 1.1, backgroundColor: "#3f3f46" }}
        whileTap={{ scale: 0.95 }}
        aria-label={label}
    >
        {icon}
    </motion.a>
);

export default About;
