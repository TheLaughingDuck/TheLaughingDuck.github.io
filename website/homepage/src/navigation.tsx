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
            <header className="flex bg-blue-200 text-green-900 p-4">
                <h1 className="text-2x1 font-bold">
                    Hello :)
                </h1>

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