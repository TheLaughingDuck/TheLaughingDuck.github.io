import { Route, Routes } from 'react-router'
import Home from './home'
import Projects from './projects'
import type { ReactNode } from 'react'
import AboutMe from './aboutMe'
import { Link } from 'react-router'

export function AppRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutme" element={<AboutMe />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </div>
    )
}


export default function Layout({ children }: { children: ReactNode }) {
    return(
        <div>
            {/* Banner */}
            <header className="flex bg-blue-200 text-green-900 p-4">
                <Link to="/">
                    <h1 className="text-2x1 font-bold shadow-md transition-transform duration-200 hover:scale-110 border-2">
                        Home
                    </h1>
                </Link>

                <select className="ml-auto">
                    <option selected disabled>Settings</option>
                    <option>1</option>
                    <option>2</option>
                </select>
            </header>
            
            {/* Navbar and page content */}
            <div className='flex'>
                {/* Sugpage */}
                <main className="flex-1 p-6">
                { children }
                </main>
            </div>
        </div>
    )
}