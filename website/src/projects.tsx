import Layout from "./navigation"


export default function Projects() {
    return (
        <Layout>
            <h1>My projects :)</h1>

            <div className="flex flex-wrap gap-6 justify-center">
                <ProjectCard
                    title="Job application automation"
                    description="Manage your job applications via a UI-widget and a SQLite database. Relevant job listings are automatically scraped and retrieved through TheirStack."
                    when="Autumn 2025"
                    tags={["Python", "SQLite", "Tkinter"]}
                />

                <ProjectCard
                    title="Brain tumour classification using Deep Learning"
                    description="In my Master's thesis I classified diagnosis and location of tumours by fine-tuning pre-trained ResNet and VisionTransformer models on MRI sequence combinations."
                    when="Spring 2025"
                    tags = {["Python", "PyTorch", "CNN", "ViT", "MONAI", "Statistics"]}
                />

                <ProjectCard
                    title="Personal website"
                    description="I designed and built this website myself"
                    when=""
                    tags={["Typescript", "React", "Web Development"]}
                />

                <ProjectCard
                    title="Work Clock"
                    description="A timer widget that saves work-session data in a SQLite database, and automatically generates plots for immediate insight."
                    when=""
                    tags={["Python", "SQLite", "Matplotlib"]}
                />

                <ProjectCard
                    title="Initialization of k-means"
                    description="In my Bachelor's thesis I investigated three initialization methods for the k-means algorithm."
                    when=""
                    tags={["Python", "Machine Learning", "Unsupervised Learning"]}
                />
                
                {/* Template */}
                {/* <ProjectCard
                    title=""
                    description=""
                    when=""
                    tags={[]}
                /> */}
                
                {/* <Link to="/algorithms"><ProjectCard title="Algorithms" /></Link> */}
            </div>        
        </Layout>
    )
}

type ProjectCardProps = {
    title?: string,
    description?: string,
    when?: string,
    tags?: string[]
}

function ProjectCard({ title = "title", description = "desc.", when = "date", tags = ["A", "B"]}: ProjectCardProps) {
    return (
        <div className="h-full flex flex-col border-1 p-2 max-w-sm">
            <h1 className="font-bold">{title}</h1>
            <p className="italic">({when})</p>
            <p>{description}</p>
            {
                tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                ))
            }
            <p></p>
        </div>
    )
}