import Layout from "./navigation";
import projects from "./projects.json";
import { useState } from "react";
import { Link } from "react-router";

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

    function ProjectCard({ title = "title", description = "desc.", when = "date", link="simonjorstedt.com", tags = ["A", "B"]}: ProjectCardProps) {
        return (
            <div className="h-full flex flex-col border-1 p-2 max-w-sm shadow-md transition-transform duration-200 hover:scale-105 hover:shadow-xl">
                <Link to={link}>
                    <div className="">
                        <h1 className="font-bold">{title}</h1>
                        <p className="italic">({when})</p>
                        <p>{description}</p>
                        <br/>
                    </div>
                </Link>

                <div className="flex flex-wrap space-x-1 space-y-1">
                    {
                        tags.map(tag => (
                            <p key={tag} onClick={() => toggleTag(tag)} className="cursor-pointer bg-green-600 p-1.5 rounded-xl transition-transform duration-200 hover:scale-110 hover:shadow-xl ">{tag}</p>
                        ))
                    }
                </div>
            </div>
            
        )
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
                                `${activeTags.includes(tag) ? "bg-green-600 text-black" : "bg-gray-200 text-black"} p-2 m-1 rounded cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-xl`
                            }>{tag}</button>
                    ))}
                </div>

                <br/>

                {/* Projects */}
                <div className="flex flex-wrap gap-6 justify-center">{items}</div>
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

