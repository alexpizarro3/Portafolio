import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
const projectsDirectory = path.join(process.cwd(), 'src/content/projects');

export interface ProjectMeta {
    slug: string;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    link?: string;
    id: number;
}

export const getProjectSlugs = () => {
    if (!fs.existsSync(projectsDirectory)) return [];
    return fs.readdirSync(projectsDirectory);
};

export const getProjectBySlug = async (slug: string) => {
    const realSlug = slug.replace(/\.mdx$/, '');
    const fullPath = path.join(projectsDirectory, `${realSlug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        slug: realSlug,
        meta: { ...(data as ProjectMeta), slug: realSlug },
        content,
    };
};

export const getAllProjects = () => {
    const slugs = getProjectSlugs();
    const projects = slugs.map((slug) => {
        const realSlug = slug.replace(/\.mdx$/, '');
        const fullPath = path.join(projectsDirectory, slug);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);
        return {
            ...(data as Omit<ProjectMeta, 'slug'>),
            slug: realSlug,
        };
    });

    return projects.sort((a, b) => a.id - b.id);
};
