export const GRID_SIZE = 16 

export function createEmptyGrid(): string[] {
  return Array(GRID_SIZE * GRID_SIZE).fill('#FFFFFF')
}