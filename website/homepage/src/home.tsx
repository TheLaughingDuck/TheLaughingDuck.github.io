import Layout from "./navigation"
import hero from "./assets/hero.png"
import { Link } from "react-router"

export default function Home() {
    return (
        <Layout>
            <div className="flex-1 p-6 space-y-4">
                <div className="flex items-stretch gap-4">
                    <Link to="/aboutme">
                        <div className="border p-2 h-full rounded-lg bg-gray-100 shadow-md transition-transform duration-200 hover:scale-105 hover:shadow-xl">
                            <h1 className="font-bold">About me</h1>
                            <p>I love to build and create, and...</p>
                        </div>
                    </Link>
                    
                    <div className="border space-fill rounded-lg transition-transform duration-200 hover:scale-105">
                        <img src={hero} />
                    </div>

                    <Link to="/projects">
                        <div className="border p-2 h-full rounded-lg bg-gray-100 shadow-md transition-transform duration-200 hover:scale-105 hover:shadow-xl">
                            <h1 className="font-bold">Projects</h1>

                            <p>I have worked on...</p>
                        </div>
                    </Link>

                </div>

                <div className="border p-2 h-full rounded-lg bg-gray-100 shadow-md transition-transform duration-200 hover:scale-105 hover:shadow-xl">
                    Hi! I'm Simon, a Data Engineer and Software Developer. My University background in mathematical statistics and machine learning eventually landed me my current job. 
                </div>
            </div>
        </Layout>
    )
}