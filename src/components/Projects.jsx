import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from './ui/GlassCard';
import { SectionHeading } from './ui/SectionHeading';
import { ExternalLink, Github, Code, ArrowUpRight } from 'lucide-react';

const projects = [
    {
        title: "AI Ollama Web Agent",
        description: "A web agent using Streamlit to analyze and summarize internet data based on user queries.",
        tags: ["Python", "Streamlit", "Ollama"],
        link: "#",
        github: "#",
        color: "from-orange-500 to-amber-500"
    },
    {
        title: "AI Ollama LLM Web UI",
        description: "Secure system providing multi-user access to a local Large Language Model.",
        tags: ["LLMs", "Web Security"],
        link: "#",
        github: "#",
        color: "from-blue-500 to-cyan-500"
    },
    {
        title: "File Sorter",
        description: "Web-based file manager to organize files into custom categories with drag-and-drop.",
        tags: ["JavaScript", "Local Storage"],
        link: "#",
        github: "#",
        color: "from-green-500 to-emerald-500"
    },
    {
        title: "To-Do Application",
        description: "Task management app with CRUD functionalities.",
        tags: ["Bootstrap", "JavaScript"],
        link: "#",
        github: "#",
        color: "from-purple-500 to-pink-500"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeading title="Selected Works" subtitle="Portfolio" />

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <GlassCard
                                className="h-full p-8 group relative overflow-hidden transition-all duration-300 hover:shadow-[0_20px_30px_-10px_rgba(245,158,11,0.3)] hover:border-amber-glow/50 bg-luxury-black/40"
                            >
                                {/* Gradient Overlay on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex justify-between items-start mb-6">
                                        <h3 className="text-2xl font-bold group-hover:text-amber-glow transition-colors">{project.title}</h3>
                                        <div className="flex gap-2 text-gray-400">
                                            <a href={project.github} className="hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"><Github size={20} /></a>
                                            <a href={project.link} className="hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"><ExternalLink size={20} /></a>
                                        </div>
                                    </div>

                                    <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 flex items-center gap-1">
                                                <Code size={12} className="text-amber-glow" />
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                                        <ArrowUpRight size={24} className="text-amber-glow" />
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
