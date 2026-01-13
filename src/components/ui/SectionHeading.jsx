import React from 'react';
import { motion } from 'framer-motion';

export function SectionHeading({ title, subtitle }) {
    return (
        <div className="mb-16 text-center">
            <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-amber-glow uppercase tracking-wider text-sm font-semibold"
            >
                {subtitle}
            </motion.span>
            <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl font-bold mt-2"
            >
                {title}
            </motion.h2>
        </div>
    );
}
