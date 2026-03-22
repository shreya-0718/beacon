import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home'

import cursor from './images/cursor.png'
import pointer from './images/pointer.png'

function App() {
  useEffect(() => {
    document.body.style.cursor = `url(${cursor}) 16 16, auto`

    const selectors =
      'button, a, input, textarea, select, label, .kb-interactive, .ks-card, .hero a, .hero button'

    const elements = document.querySelectorAll(selectors)

    const handleEnter = (el) => {
      el.style.cursor = `url(${pointer}) 16 16, pointer`
    }

    const handleLeave = (el) => {
      el.style.cursor = `url(${cursor}) 16 16, auto`
    }

    elements.forEach((el) => {
      el.addEventListener('mouseenter', () => handleEnter(el))
      el.addEventListener('mouseleave', () => handleLeave(el))
    })

    return () => {
      elements.forEach((el) => {
        el.onmouseenter = null
        el.onmouseleave = null
      })
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