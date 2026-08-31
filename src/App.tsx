import './App.css'
import { HashRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import AnimatedRoutes from './pages/AnimatedRoutes'

function App() {
  return (
    <HashRouter>
      <Navbar />
      <main className="content">
        <AnimatedRoutes />
      </main>
    </HashRouter>
  )
}

export default App
