
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Home = () => {
    const [priorityImage, setPriorityImage] = useState(null);
    const [trail, setTrail] = useState([]);
    const lastPos = useRef({ x: 0, y: 0 });
    const imageIndex = useRef(0);
    const timerRef = useRef(null);

    // Use local assets from public/images
    // User should add images named priority-[1-3].jpg
    const priorityImages = [
        '/images/priority-4.jpeg',
        '/images/priority-2.jpeg',
        '/images/priority-3.jpeg'
    ];
    const trailSources = Array.from({ length: 10 }).map((_, i) =>
        `/images/trail-${i + 1}.jpeg`
    );

    useEffect(() => {
        // Basic fallback or check if image exists (browser handles 404 naturally)
        setPriorityImage(priorityImages[0]);
    }, []);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const dist = Math.hypot(clientX - lastPos.current.x, clientY - lastPos.current.y);

        // Add new image to trail every 50px movement (unchanged sensitivity)
        if (dist > 50) {
            lastPos.current = { x: clientX, y: clientY };
            const id = Date.now();
            const src = trailSources[imageIndex.current % trailSources.length];
            imageIndex.current += 1;

            // Allow up to 10 items, but also schedule removal
            setTrail(prev => {
                const newTrail = [...prev, { id, x: clientX, y: clientY, src }];
                return newTrail.slice(-10); // Check requirement: "start with one picture to 10"
            });

            // Clear previous decay timer
            if (timerRef.current) clearTimeout(timerRef.current);

            // Set new decay timer to remove items when stopped
            timerRef.current = setTimeout(() => {
                removeTrailItems();
            }, 100);
        }
    };

    // Recursive function to remove items one by one when inactive
    const removeTrailItems = () => {
        setTrail(prev => {
            if (prev.length <= 1) return prev; // "come back to 1"
            // If we have more than 1, remove the oldest (first)
            const newTrail = prev.slice(1);
            // Schedule next removal
            timerRef.current = setTimeout(removeTrailItems, 100);
            return newTrail;
        });
    };

    return (
        <div
            className="h-full w-full relative flex flex-col justify-center items-center overflow-hidden cursor-none bg-black"
            onMouseMove={handleMouseMove}
        >
            {/* Priority Image Background (Visible when trail is small/empty) */}
            <div className="absolute inset-0 flex items-center justify-end opacity-30 pointer-events-none">
                {priorityImage && <img src={priorityImage} className="max-w-full max-h-full object-cover" alt="Priority Bg" />}
            </div>

            {/* Trail */}
            <AnimatePresence>
                {trail.map((item) => (
                    <motion.img
                        key={item.id}
                        src={item.src}
                        initial={{ opacity: 0, scale: 0.5, x: item.x - 100, y: item.y - 100 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.5 } }}
                        transition={{ duration: 0.5 }}
                        className="absolute w-48 h-48 object-cover rounded-lg pointer-events-none z-10"
                        style={{ left: 0, top: 0 }}
                    />
                ))}
            </AnimatePresence>

            {/* Text */}
            <div className="z-20 text-center mix-blend-difference text-white pointer-events-none">
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">SRIKANTAM SAI SRINIVAS</h1>
                <p className="text-2xl mt-4 italic">"Innovating at the intersection of details and design"</p>
            </div>
        </div>
    );
};
export default Home;
