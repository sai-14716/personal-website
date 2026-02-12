
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
        }, 1500);
    };

    return (
        <div className="h-full w-full bg-zinc-600 flex justify-center items-center relative overflow-hidden">
            {/* Background Element */}
            <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-500 rounded-full blur-[100px]"></div>
                <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-purple-500 rounded-full blur-[100px]"></div>
            </div>

            <div className="container px-4 md:px-20 max-w-6xl w-full flex flex-col md:flex-row gap-12 md:gap-20 z-10">
                {/* Contact Info */}
                <motion.div
                    className="flex-1 space-y-8"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div>
                        <h2 className="text-4xl md:text-6xl font-bold mb-4">Get in Touch</h2>
                        <p className="text-xl text-gray-300">
                            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="p-4 bg-zinc-800 rounded-full"><Mail className="text-blue-400" /></div>
                            <div>
                                <p className="text-sm text-gray-400">Email me at</p>
                                <a href="mailto:hello@srikantam.com" className="text-lg font-medium hover:text-blue-400 transition-colors">hello@srikantam.com</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="p-4 bg-zinc-800 rounded-full"><Phone className="text-green-400" /></div>
                            <div>
                                <p className="text-sm text-gray-400">Call me at</p>
                                <p className="text-lg font-medium">+91 98765 43210</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="p-4 bg-zinc-800 rounded-full"><MapPin className="text-red-400" /></div>
                            <div>
                                <p className="text-sm text-gray-400">Location</p>
                                <p className="text-lg font-medium">Hyderabad, India</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    className="flex-1 bg-zinc-800 p-8 rounded-3xl shadow-xl"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full bg-zinc-700 border border-zinc-600 rounded-lg p-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-zinc-700 border border-zinc-600 rounded-lg p-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                className="w-full bg-zinc-700 border border-zinc-600 rounded-lg p-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-all flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
                        >
                            {isSubmitting ? 'Sending...' : (
                                <>
                                    Send Message
                                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                        {status === 'success' && <p className="text-green-400 text-center mt-2">Message sent successfully!</p>}
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
