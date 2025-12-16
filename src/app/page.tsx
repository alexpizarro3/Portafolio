import { getAllProjects } from '@/lib/mdx';
import HomeClient from '@/components/HomeClient';

export default async function Page() {
  const projects = getAllProjects();

  return <HomeClient projects={projects} />;
}
