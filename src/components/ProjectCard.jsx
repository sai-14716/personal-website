import { motion } from 'framer-motion';
import { Github, Globe, ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            className="relative w-full h-full min-h-[220px] glass-card rounded-2xl overflow-hidden group cursor-pointer border border-white/5"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
            {/* Default Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between z-10 transition-all duration-500 group-hover:opacity-0 group-hover:scale-95 group-hover:blur-sm">
                <div>
                    <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-white leading-tight">{project.title}</h3>
                        <ArrowUpRight className="text-gray-500 opacity-50" size={20} />
                    </div>
                    <p className="text-xs text-cyan-400 uppercase tracking-wider mb-3 font-medium bg-cyan-400/10 inline-block px-2 py-1 rounded-md">{project.company}</p>
                    <p className="text-sm text-gray-300/80 line-clamp-3 leading-relaxed">{project.description}</p>
                </div>
                <div className="flex gap-2 mt-4 flex-wrap">
                    {project.tags && project.tags.map(tag => (
                        <span key={tag} className="text-xs border border-white/10 bg-white/5 px-2.5 py-1 rounded-full text-gray-300 whitespace-nowrap">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Hover Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 bg-black/40 backdrop-blur-md">
                <h3 className="text-2xl font-bold mb-3 text-center text-white">{project.title}</h3>
                <p className="text-sm text-center mb-8 text-gray-300 leading-relaxed px-4">{project.description}</p>

                <div className="flex gap-4">
                    <motion.a
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                        whileTap={{ scale: 0.9 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 glass rounded-full text-white hover:text-cyan-400 transition-colors border border-white/10 hover:border-cyan-400/50"
                        title="GitHub Repo"
                    >
                        <Github size={22} />
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                        whileTap={{ scale: 0.9 }}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 glass rounded-full text-white hover:text-purple-400 transition-colors border border-white/10 hover:border-purple-400/50"
                        title="Live Site"
                    >
                        <Globe size={22} />
                    </motion.a>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
