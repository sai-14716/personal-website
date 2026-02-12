
import { motion } from 'framer-motion';
import { Github, Globe } from 'lucide-react';

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            className="relative w-full h-full bg-zinc-800 border border-zinc-700 rounded-xl overflow-hidden group cursor-pointer"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            {/* Default Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between z-10 transition-opacity duration-300 group-hover:opacity-0">
                <div>
                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                    <p className="text-xs text-blue-400 uppercase tracking-wider mb-2">{project.company}</p>
                    <p className="text-sm text-gray-400 line-clamp-3">{project.description}</p>
                </div>
                <div className="flex gap-2 mt-4 flex-wrap">
                    {project.tags && project.tags.map(tag => (
                        <span key={tag} className="text-xs bg-zinc-700 px-2 py-1 rounded text-gray-300">{tag}</span>
                    ))}
                </div>
            </div>

            {/* Hover Content / "Contrasical" Background */}
            <div className="absolute inset-0 bg-white text-black p-6 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <h3 className="text-2xl font-bold mb-2 text-center">{project.title}</h3>
                <p className="text-sm text-center mb-6">{project.description}</p>

                <div className="flex gap-4">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                        title="GitHub Repo"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                        title="Live Site"
                    >
                        <Globe size={20} />
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
