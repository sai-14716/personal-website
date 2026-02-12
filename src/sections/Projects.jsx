
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ProjectCard from '../components/ProjectCard'; // Import the component we just created (path might need adjustment if file not created yet or in different folder?)
// Wait, I created it in src/components/ProjectCard.jsx.
// Projects.jsx is in src/sections/Projects.jsx.
// So import is correct: '../components/ProjectCard'

const projectsData = [
    {
        "id": 1,
        "title": "Asset Pricing via Linear Regression",
        "company": "Pairs Trading",
        "description": "Recreated MIT’s 18.S096 Case Study to model asset returns using OLS regression. Analyzed relationships between GE stock, S&P 500, and crude oil while validating statistical assumptions and insignificance.",
        "tags": ["Python", "R", "Seaborn", "Statsmodels"],
        "github": "https://github.com/sai-14716/quantitative_finance/blob/main/Finance%2018S095%20CS%201.ipynb",
        "link": "#"
    },
    {
        "id": 2,
        "title": "Machine Learning Algorithms from Scratch",
        "company": "Machine Learning",
        "description": "Implemented core supervised algorithms like Logistic Regression, Naive Bayes, and Decision Trees in pure Python. Focused on manual gradient descent optimization and mathematical intuition without ML libraries.",
        "tags": ["Numpy", "Pandas", "Seaborn", "Python"],
        "github": "https://github.com/sai-14716/ML_from_scratch",
        "link": "#"
    },
    {
        "id": 3,
        "title": "Predicting Greeks using ML",
        "company": "Financial Mathematics",
        "description": "Generated synthetic datasets using Black-Scholes and GBM to train models for predicting Option Greeks. Achieved R² > 0.85 for Vega and Rho using Ridge Regression and GBM simulations.",
        "tags": ["Scikit-learn", "Ridge Regression", "GBM Simulation", "Python"],
        "github": "https://github.com/sai-14716/quantitative_finance/blob/main/Predicting%20greeks.ipynb",
        "link": "#"
    },
    {
        "id": 4,
        "title": "Distributed Keyword Search Engine",
        "company": "Distributed Systems",
        "description": "Developed a scalable search engine using Apache Solr and Zookeeper for data sharding and replication. Achieved 100,000 QPS and 92% hit rate, validated via Siege multi-threaded benchmarking.",
        "tags": ["Apache Solr", "Zookeeper", "JavaScript", "Siege"],
        "github": "#",
        "link": "#"
    },
    {
        "id": 5,
        "title": "Trend-Based Option Pricing",
        "company": "Option Pricing",
        "description": "Built a regime detection system to segment market phases and estimate volatility. Priced European options using Monte Carlo simulations and Black-Scholes, achieving an 18% error rate vs. real prices.",
        "tags": ["Monte Carlo", "Black-Scholes", "Python", "Martingale Pricing"],
        "github": "#",
        "link": "#"
    },
    {
        "id": 6,
        "title": "Autocomplete API Aggregator",
        "company": "Backend Engineering",
        "description": "Full-stack system aggregating real-time results from three distributed servers via REST APIs. Features a Flask backend with debounced JS frontend to handle high-frequency search queries.",
        "tags": ["Flask", "JavaScript", "REST APIs", "Python"],
        "github": "https://github.com/sai-14716/ivy-homes",
        "link": "#"
    },
    {
        "id": 7,
        "title": "Panchayat Management System",
        "company": "Web Development (DBMS)",
        "description": "Role-based Django system for citizens and government agencies to manage welfare schemes and crop data. Leveraged PostgreSQL for secure data handling and citizen service request tracking.",
        "tags": ["Django", "PostgreSQL", "Python"],
        "github": "https://github.com/sai-14716/panchayat-management-django",
        "link": "#"
    },
    {
        "id": 8,
        "title": "Parallel C++ Backtesting Engine",
        "company": "High Performance Computing",
        "description": "Massively parallel engine for high-frequency trading simulations using CUDA and MPI/OpenMP. Architected for sub-100ms latency and cache-efficient processing of millions of daily trades.",
        "tags": ["C++", "CUDA", "MPI", "OpenMP", "HPC"],
        "github": "#",
        "link": "#"
    },
    {
        "id": 9,
        "title": "Airline Reservation System",
        "company": "Web Development (Software Engineering)",
        "description": "Designed a reservation system allowing users to search flights, select seats, and book tickets. Implemented complex route configuration and seat selection logic using Django and PostgreSQL.",
        "tags": ["Django", "PostgreSQL"],
        "github": "https://github.com/sai-14716/flight-management-django",
        "link": "#"
    }
];

const Projects = () => {
    // Horizontal scroll logic
    // We can use a container with overflow-x-scroll and snap-x
    // 3x2 grid means 6 items per "page"
    // If we have more than 6, we need multiple pages.

    // Group projects into pages of 6
    const pages = [];
    for (let i = 0; i < projectsData.length; i += 6) {
        pages.push(projectsData.slice(i, i + 6));
    }

    return (
        <div className="h-full w-full flex flex-col justify-start bg-zinc-900 overflow-hidden relative pt-32">
            <div className="w-full pl-20 z-10 mb-8">
                <h2 className="text-5xl font-bold text-white mb-2">Projects</h2>
                <p className="text-gray-400">Selected work & experiments</p>
            </div>

            {/* Scroll Container */}
            <div className="w-full h-[60vh] flex overflow-x-auto snap-x snap-mandatory scrollbar-hide items-center px-10 overscroll-x-contain">
                {pages.map((page, pageIndex) => (
                    <div
                        key={pageIndex}
                        className="min-w-full h-full snap-center flex justify-center items-center px-10"
                    >
                        <div className="grid grid-cols-3 grid-rows-2 gap-6 w-full h-full max-w-7xl">
                            {page.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                            {/* Fill specific empty slots if last page is not full? */}
                        </div>
                    </div>
                ))}
            </div>

            {/* Scroll Indicators if multiple pages */}
            {pages.length > 1 && (
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {pages.map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-gray-500"></div>
                    ))}
                </div>
            )}
        </div>
    );
};

export { projectsData };
export default Projects;
