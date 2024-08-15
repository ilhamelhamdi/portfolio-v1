import ProjectDetailModule from "@/modules/ProjectDetailModule";

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  return <ProjectDetailModule slug={params.slug}/>
}
