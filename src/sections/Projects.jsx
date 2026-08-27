import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const projectsData = [
    {
        "id": 1,
        "title": "Distributed Systems - Raft + Load Balancer",
        "company": "Systems",
        "category": "Systems",
        "description": "Fault-tolerant Go control plane with Raft leader election, replicated logs, and durable state recovery. Implemented Maglev hashing and local RPC.",
        "tags": ["Go", "Raft", "Consistent Hashing", "RPC"],
        "github": "#",
        "link": "#"
    },
    {
        "id": 2,
        "title": "KTP Kernel Transport Protocol",
        "company": "Systems",
        "category": "Systems",
        "description": "Reliable transport layer over UDP with ordered delivery, receive-window buffering, explicit protocol state, and System V Shared Memory.",
        "tags": ["C", "UDP", "System V IPC", "Networking"],
        "github": "#",
        "link": "#"
    },
    {
        "id": 3,
        "title": "IMC Prosperity Market-Making Agent",
        "company": "Quant/Finance",
        "category": "Quant/Finance",
        "description": "Rule-based market-making agent scanning order books for fair-value deviations. Implemented two-sided quoting, inventory-bounded rebalancing, and position limits.",
        "tags": ["Python", "Pandas", "Order-Book Analytics"],
        "github": "#",
        "link": "#"
    },
    {
        "id": 4,
        "title": "FinSIGHT - Personal Finance Platform",
        "company": "Web / Fullstack",
        "category": "Web",
        "description": "Django financial platform for transaction synchronization, anomaly analysis, and Plaid API integration. Processed backfilled data with Gemini explanation layer.",
        "tags": ["Python", "Django", "Plaid API", "LLMs"],
        "github": "#",
        "link": "#"
    },
    {
        "id": 5,
        "title": "Bayesian Transformer for Sequence Analysis",
        "company": "Machine Learning",
        "category": "Machine Learning",
        "description": "Bayesian transformer for side-channel traces with posterior weight distributions. Applied Local Reparameterisation Trick and linear attention.",
        "tags": ["Python", "TensorFlow", "Keras", "Bayesian NN"],
        "github": "#",
        "link": "#"
    },
    {
        "id": 6,
        "title": "Quantitative Finance - Predicting Option Greeks",
        "company": "Quant/Finance",
        "category": "Quant/Finance",
        "description": "Supervised-learning pipeline to estimate nonlinear option Greeks from historical features. Evaluated using NMSE and R-squared across splits.",
        "tags": ["Python", "Scikit-Learn", "Predictive Modeling"],
        "github": "#",
        "link": "#"
    },
    {
        "id": 7,
        "title": "Regime-Based Option Pricing",
        "company": "Quant/Finance",
        "category": "Quant/Finance",
        "description": "Regime-aware option-pricing pipeline segmenting historical prices. Simulated GBM paths with Monte Carlo sampling and priced European options.",
        "tags": ["Python", "NumPy", "Black-Scholes", "yfinance"],
        "github": "#",
        "link": "#"
    },
    {
        "id": 8,
        "title": "OS - Module Rebuild System",
        "company": "Systems",
        "category": "Systems",
        "description": "Parallel C++ build orchestrator spawning child processes with fork/exec. Parallelized execution across a dependency DAG with deterministic completion.",
        "tags": ["C++", "OS Processes", "DAG Execution"],
        "github": "#",
        "link": "#"
    },
    {
        "id": 9,
        "title": "OS - CPU Scheduler Simulation",
        "company": "Systems",
        "category": "Systems",
        "description": "Event-driven C simulator for FCFS and Round-Robin scheduling. Ordered events using a timestamped min-heap for deterministic scheduling traces.",
        "tags": ["C", "Event-driven", "Min-heap"],
        "github": "#",
        "link": "#"
    },
    {
        "id": 10,
        "title": "OS - Producer/Consumer Boat Ride",
        "company": "Systems",
        "category": "Systems",
        "description": "POSIX-threaded producer/consumer simulator modeling bounded-capacity resource allocation under concurrent access using semaphores and mutexes.",
        "tags": ["C", "Pthreads", "Semaphores"],
        "github": "#",
        "link": "#"
    }
];

const categories = ["All", "Systems", "Quant/Finance", "Machine Learning", "Web"];

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All" 
        ? projectsData 
        : projectsData.filter(p => p.category === activeCategory);

    // Group filtered projects into pages of 6
    const pages = [];
    for (let i = 0; i < filteredProjects.length; i += 6) {
        pages.push(filteredProjects.slice(i, i + 6));
    }

    return (
        <div className="h-full w-full flex flex-col justify-start bg-[#050505] overflow-hidden relative pt-32">
            {/* Ambient Background Glow */}
            <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="w-full pl-8 md:pl-20 z-10 mb-8 pr-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Projects</h2>
                        <p className="text-gray-400">Selected work & experiments</p>
                    </div>
                    
                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-2 glass p-2 rounded-2xl">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                                    activeCategory === cat 
                                    ? 'bg-white/10 text-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.2)]' 
                                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll Container */}
            <div className="w-full flex-1 flex overflow-x-auto snap-x snap-mandatory scrollbar-hide items-center px-4 md:px-10 overscroll-x-contain pb-10">
                <AnimatePresence mode="wait">
                    {pages.map((page, pageIndex) => (
                        <motion.div
                            key={`${activeCategory}-${pageIndex}`}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="min-w-full h-full snap-center flex justify-center items-center px-4 md:px-10"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full h-[60vh] max-w-7xl content-start">
                                {page.map((project, i) => (
                                    <motion.div 
                                        key={project.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="h-full"
                                    >
                                        <ProjectCard project={project} />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Scroll Indicators if multiple pages */}
            {pages.length > 1 && (
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10 glass px-4 py-2 rounded-full">
                    {pages.map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-cyan-400/50"></div>
                    ))}
                </div>
            )}
        </div>
    );
};

export { projectsData };
export default Projects;
