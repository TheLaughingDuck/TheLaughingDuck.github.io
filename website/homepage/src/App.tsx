import { useState } from 'react'
import './App.css'
import { AppRoutes } from './navigation'

export default function App() {
  return (
    <div>
      <main>
        <AppRoutes />
      </main>
    </div>
  )
}
