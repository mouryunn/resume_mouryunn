import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from './ui/GlassCard';

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden" id="hero">
            {/* Background gradients */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-amber-glow/20 rounded-full blur-[100px] animate-float" />
            <div className="absolute bottom-20 left-0 w-96 h-96 bg-sunset-orange/10 rounded-full blur-[100px]" />

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-amber-glow font-medium tracking-wide uppercase text-sm">Welcome to my space</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="text-5xl md:text-7xl font-bold leading-tight mt-4"
                    >
                        Mouryasai <br />
                        <span className="text-gradient">Unnam</span>
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.5 }}
                        className="text-2xl md:text-3xl font-semibold text-white/90 mt-4"
                    >
                        AI Enthusiast & Customer Experience Professional
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="mt-6 text-xl text-gray-400 max-w-lg leading-relaxed"
                    >
                        Specializing in AI-driven solutions, LLMs, and Python. Transitioning from Amazon Senior CSA to AI Development.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mt-8 flex gap-4"
                    >
                        <a href="#projects" className="px-8 py-3 rounded-full bg-gradient-to-r from-amber-glow to-sunset-orange text-white font-semibold hover:shadow-[0_0_20px_rgba(245,158,11,0.5)] transition-shadow">
                            View Projects
                        </a>
                        <a href="#contact" className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/5 transition-colors">
                            Contact Me
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="relative"
                >
                    {/* Glowing amber gradient blur behind the image */}
                    <div className="absolute inset-0 bg-amber-glow/30 blur-[60px] rounded-full z-0 transform scale-90" />

                    <motion.div
                        animate={{ y: [-20, 20, -20] }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="relative z-10"
                    >
                        <GlassCard className="p-2">
                            <img src="/images/hero-portrait.png" alt="Mouryasai Unnam" className="rounded-xl w-full object-cover shadow-2xl" />
                        </GlassCard>
                    </motion.div>

                    {/* Floating decorative elements */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        className="absolute -top-10 -right-10 bg-luxury-black border border-white/10 p-4 rounded-xl shadow-xl z-20 hidden md:block"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                            <span className="text-sm font-medium">Available for work</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
