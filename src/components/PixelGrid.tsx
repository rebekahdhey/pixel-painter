import { GRID_SIZE } from '../utils/grid'

interface PixelGridProps {
  cells: string[]
  isPainting: boolean
  onPaintStart: (index: number) => void
  onPaintOver: (index: number) => void
}

function PixelGrid({ cells, isPainting, onPaintStart, onPaintOver }: PixelGridProps) {
  return (
    <div
      className='pixel-grid'
      style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)` }}
    >
      {cells.map((color, index) => (
        <div
          key={index}
          className='pixel-cell'
          style={{ background: color }}
          onMouseDown={() => onPaintStart(index)}
          onMouseEnter={() => {
            if (isPainting) onPaintOver(index)
          }}
        >

        </div>
      ))}
      
    </div>
  )
}

export default PixelGrid