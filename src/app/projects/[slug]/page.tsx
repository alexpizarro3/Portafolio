import { getProjectBySlug, getProjectSlugs } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/sections/Navbar'; // Assuming we extract Navbar or use layout
import Footer from '@/components/sections/Footer';
import TechCard from '@/components/ui/TechCard'; // Example of component we can use
import CyberGrid from '@/components/ui/CyberGrid';

export async function generateStaticParams() {
    const slugs = getProjectSlugs();
    return slugs.map((slug) => ({
        slug: slug.replace(/\.mdx$/, ''),
    }));
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
    const { meta, content } = await getProjectBySlug(params.slug);

    const components = {
        TechCard,
        // Add more components here to use in MDX
    };

    return (
        <main className="min-h-screen bg-space-black text-white relative">
            <CyberGrid />
            <Navbar />
            <div className="pt-24 px-6 max-w-4xl mx-auto relative z-10">
                <Link href="/#portfolio" className="inline-flex items-center text-neon-cyan hover:text-white mb-8 transition-colors">
                    <ArrowLeft className="mr-2 w-4 h-4" /> Back to Portfolio
                </Link>

                <div className="glass-panel p-8 md:p-12 mb-12">
                    <div className="flex flex-col md:flex-row gap-8 items-start mb-8 border-b border-white/10 pb-8">
                        <div className="relative w-full md:w-1/3 aspect-video rounded-lg overflow-hidden border border-neon-cyan/30">
                            <Image
                                src={meta.image}
                                alt={meta.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold text-white text-glow mb-4">{meta.title}</h1>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {meta.technologies.map(tech => (
                                    <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-neon-cyan">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <p className="text-gray-300 italic">{meta.description}</p>
                        </div>
                    </div>

                    <article className="prose prose-invert prose-indigo max-w-none prose-headings:font-mono prose-headings:text-neon-cyan prose-p:text-gray-300">
                        <MDXRemote source={content} components={components} />
                    </article>
                </div>
            </div>
            <Footer visitCount={null} />
        </main>
    );
}
