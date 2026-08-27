import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projectsData';

const Projects = () => {
    const navigate = useNavigate();
    
    // Display top 3 projects on the home page
    const topProjects = projectsData.slice(0, 3);

    return (
        <div className="h-full w-full flex flex-col justify-center items-center bg-[#050505] overflow-hidden relative p-8 md:p-20">
            {/* Ambient Background Glow */}
            <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="w-full max-w-7xl z-10 mb-12 text-center">
                <div className="inline-block px-4 py-1.5 glass rounded-full text-sm font-medium text-cyan-400 w-fit mb-4 border border-cyan-500/20 shadow-[0_0_15px_rgba(0,240,255,0.1)]">
                    Work & Experiments
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">A selection of my recent work in Systems, ML, and Quantitative Finance.</p>
            </div>

            {/* Grid Container without scroll */}
            <div className="w-full max-w-7xl z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    {topProjects.map((project, i) => (
                        <motion.div 
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="h-full"
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </div>
                
                <motion.div 
                    className="mt-12 flex justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <button 
                        onClick={() => navigate('/projects')}
                        className="px-8 py-4 glass rounded-xl text-white font-bold hover:text-cyan-400 hover:border-cyan-400/50 transition-all shadow-[0_0_15px_rgba(0,240,255,0.1)] hover:shadow-[0_0_25px_rgba(0,240,255,0.3)] group flex items-center gap-2"
                    >
                        View All Projects
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default Projects;
