import Layout from "./navigation"
import hero from "./assets/profile.jpg"
import { Link } from "react-router"

export default function Home() {
    return (
        <Layout>
            <div className="flex-1 p-6 space-y-4">
                <div className="flex justify-center items-center w-full gap-4">
                    {/* About me */}
                    <div className="p-4 bg-gray-100 max-w-xs flex items-center rounded-[3vw] shadow-md transition-transform duration-200 hover:scale-105 hover:shadow-xl">
                        <Link to="/aboutme">
                            <h1 className="font-bold">About me</h1>
                            <p>I have always loved to build and create things. Woodworking, 3D-printing, knitting, crocheting, programming.</p>
                        </Link>
                    </div>

                    {/* Center picture */}
                    <div className="p-4 flex items-center">
                        <img src={hero} className="max-w-[200px] rounded-[14vw] object-contain  shadow-md transition-transform duration-200 hover:scale-105 hover:shadow-xl" />
                    </div>

                    {/* Projects */}
                    <div className="p-4 bg-gray-100 max-w-xs flex items-center rounded-[3vw] shadow-md transition-transform duration-200 hover:scale-105 hover:shadow-xl">
                        <Link to="/projects">
                            <h1 className="font-bold">Projects</h1>
                            <p>I have worked on many projects over the years, both personal, as part of my studies, and in my work life.</p>
                        </Link>
                    </div>
                </div>

                {/* Bottom introduction */}
                <div className="p-2 h-full rounded-lg bg-gray-100 shadow-md transition-transform duration-200 hover:scale-105 hover:shadow-xl">
                    Hi! I'm Simon, a Data Engineer and Software Developer working as a consultant at Sogeti. My background is a Master's in Statistics and Machine Learning, and a Bachelor's in mathematical statistics. I have worked with all stages of the data management pipeline; obtaining, storing, managing, summarising and visualizing. My main interest lies in planning and implementing IT systems, from small applications up to large systems requiring many interconnected parts. 
                </div>
            </div>
        </Layout>
    )
}