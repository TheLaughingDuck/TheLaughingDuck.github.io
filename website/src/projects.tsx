import Layout from "./navigation"


export default function Projects() {
    return (
        <Layout>
            <h1>My projects :)</h1>

            <li>
                <ProjectCard title="Job 1" />
                <ProjectCard title="Job 2" />
            </li>
        
        </Layout>
    )
}


function ProjectCard({ title }: {title: string}) {
    return (
        <div className="border-3">
            <h1>{title}</h1>

        </div>
    )
}