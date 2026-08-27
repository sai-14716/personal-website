import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projectsData';

const majorSkills = ["All", "Python", "C", "C++", "Go", "TensorFlow", "Django"];

const AllProjects = () => {
    const [activeSkill, setActiveSkill] = useState("All");
    const navigate = useNavigate();

    const filteredProjects = activeSkill === "All" 
        ? projectsData 
        : projectsData.filter(p => p.tags && p.tags.some(tag => tag.toLowerCase() === activeSkill.toLowerCase()));

    return (
        <div className="min-h-screen w-full flex flex-col justify-start bg-[#050505] pt-32 pb-20 relative">
            {/* Ambient Background Glow */}
            <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none fixed"></div>
            <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none fixed"></div>

            <div className="w-full max-w-7xl mx-auto px-6 z-10 mb-12">
                <button 
                    onClick={() => navigate('/')}
                    className="mb-8 flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors group"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Home
                </button>

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">All Projects</h1>
                        <p className="text-gray-400">A comprehensive list of my work.</p>
                    </div>
                    
                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-2 glass p-2 rounded-2xl">
                        {majorSkills.map(skill => (
                            <button
                                key={skill}
                                onClick={() => setActiveSkill(skill)}
                                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                                    activeSkill === skill 
                                    ? 'bg-white/10 text-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.2)]' 
                                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                                }`}
                            >
                                {skill}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Grid Container */}
            <div className="w-full max-w-7xl mx-auto px-6 z-10">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeSkill}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
                    >
                        {filteredProjects.map((project, i) => (
                            <motion.div 
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.05 }}
                                className="h-full"
                            >
                                <ProjectCard project={project} />
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
                
                {filteredProjects.length === 0 && (
                    <div className="text-center py-20 text-gray-500">
                        No projects found for this category.
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllProjects;
