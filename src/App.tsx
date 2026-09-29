import { useState } from 'react'
import { createEmptyGrid, GRID_SIZE } from './utils/grid'
import { palette } from './data/palette'
import PixelGrid from './components/PixelGrid'
import './App.css'

function App() {
  const [cells, setCells] = useState<string[]>(() => createEmptyGrid())
  const [selectedColor, setSelectedColor] = useState(palette[0])
  const [isPainting, setIsPainting] = useState(false)

  function paintCell(index: number) {
    setCells((current) => {
      const next = [...current]
      next[index] = selectedColor
      return next
    })
  }

  function handlePaintStart(index: number) {
    setIsPainting(true)
    paintCell(index)
  }

  function handlePaintOver(index: number) {
    paintCell(index)
  }

  function handleClear() {
    setCells(createEmptyGrid())
  }

  return (
    <div
      className="app"
      onMouseUp={() => setIsPainting(false)}
      onMouseLeave={() => setIsPainting(false)}
    >
      <h1>Pixel Painter</h1>
      <p className="subtitle">{GRID_SIZE} × {GRID_SIZE} canvas</p>

      <PixelGrid
        cells={cells}
        isPainting={isPainting}
        onPaintStart={handlePaintStart}
        onPaintOver={handlePaintOver}
      />

      <div className="palette">
        {palette.map((color) => (
          <button
            key={color}
            className={`swatch ${selectedColor === color ? 'active' : ''}`}
            style={{ background: color }}
            onClick={() => setSelectedColor(color)}
          />
        ))}
      </div>

      <button className="clear-btn" onClick={handleClear}>
        Clear canvas
      </button>
    </div>
  )
}

export default App