import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GlassCard } from './ui/GlassCard';
import { SectionHeading } from './ui/SectionHeading';

const skills = [
    { category: "AI/ML", items: ["LangChain", "Ollama", "Streamlit", "LLMs"] },
    { category: "Languages", items: ["Python", "C", "C++"] },
    { category: "Web", items: ["ReactJS", "Node.js", "HTML/CSS", "JavaScript"] },
    { category: "Data", items: ["MongoDB", "MySQL"] }
];

export default function About() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax effect: image moves faster than scroll (negative y value moves it up as we scroll down)
    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <section id="about" className="py-24 relative" ref={containerRef}>
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeading title="About Me" subtitle="Who I Am" />

                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Left: Parallax Image */}
                    <motion.div style={{ y }} className="relative z-10">
                        <GlassCard className="p-2 -rotate-2 hover:rotate-0 transition-transform duration-500 overflow-hidden">
                            <img
                                src="/images/about-closeup.jpeg"
                                alt="About Me"
                                className="rounded-xl w-full object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
                                loading="lazy"
                            />
                        </GlassCard>
                        {/* Decorative backing */}
                        <div className="absolute inset-0 bg-amber-glow/20 blur-3xl -z-10 transform translate-y-4" />
                    </motion.div>

                    {/* Right: Skills Cloud */}
                    <div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-lg text-gray-300 leading-relaxed mb-10"
                        >
                            I'm a developer who believes that code is just a tool to create magic. With a background in both design and engineering, I bridge the gap between aesthetics and functionality. My goal is to build applications that feel natural, fluid, and essentially—antigravity.
                        </motion.p>

                        <div className="space-y-8">
                            {skills.map((group, groupIndex) => (
                                <div key={group.category}>
                                    <motion.h4
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 * groupIndex }}
                                        className="text-amber-glow font-medium mb-3 text-sm tracking-wider uppercase"
                                    >
                                        {group.category}
                                    </motion.h4>
                                    <div className="flex flex-wrap gap-3">
                                        {group.items.map((skill, i) => (
                                            <motion.span
                                                key={skill}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true }}
                                                variants={{
                                                    hidden: { opacity: 0, scale: 0.8 },
                                                    visible: {
                                                        opacity: 1,
                                                        scale: 1,
                                                        transition: { delay: 0.2 + (i * 0.05) }
                                                    },
                                                    float: {
                                                        y: [0, -6, 0],
                                                        rotate: [0, 1, -1, 0],
                                                        transition: {
                                                            duration: 3 + Math.random() * 2,
                                                            repeat: Infinity,
                                                            ease: "easeInOut",
                                                            delay: Math.random() * 2
                                                        }
                                                    }
                                                }}
                                                animate="float"
                                                whileHover={{
                                                    scale: 1.1,
                                                    boxShadow: "0 0 15px rgba(245, 158, 11, 0.5)",
                                                    borderColor: "rgba(245, 158, 11, 0.8)",
                                                    color: "#fff"
                                                }}
                                                className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-300 text-sm cursor-default backdrop-blur-sm transition-colors duration-300 hover:text-white"
                                            >
                                                {skill}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
