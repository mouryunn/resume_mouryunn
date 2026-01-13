import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export function GlassCard({ children, className, ...props }) {
    return (
        <div
            className={twMerge(
                "bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl rounded-2xl",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
