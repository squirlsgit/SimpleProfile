
// Converts from relative coordinates to absolute coordinates
export const pos = function (canvas: HTMLCanvasElement, p: Position) {
  return { x: canvas.width * p.x, y: canvas.height * p.y, y_cartesian: canvas.height * (1 - p.y) };
};

// Converts from relative size to absolute size;
// Currently no proper way to introduce ranges for the numbers, so up to runtime debugging on this one.
export const size = function (canvas: HTMLCanvasElement, size: Size) {
  return { width: size.width * canvas.width, height: size.height * canvas.height };
}
export const vector = function (p1: Position, p2: Position) {
  const deltax = Math.abs(p2.x - p1.x);
  const deltay = Math.abs(p2.y - p1.y);
}

export const line = function (p1: Position, p2: Position) {
  
}
export interface Size {
  width: number,
  height: number
}
export interface Position {
  x: number,
  y: number
}

export interface Vector {

  // Radians
  start: Position;
  alpha: number;


}

export interface AbsolutePosition {
  x: number,
  y: number,
  y_cartesian: number
}

export interface Line {
  start: Position;
  m: number;
  xfin: number;
}
