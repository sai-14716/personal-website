import { motion } from 'framer-motion';
import { Code, Database, Layout, Server, Cpu, Brain, Award, GraduationCap, Briefcase } from 'lucide-react';

import { projectsData } from './Projects';

const Skills = () => {
    const initialSkills = [
        { name: "C++", icon: <Cpu />, category: "Language" },
        { name: "Python", icon: <Code />, category: "Language" },
        { name: "Go", icon: <Server />, category: "Language" },
        { name: "React", icon: <Layout />, category: "Library" },
        { name: "SQL", icon: <Database />, category: "Database" },
        { name: "TensorFlow", icon: <Brain />, category: "ML" },
        { name: "C", icon: <Cpu />, category: "Language" },
        { name: "Django", icon: <Server />, category: "Backend" },
    ];

    // Extract unique tags from projects
    const projectTags = [...new Set(projectsData.flatMap(p => p.tags))];

    // Filter tags that are not already in initialSkills
    const newTags = projectTags.filter(tag =>
        !initialSkills.some(skill => skill.name.toLowerCase() === tag.toLowerCase())
    ).slice(0, 8); // Limit to keep it clean

    // Map new tags to skill objects
    const dynamicSkills = newTags.map(tag => ({
        name: tag,
        icon: <Code />,
        category: "Framework/Tool"
    }));

    // Merge lists
    const skills = [...initialSkills, ...dynamicSkills];

    const education = [
        {
            title: "Dual Degree (B.Tech + M.Tech)",
            subtitle: "Computer Science",
            institution: "IIT Kharagpur",
            year: "2022 - 2027",
            details: "Relevant Coursework: Algorithms, Stochastic Modeling, Financial Engineering, Distributed Systems, ML."
        }
    ];

    const experience = [
        {
            title: "Software Engineering Intern",
            institution: "Samsung Research Institute Delhi",
            year: "May 2026 - Jul 2026",
            details: "Engineered autonomous MCP server; Architected SHIFT orchestration service using Windows Job Objects; Reduced token consumption by 50%."
        }
    ];

    const competitions = [
        {
            title: "IOQP 2022",
            rank: "Top 1% National",
            desc: "Indian Olympiad Qualifier in Physics."
        },
        {
            title: "JEE Advanced 2022",
            rank: "AIR 981",
            desc: "Among 150,000+ candidates."
        },
        {
            title: "JEE Mains 2022",
            rank: "AIR 647",
            desc: "Among 900,000+ participants."
        },
        {
            title: "Flipkart Grid 7.0",
            rank: "Semi-finalist",
            desc: "National level software engineering hackathon."
        }
    ];

    return (
        <div className="h-full w-full bg-[#050505] flex flex-col justify-start relative overflow-hidden pt-32">
            {/* Ambient Backgrounds */}
            <div className="absolute top-[30%] right-[10%] w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="w-full pl-8 md:pl-20 z-10 mb-8 pr-8">
                <div className="inline-block px-4 py-1.5 glass rounded-full text-sm font-medium text-cyan-400 w-fit mb-2 border border-cyan-500/20 shadow-[0_0_15px_rgba(0,240,255,0.1)]">
                    Capabilities
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">Skills & Background</h2>
            </div>

            {/* Horizontal Scroll Container */}
            <div className="w-full flex-1 flex overflow-x-auto snap-x snap-mandatory scrollbar-hide overscroll-x-contain pb-10">

                {/* Page 1: Skills */}
                <div className="min-w-full h-full snap-center flex justify-center items-center p-4 md:p-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl w-full">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                className="glass-card p-6 md:p-8 rounded-2xl flex flex-col items-center justify-center gap-4 cursor-default aspect-square group border border-white/5"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.03, duration: 0.4 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="text-3xl md:text-4xl text-gray-400 group-hover:text-cyan-400 transition-colors duration-300 drop-shadow-[0_0_10px_rgba(0,240,255,0)] group-hover:drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]">{skill.icon}</div>
                                <div className="text-center">
                                    <h3 className="text-lg md:text-xl font-bold text-white mb-1 group-hover:neon-text-cyan transition-all">{skill.name}</h3>
                                    <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest">{skill.category}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Page 2: Experience, Education & Competitions */}
                <div className="min-w-full h-full snap-center flex justify-center items-start p-4 md:p-10">
                    <div className="flex flex-col lg:flex-row gap-6 md:gap-10 max-w-7xl w-full h-[65vh]">

                        {/* Experience & Education Column */}
                        <div className="flex-1 glass-card p-6 md:p-8 rounded-3xl border border-white/5 overflow-y-auto scrollbar-hide flex flex-col gap-8">
                            
                            {/* Experience Section */}
                            <div>
                                <div className="flex items-center gap-4 mb-6 sticky top-0 bg-[#050505]/80 backdrop-blur-md py-2 z-10 rounded-b-xl">
                                    <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20 text-purple-400">
                                        <Briefcase size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Experience</h3>
                                </div>
                                <div className="space-y-6">
                                    {experience.map((exp, index) => (
                                        <div key={index} className="border-l-2 border-purple-500/30 pl-6 relative">
                                            <div className="absolute w-3 h-3 bg-purple-400 rounded-full -left-[7px] top-1.5 shadow-[0_0_10px_rgba(176,38,255,0.6)]"></div>
                                            <h4 className="text-lg md:text-xl font-bold text-white">{exp.title}</h4>
                                            <p className="text-purple-300 font-medium">{exp.institution}</p>
                                            <p className="text-xs text-gray-500 mb-2">{exp.year}</p>
                                            <p className="text-sm text-gray-300/90 leading-relaxed">{exp.details}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Education Section */}
                            <div>
                                <div className="flex items-center gap-4 mb-6 sticky top-0 bg-[#050505]/80 backdrop-blur-md py-2 z-10 rounded-b-xl">
                                    <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20 text-cyan-400">
                                        <GraduationCap size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Education</h3>
                                </div>
                                <div className="space-y-6">
                                    {education.map((edu, index) => (
                                        <div key={index} className="border-l-2 border-cyan-500/30 pl-6 relative">
                                            <div className="absolute w-3 h-3 bg-cyan-400 rounded-full -left-[7px] top-1.5 shadow-[0_0_10px_rgba(0,240,255,0.6)]"></div>
                                            <h4 className="text-lg md:text-xl font-bold text-white">{edu.title}</h4>
                                            <p className="text-cyan-300 font-medium">{edu.institution}</p>
                                            <p className="text-xs text-gray-500 mb-2">{edu.year}</p>
                                            <p className="text-sm text-gray-300/90 leading-relaxed">{edu.details}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Competitions Column */}
                        <div className="flex-1 glass-card p-6 md:p-8 rounded-3xl border border-white/5 overflow-y-auto scrollbar-hide">
                            <div className="flex items-center gap-4 mb-6 sticky top-0 bg-[#050505]/80 backdrop-blur-md py-2 z-10 rounded-b-xl">
                                <div className="p-3 bg-yellow-500/10 rounded-xl border border-yellow-500/20 text-yellow-400">
                                    <Award size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Achievements</h3>
                            </div>
                            <div className="space-y-4">
                                {competitions.map((comp, index) => (
                                    <motion.div 
                                        key={index} 
                                        className="glass p-5 rounded-2xl hover:bg-white/5 transition-colors border border-white/5 group"
                                        whileHover={{ x: 5 }}
                                    >
                                        <div className="flex justify-between items-start mb-2 gap-4">
                                            <h4 className="text-base md:text-lg font-bold text-white group-hover:text-yellow-100 transition-colors">{comp.title}</h4>
                                            <span className="bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap shadow-[0_0_10px_rgba(234,179,8,0.1)]">{comp.rank}</span>
                                        </div>
                                        <p className="text-gray-400 text-sm">{comp.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            {/* Indicators */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4 text-xs font-medium tracking-[0.2em] text-gray-500 glass px-6 py-2 rounded-full">
                <span className="hover:text-cyan-400 transition-colors cursor-pointer">SKILLS</span>
                <span className="text-white/20">&bull;</span>
                <span className="hover:text-purple-400 transition-colors cursor-pointer">BACKGROUND</span>
            </div>
        </div>
    );
};

export default Skills;
