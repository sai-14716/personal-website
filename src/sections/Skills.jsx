
import { motion } from 'framer-motion';
import { Code, Database, Layout, Server, Cpu, Brain, Award, GraduationCap } from 'lucide-react';

import { projectsData } from './Projects';

const Skills = () => {
    const initialSkills = [
        { name: "Python", icon: <Code />, category: "Language" },
        { name: "JavaScript", icon: <Layout />, category: "Language" },
        { name: "React", icon: <Code />, category: "Library" },
        { name: "Node.js", icon: <Server />, category: "Backend" },
        { name: "SQL", icon: <Database />, category: "Database" },
        { name: "TensorFlow", icon: <Brain />, category: "ML" },
        { name: "C++", icon: <Cpu />, category: "Language" },
        { name: "Git", icon: <Code />, category: "Tool" },
    ];

    // Extract unique tags from projects
    const projectTags = [...new Set(projectsData.flatMap(p => p.tags))];

    // Filter tags that are not already in initialSkills
    const newTags = projectTags.filter(tag =>
        !initialSkills.some(skill => skill.name.toLowerCase() === tag.toLowerCase())
    );

    // Map new tags to skill objects
    const dynamicSkills = newTags.map(tag => ({
        name: tag,
        icon: <Code />, // Default icon for derived skills
        category: "Project Tech"
    }));

    // Merge lists
    const skills = [...initialSkills, ...dynamicSkills];

    const education = [

        {
            title: "Dual Degree(B.Tech + M.Tech) in Computer Science",
            institution: "Indian Institute of Technology Kharagpur",
            year: "2022 - 2027",
            details: "From algorithms graphs to real life AI applications"
        }

    ];

    const competitions = [
        {
            title: "IOQP 2022",
            rank: "National top 1%",
            desc: "Regional round for International Olympiad on Physics."
        },
        {
            title: "JEE Advanced 2022",
            rank: "AIR 981",
            desc: "Good problem solving skills in Maths, Physics and Chemistry."
        }
    ];

    return (
        <div className="h-full w-full bg-zinc-700 flex flex-col justify-start relative overflow-hidden pt-32">
            <div className="w-full pl-20 z-10 mb-8">
                <h2 className="text-5xl font-bold text-white mb-2">Capabilities</h2>
                <p className="text-gray-300">Skills, Education & Achievements</p>
            </div>

            {/* Horizontal Scroll Container */}
            <div className="w-full h-[60vh] flex overflow-x-auto snap-x snap-mandatory scrollbar-hide overscroll-x-contain">

                {/* Page 1: Skills */}
                <div className="min-w-full h-full snap-center flex justify-center items-center p-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl w-full">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                className="bg-zinc-800 p-8 rounded-2xl flex flex-col items-center justify-center gap-4 hover:bg-zinc-600 transition-colors cursor-default border border-zinc-600 aspect-square"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="text-4xl text-blue-400">{skill.icon}</div>
                                <h3 className="text-xl font-bold text-center">{skill.name}</h3>
                                <span className="text-xs text-gray-400 uppercase tracking-widest text-center">{skill.category}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Page 2: Education & Competitions */}
                <div className="min-w-full h-full snap-center flex justify-center items-center p-10">
                    <div className="flex flex-col md:flex-row gap-10 max-w-7xl w-full h-full">

                        {/* Education Column */}
                        <div className="flex-1 bg-zinc-800/50 p-8 rounded-2xl border border-zinc-600 backdrop-blur-sm overflow-y-auto scrollbar-hide">
                            <div className="flex items-center gap-4 mb-8 sticky top-0 bg-transparent z-10">
                                <GraduationCap size={40} className="text-yellow-400" />
                                <h3 className="text-3xl font-bold">Education</h3>
                            </div>
                            <div className="space-y-8">
                                {education.map((edu, index) => (
                                    <div key={index} className="border-l-2 border-zinc-500 pl-6 relative">
                                        <div className="absolute w-3 h-3 bg-zinc-500 rounded-full -left-[7px] top-1"></div>
                                        <h4 className="text-xl font-bold">{edu.title}</h4>
                                        <p className="text-blue-300">{edu.institution}</p>
                                        <p className="text-sm text-gray-400 mb-2">{edu.year}</p>
                                        <p className="text-gray-300">{edu.details}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Competitions Column */}
                        <div className="flex-1 bg-zinc-800/50 p-8 rounded-2xl border border-zinc-600 backdrop-blur-sm overflow-y-auto scrollbar-hide">
                            <div className="flex items-center gap-4 mb-8 sticky top-0 bg-transparent z-10">
                                <Award size={40} className="text-red-400" />
                                <h3 className="text-3xl font-bold">Competitions</h3>
                            </div>
                            <div className="space-y-6">
                                {competitions.map((comp, index) => (
                                    <div key={index} className="bg-zinc-700/50 p-6 rounded-xl hover:bg-zinc-700 transition-colors">
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="text-lg font-bold">{comp.title}</h4>
                                            <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-xs font-bold">{comp.rank}</span>
                                        </div>
                                        <p className="text-gray-300 text-sm">{comp.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            {/* Indicators */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-4 text-sm font-light tracking-widest text-gray-400 animate-pulse">
                <span>SKILLS</span>
                <span>&bull;</span>
                <span>EDUCATION</span>
            </div>
        </div>
    );
};

export default Skills;
