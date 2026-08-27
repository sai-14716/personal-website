import { motion } from 'framer-motion';
import { Code, Database, Layout, Server, Cpu, Brain, Award, GraduationCap, Briefcase } from 'lucide-react';

const Skills = () => {
    const techStack = [
        { name: "C++", icon: <Cpu />, category: "Language" },
        { name: "Python", icon: <Code />, category: "Language" },
        { name: "Go", icon: <Server />, category: "Language" },
        { name: "React", icon: <Layout />, category: "Library" },
        { name: "SQL", icon: <Database />, category: "Database" },
        { name: "TensorFlow", icon: <Brain />, category: "ML" },
        { name: "Django", icon: <Server />, category: "Backend" },
        { name: "Pandas", icon: <Database />, category: "Data" },
    ];

    const competitions = [
        { title: "IOQP 2022", rank: "Top 1% National" },
        { title: "JEE Advanced 2022", rank: "AIR 981" },
        { title: "JEE Mains 2022", rank: "AIR 647" },
        { title: "Flipkart Grid 7.0", rank: "Semi-finalist" }
    ];

    return (
        <div className="h-full w-full bg-[#050505] flex flex-col justify-center relative overflow-hidden p-6 md:p-20">
            {/* Ambient Backgrounds */}
            <div className="absolute top-[10%] right-[20%] w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none"></div>
            <div className="absolute bottom-[10%] left-[20%] w-96 h-96 bg-purple-500/10 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="w-full max-w-7xl mx-auto z-10 mb-8">
                <div className="inline-block px-4 py-1.5 glass rounded-full text-sm font-medium text-cyan-400 w-fit mb-2 border border-cyan-500/20 shadow-[0_0_15px_rgba(0,240,255,0.1)]">
                    Capabilities
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">Skills & Background</h2>
            </div>

            {/* Bento Box Layout */}
            <div className="w-full max-w-7xl mx-auto z-10 grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[65vh]">
                
                {/* Tech Stack (Spans 7 cols) */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="md:col-span-7 glass-card p-8 rounded-3xl border border-white/5 flex flex-col"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <Code className="text-cyan-400" size={24} />
                        <h3 className="text-2xl font-bold text-white">Tech Stack</h3>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 flex-1">
                        {techStack.map((skill, index) => (
                            <div key={index} className="glass p-4 rounded-2xl flex flex-col items-center justify-center gap-2 hover:bg-white/5 transition-colors border border-white/5 group">
                                <div className="text-gray-400 group-hover:text-cyan-400 transition-colors">{skill.icon}</div>
                                <div className="text-center">
                                    <h4 className="text-sm font-bold text-white group-hover:neon-text-cyan transition-all">{skill.name}</h4>
                                    <span className="text-[10px] text-gray-500 uppercase tracking-wider">{skill.category}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Experience (Spans 5 cols) */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="md:col-span-5 glass-card p-8 rounded-3xl border border-white/5 flex flex-col"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <Briefcase className="text-purple-400" size={24} />
                        <h3 className="text-2xl font-bold text-white">Experience</h3>
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                        <div className="border-l-2 border-purple-500/30 pl-6 relative">
                            <div className="absolute w-3 h-3 bg-purple-400 rounded-full -left-[7px] top-1.5 shadow-[0_0_10px_rgba(176,38,255,0.6)]"></div>
                            <h4 className="text-xl font-bold text-white">Software Engineering Intern</h4>
                            <p className="text-purple-300 font-medium mt-1">Samsung Research Institute Delhi</p>
                            <p className="text-xs text-gray-500 mb-4 mt-1">May 2026 - Jul 2026</p>
                            <ul className="text-sm text-gray-300/90 space-y-2 list-disc pl-4 marker:text-purple-500/50">
                                <li>Engineered autonomous MCP server for API testing.</li>
                                <li>Architected SHIFT orchestration using Job Objects.</li>
                                <li>Reduced token consumption by 50% via LLMLingua.</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

                {/* Education (Spans 6 cols) */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="md:col-span-6 glass-card p-8 rounded-3xl border border-white/5 flex flex-col"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <GraduationCap className="text-cyan-400" size={24} />
                        <h3 className="text-2xl font-bold text-white">Education</h3>
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                        <div className="border-l-2 border-cyan-500/30 pl-6 relative">
                            <div className="absolute w-3 h-3 bg-cyan-400 rounded-full -left-[7px] top-1.5 shadow-[0_0_10px_rgba(0,240,255,0.6)]"></div>
                            <h4 className="text-xl font-bold text-white">Dual Degree (B.Tech + M.Tech)</h4>
                            <p className="text-cyan-300 font-medium mt-1">Computer Science @ IIT Kharagpur</p>
                            <p className="text-xs text-gray-500 mb-3 mt-1">2022 - 2027</p>
                            <p className="text-sm text-gray-300/90 leading-relaxed">
                                Coursework: Algorithms, Stochastic Modeling, ML, Distributed Systems, Cryptography.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Achievements (Spans 6 cols) */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="md:col-span-6 glass-card p-8 rounded-3xl border border-white/5 flex flex-col"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <Award className="text-yellow-400" size={24} />
                        <h3 className="text-2xl font-bold text-white">Achievements</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4 flex-1 items-center">
                        {competitions.map((comp, index) => (
                            <div key={index} className="glass p-4 rounded-2xl border border-white/5 flex flex-col justify-center h-full hover:bg-white/5 transition-colors">
                                <h4 className="text-sm font-bold text-white mb-1">{comp.title}</h4>
                                <span className="text-xs font-medium text-yellow-400">{comp.rank}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Skills;
