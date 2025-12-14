'use client';

import { Eye } from 'lucide-react';
import { profile } from '../data/profile';

interface FooterProps {
    visitCount: number | null;
}

export default function Footer({ visitCount }: FooterProps) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative mt-20 border-t border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-black/50 backdrop-blur-md">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    {/* Copyright & Info */}
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 mb-2">
                            {profile.name}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 font-mono">
                            © {currentYear} All rights reserved.
                        </p>
                        <p className="text-xs text-gray-400 dark:text-gray-500 mt-1 font-mono">
                            Built with Next.js 15, Tailwind, and Vercel KV.
                        </p>
                    </div>

                    {/* Socials */}
                    <div className="flex gap-4">
                        {profile.socials.map((social, index) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-indigo-100 dark:hover:bg-gray-700 transition-colors group border border-transparent hover:border-indigo-200 dark:hover:border-gray-600"
                                    aria-label={social.name}
                                >
                                    <Icon className={`w-5 h-5 ${social.color} opacity-70 group-hover:opacity-100 transition-opacity`} />
                                </a>
                            );
                        })}
                    </div>

                    {/* Visit Counter */}
                    <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-indigo-50/50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/50 font-mono text-sm">
                        <Eye className="w-4 h-4 text-indigo-500 animate-pulse" />
                        <span className="text-indigo-700 dark:text-indigo-300">
                            {visitCount !== null ? visitCount.toLocaleString() : '...'} visits
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
