import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-32 relative items-center justify-center flex flex-col min-h-[60vh] overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/fashion-full.jpeg"
                    alt="Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-luxury-black/90" /> {/* 90% opacity for readability (80% might be too light for white text? adjusting to 90 or 80 based on feel, stick to request 80 first, or ensure contrast) */}
                <div className="absolute inset-0 bg-luxury-black/80" />
            </div>

            <div className="max-w-4xl mx-auto px-6 relative z-10 w-full text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                        y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                        opacity: { duration: 0.8 }
                    }}
                >
                    <SectionHeading title="Let's Connect" subtitle="Get in Touch" />

                    <h3 className="text-2xl md:text-4xl font-bold text-white mb-12 leading-tight">
                        Ready to drive organizational <br /> success with AI?
                    </h3>

                    <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
                        <a href="mailto:unnammouryasai@gmail.com" className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-md group">
                            <Mail className="text-amber-glow group-hover:scale-110 transition-transform" />
                            <span className="text-gray-200">unnammouryasai@gmail.com</span>
                        </a>
                        <a href="tel:+916303699012" className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-md group">
                            <Phone className="text-amber-glow group-hover:scale-110 transition-transform" />
                            <span className="text-gray-200">+91-6303699012</span>
                        </a>
                    </div>

                    <div className="flex justify-center gap-8">
                        {[
                            { icon: Linkedin, href: "https://www.linkedin.com/in/mouryasai-unnam-0a960a1b3" },
                            { icon: Github, href: "https://github.com/mouryunn" }
                        ].map((social, idx) => (
                            <motion.a
                                key={idx}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                className="text-gray-400 hover:text-amber-glow transition-colors p-3 bg-white/5 rounded-full border border-white/5"
                            >
                                <social.icon size={24} />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                <footer className="mt-24 text-center text-gray-600 text-sm">
                    <p>© {new Date().getFullYear()} Mouryasai Unnam. All rights reserved.</p>
                </footer>
            </div>
        </section>
    );
}
