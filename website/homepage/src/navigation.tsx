import { Route, Routes } from 'react-router'
import { Link } from 'react-router'
import Home from './home'
import Projects from './projects'
import type { ReactNode } from 'react'

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
      </Routes>
    )
}

function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <br />
            <Link to="/projects">Projects</Link>
        </nav>
    )
}

export default function Layout({ children }: { children: ReactNode }) {
    return(
        <div>
            {/* Banner */}
            <h1>Hello :)</h1>

            <div>
                <Navbar></Navbar>

                {/* Sugpage */}
                { children }
            </div>

        </div>
    )
}