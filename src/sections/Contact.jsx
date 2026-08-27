import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus(null), 3000);
        }, 1500);
    };

    return (
        <div className="h-full w-full bg-[#050505] flex justify-center items-center relative overflow-hidden">
            
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-cyan-500/20 rounded-full blur-[150px]"></div>
                <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] bg-purple-500/20 rounded-full blur-[150px]"></div>
            </div>

            <div className="container px-6 md:px-20 max-w-6xl w-full flex flex-col md:flex-row gap-12 md:gap-20 z-10">
                
                {/* Contact Info */}
                <motion.div
                    className="flex-1 flex flex-col justify-center space-y-10"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <div>
                        <div className="inline-block px-4 py-1.5 glass rounded-full text-sm font-medium text-cyan-400 w-fit mb-4 border border-cyan-500/20 shadow-[0_0_15px_rgba(0,240,255,0.1)]">
                            Contact
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white leading-tight">
                            Let's build <br/><span className="neon-text-purple">together.</span>
                        </h2>
                        <p className="text-lg md:text-xl text-gray-400 font-light max-w-md">
                            Open to discussing systems engineering, quantitative research, or any creative ideas.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <motion.a 
                            href="mailto:srikantamsai14716@gmail.com"
                            className="flex items-center gap-6 group glass-card p-4 rounded-2xl border border-white/5 w-fit"
                            whileHover={{ x: 5 }}
                        >
                            <div className="p-4 glass rounded-xl text-cyan-400 group-hover:bg-cyan-500/10 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all">
                                <Mail size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-medium">Email</p>
                                <p className="text-lg font-medium text-white group-hover:text-cyan-300 transition-colors">srikantamsai14716@gmail.com</p>
                            </div>
                        </motion.a>
                        
                        <div className="flex items-center gap-6 group glass-card p-4 rounded-2xl border border-white/5 w-fit">
                            <div className="p-4 glass rounded-xl text-purple-400">
                                <Phone size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-medium">Phone</p>
                                <p className="text-lg font-medium text-white">+91-7013447743</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 group glass-card p-4 rounded-2xl border border-white/5 w-fit">
                            <div className="p-4 glass rounded-xl text-yellow-400">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-medium">Location</p>
                                <p className="text-lg font-medium text-white">IIT Kharagpur, India</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    className="flex-1 w-full max-w-md mx-auto"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <div className="glass-card p-8 md:p-10 rounded-3xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-1.5">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all placeholder:text-gray-600"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all placeholder:text-gray-600"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all resize-none placeholder:text-gray-600"
                                    placeholder="How can we collaborate?"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-cyan-500 hover:bg-cyan-400 text-[#050505] font-bold py-4 rounded-xl transition-all flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)]"
                            >
                                {isSubmitting ? 'Sending...' : (
                                    <>
                                        Send Message
                                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </>
                                )}
                            </button>
                            {status === 'success' && (
                                <motion.p 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-cyan-400 text-sm text-center mt-4 font-medium"
                                >
                                    Message sent successfully!
                                </motion.p>
                            )}
                        </form>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
