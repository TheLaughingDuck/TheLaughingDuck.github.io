import { Link } from "react-router"
import Layout from "./navigation"
import projects from "./projects.json";

export default function Projects() {

    console.log(projects)

    const items = projects.map(proj => 
            <ProjectCard
                title={proj.title}
                description={proj.description}
                when={proj.when}
                link={proj.link}
                tags={proj.tags}/>
    );

    return (
        <Layout>
            <h1>My projects</h1>

            <div className="">
                {/* Tag choices */}
                <div>Tag choices</div>

                <div className="flex flex-wrap gap-6 justify-center">{items}</div>
                
                {/* <Link to="/algorithms"><ProjectCard title="Algorithms" /></Link> */}
            </div>        
        </Layout>
    )
}

type ProjectCardProps = {
    title?: string,
    description?: string,
    when?: string,
    link?: string,
    tags?: string[]
}

function ProjectCard({ title = "title", description = "desc.", when = "date", link="simonjorstedt.com", tags = ["A", "B"]}: ProjectCardProps) {
    return (
        <a href={link}>
            <div className="h-full flex flex-col border-1 p-2 max-w-sm shadow-md transition-transform duration-200 hover:scale-105 hover:shadow-xl">
                <h1 className="font-bold">{title}</h1>
                <p className="italic">({when})</p>
                <p>{description}</p>
                <br/>

                <div className="flex flex-row space-x-1">
                    {
                        tags.map(tag => (
                            <span key={tag} className="bg-green-600 p-1 rounded-xl">{tag}</span>
                        ))
                    }
                </div>
            </div>
        </a>
    )
}