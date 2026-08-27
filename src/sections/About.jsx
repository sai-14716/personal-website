import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Github, Mail } from 'lucide-react';

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
        <div className="h-full w-full flex flex-col md:flex-row items-center justify-center p-8 md:p-20 overflow-hidden relative bg-[#050505]">
            
            {/* Ambient Lighting */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

            {/* Text Content */}
            <motion.div
                className="flex-1 flex flex-col justify-center space-y-6 z-10 md:pr-10 max-w-2xl"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
            >
                <div className="inline-block px-4 py-1.5 glass rounded-full text-sm font-medium text-purple-400 w-fit mb-2 border border-purple-500/20 shadow-[0_0_15px_rgba(176,38,255,0.1)]">
                    About Me
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                    Bridging theory and <span className="neon-text-cyan">execution.</span>
                </h2>
                
                <div className="space-y-4 text-base md:text-lg text-gray-300/90 leading-relaxed font-light">
                    <p>
                        I am currently pursuing my <span className="text-white font-medium">Dual Degree (B.Tech + M.Tech) in Computer Science</span> at the <span className="text-white font-medium">Indian Institute of Technology, Kharagpur</span>. My focus spans Machine Learning, Distributed Systems, and Low-Latency engineering.
                    </p>
                    <p>
                        Recently, I worked as a <span className="text-white font-medium">Software Engineering Intern at Samsung Research Institute Delhi</span>, where I engineered an autonomous Model Context Protocol (MCP) server for API testing and architected "SHIFT"—a centralized orchestration service using Windows Job Objects that reduced token consumption by 50% and ensured 100% resource cleanup.
                    </p>
                    <p>
                        I thrive in competitive environments, having secured an <span className="text-white font-medium">AIR 981 in JEE Advanced (top 0.6%)</span> and ranked in the <span className="text-white font-medium">National Top 1% for the Indian Olympiad Qualifier in Physics (IOQP)</span>. When I'm not optimizing algorithms or diving into quantitative models, you can find me playing tennis or exploring cinema.
                    </p>
                </div>

                {/* Social Links */}
                <div className="flex gap-4 pt-6">
                    <SocialIcon href="https://instagram.com/s_s_srinivas" icon={<Instagram size={20} />} label="Instagram" />
                    <SocialIcon href="https://www.linkedin.com/in/srikantam-srinivas-a2b5631aa/" icon={<Linkedin size={20} />} label="LinkedIn" />
                    <SocialIcon href="https://github.com/sai-14716" icon={<Github size={20} />} label="GitHub" />
                    <SocialIcon href="mailto:srikantamsai14716@gmail.com" icon={<Mail size={20} />} label="Email" />
                </div>
            </motion.div>

            {/* Avatar / Video Section */}
            <motion.div
                className="flex-1 flex justify-center items-center relative mt-16 md:mt-0 z-10"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
            >
                <div
                    className="relative w-64 h-64 md:w-96 md:h-96 rounded-3xl overflow-hidden glass p-2 cursor-pointer group shadow-[0_0_40px_rgba(0,240,255,0.1)] transition-all duration-500 hover:shadow-[0_0_60px_rgba(0,240,255,0.2)] hover:-translate-y-2"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="w-full h-full rounded-2xl overflow-hidden relative">
                        {/* Static Image (Poster) */}
                        <img
                            src="/images/about-avatar.jpeg"
                            alt="Avatar"
                            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0 scale-100 group-hover:scale-105"
                        />

                        {/* Video (Plays on Hover) */}
                        <video
                            ref={videoRef}
                            src="/videos/about-avatar.mp4"
                            muted
                            loop
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-500 scale-105 group-hover:scale-100"
                        />
                        
                        {/* Inner Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-50 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none"></div>
                    </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -z-10 w-full h-full max-w-md bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full"></div>
            </motion.div>
        </div>
    );
};

const SocialIcon = ({ href, icon, label }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 glass p-3 hover:text-white transition-all duration-300 rounded-xl hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        aria-label={label}
    >
        {icon}
    </motion.a>
);

export default About;
