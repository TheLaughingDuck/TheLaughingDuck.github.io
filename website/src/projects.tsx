import Layout from "./navigation";
import projects from "./projects.json";
import { useState } from "react";

export default function Projects() {
    // Set up tag filter
    const allTags = ["React", "Python", "SQLite", "Tkinter", "PyTorch", "CNN", "ViT", "Statistics", "Typescript", "Web Development", "Matplotlib", "Machine Learning", "Unsupervised Learning", "MONAI"];
    const [activeTags, setActiveTags] = useState<string[]>([]);
    const filteredProjects = activeTags.length === 0 ? projects : projects.filter(proj => activeTags.some(tag => proj.tags.includes(tag)));

    function toggleTag(tag: string) {
        if (activeTags.includes(tag)) {
            setActiveTags(activeTags.filter(t => t !== tag));
        } else {
            setActiveTags([...activeTags, tag]);

        }
    }

    // Create Project Cards
    const items = filteredProjects.map(proj => 
            <ProjectCard
                title={proj.title}
                description={proj.description}
                when={proj.when}
                link={proj.link}
                tags={proj.tags}/>
    );

    return (
        <Layout>
            <div className="">
                <h1 className="font-bold">Filter on tags</h1>
                {/* Tag choices */}
                <div>
                    {allTags.map(tag => (
                        <button
                            key={tag}
                            onClick={() => toggleTag(tag)}
                            className={
                                `${activeTags.includes(tag) ? "bg-blue-500 text-white" : "bg-gray-200 text-black"} p-2 m-1 rounded`
                            }>{tag}</button>
                    ))}
                </div>

                <br/>

                {/* Projects */}
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

                <div className="flex flex-wrap space-x-1 space-y-1">
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