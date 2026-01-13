import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { GlassCard } from './ui/GlassCard';
import { Briefcase } from 'lucide-react';

const experiences = [
    {
        role: "Senior Customer Service Associate",
        company: "Amazon",
        period: "Dec 2024 - Present",
        description: "Led initiatives to analyze and optimize customer service operations. Drove data-backed process improvements and reduction of resolution time."
    },
    {
        role: "Customer Service Associate",
        company: "Amazon",
        period: "Aug 2022 - Nov 2024",
        description: "Collaborated with cross-functional teams to implement CX enhancements."
    },
    {
        role: "Communicative English Trainer",
        company: "ILM",
        period: "Feb 2022 - July 2022",
        description: "Designed interactive training for 30+ students."
    }
];

export default function Experience() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section id="experience" className="py-24 relative overflow-hidden" ref={containerRef}>
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <SectionHeading title="Experience" subtitle="My Journey" />

                <div className="relative">
                    {/* Timeline Line (Background) */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2 ml-4 md:ml-0" />

                    {/* Timeline Line (Animated Fill) */}
                    <motion.div
                        style={{ scaleY, originY: 0 }}
                        className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-glow to-sunset-orange md:-translate-x-1/2 ml-4 md:ml-0 z-0"
                    />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Timeline Center Dot */}
                                <div className="absolute left-0 md:left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-luxury-black border-2 border-amber-glow z-20 ml-2 md:ml-0 shadow-[0_0_10px_rgba(245,158,11,0.5)]" />

                                {/* Content Card */}
                                <div className="flex-1 ml-10 md:ml-0">
                                    <GlassCard className="p-8 hover:bg-white/10 transition-colors group relative overflow-hidden">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-amber-glow to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <div className="flex items-center gap-3 mb-2 text-amber-glow">
                                            <Briefcase size={18} />
                                            <span className="text-sm font-semibold tracking-wide">{exp.period}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white group-hover:text-amber-glow transition-colors">{exp.role}</h3>
                                        <div className="text-gray-400 text-sm mb-4">{exp.company}</div>
                                        <p className="text-gray-300 leading-relaxed text-sm">
                                            {exp.description}
                                        </p>
                                    </GlassCard>
                                </div>

                                {/* Empty Space for Grid Alignment */}
                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
