import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home'

import cursor from './images/cursor.png'
import pointer from './images/pointer.png'

function App() {
  useEffect(() => {
    const setDefault = () => {
      document.body.style.cursor = `url(${cursor}) 0 0, auto`
    }

    const setPointer = () => {
      document.body.style.cursor = `url(${pointer}) 0 0, pointer`
    }

    setDefault()

    document.addEventListener('mouseover', (e) => {
      const el = e.target
      if (
        el.closest(
          'button, a, input, textarea, select, label, .kb-interactive, .ks-card, .faq-card, .hero a, .hero button'
        )
      ) {
        setPointer()
      } else {
        setDefault()
      }
    })

    const handleMouseDown = () => setPointer()
    const handleMouseUp = () => setDefault()

    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)

    return () => {
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