import Layout from "./navigation"
import hero from "./assets/profile.jpg"
import { Link } from "react-router"

export default function Home() {
    return (
        <Layout>
            <div className="flex-1 p-6 space-y-4">
                <div className="flex justify-center items-stretch gap-4">
                    <Link to="/aboutme">
                        <div className="border p-2 h-full rounded-[3vw] bg-gray-100 shadow-md transition-transform duration-200 hover:scale-105 hover:shadow-xl">
                            <h1 className="font-bold">About me</h1>
                            <p>I have always loved to build and...</p>
                        </div>
                    </Link>
                    
                    <div className="border space-fill rounded-[14vw] overflow-hidden transition-transform duration-200 hover:scale-105">
                        <img src={hero} />
                    </div>

                    <Link to="/projects">
                        <div className="border p-2 h-full rounded-[3vw] bg-gray-100 shadow-md transition-transform duration-200 hover:scale-105 hover:shadow-xl">
                            <h1 className="font-bold">Projects</h1>

                            <p>I have worked on...</p>
                        </div>
                    </Link>

                </div>

                <div className="border p-2 h-full rounded-lg bg-gray-100 shadow-md transition-transform duration-200 hover:scale-105 hover:shadow-xl">
                    Hi! I'm Simon, a Data Engineer and Software Developer working as a consultant at Sogeti. My background is a Master's in Statistics and Machine Learning, and a Bachelor's in mathematical statistics. I have worked with all stages of the data management pipeline; obtaining, storing, managing, summarising and visualizing. My main interest lies in planning and implementing IT systems, from small applications up to large systems requiring many interconnected parts. 
                </div>
            </div>
        </Layout>
    )
}