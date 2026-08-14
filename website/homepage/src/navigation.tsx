import { Route, Routes } from 'react-router'
import { NavLink } from 'react-router'
import Home from './home'
import Projects from './projects'
import type { ReactNode } from 'react'

export function AppRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
        </Routes>
        </div>
    )
}

function Navbar() {
    return (
        <li>
            <NavLink to="/">Home</NavLink>
            <br />
            <NavLink to="/projects">Projects</NavLink>
        </li>
    )
}

export default function Layout({ children }: { children: ReactNode }) {
    return(
        <div>
            {/* Banner */}
            <link rel="icon" type="image/png" href="images/DuckHead.png" />
            <header className="bg-green-600 text-green-900 p-4">
                <h1 className="text-2x1 font-bold">
                    Hello :)
                </h1>
            </header>
            
            {/* Navbar and page content */}
            <div className='flex'>
                <div className="w-24 bg-gray-200 min-h-screen p-4">
                    <Navbar />
                </div>

                {/* Sugpage */}
                <main className="flex-1 p-6">
                { children }
                </main>
            </div>

            <div className='flex'>
                I built this site myself with React.
            </div>

        </div>
    )
}