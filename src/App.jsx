import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home'

import cursor from './images/cursor.png'
import pointer from './images/pointer.png'

function App() {
  useEffect(() => {
    document.body.style.cursor = `url(${cursor}) 0 0, auto`

    const handleMouseOver = (e) => {
      const el = e.target
      if (
        el.closest(
          'button, a, input, textarea, select, label, .kb-interactive, .ks-card, .faq-card, .hero a, .hero button'
        )
      ) {
        document.body.style.cursor = `url(${pointer}) 0 0, pointer`
      } else {
        document.body.style.cursor = `url(${cursor}) 0 0, auto`
      }
    }

    const handleMouseDown = () => {
      document.body.style.cursor = `url(${pointer}) 0 0, pointer`
    }
    const handleMouseUp = () => {
      document.body.style.cursor = `url(${cursor}) 0 0, auto`
    }

    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)

    return () => {
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  return (
    <Router>
      <div className="app">
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App