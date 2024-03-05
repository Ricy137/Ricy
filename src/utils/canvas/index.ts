export interface Point {
  x: number;
  y: number;
}

export interface Line {
  from: Point;
  length: number;
  theta: number;
}

export const getEndPoint = (line: Line): Point => {
  return {
    x: line.from.x + line.length * Math.cos(line.theta),
    y: line.from.y + line.length * Math.sin(line.theta),
  };
};

//overload drawLine
export function drawLine(
  ctx: CanvasRenderingContext2D,
  from: Point,
  to: Point
): void;
export function drawLine(ctx: CanvasRenderingContext2D, line: Line): void;
export function drawLine(
  ctx: CanvasRenderingContext2D,
  arg1: Point | Line,
  to?: Point
): void {
  if ('theta' in arg1) {
    const line = arg1 as Line;
    const endPoint = getEndPoint(line);
    drawLine(ctx, line.from, endPoint);
  } else {
    const from = arg1 as Point;
    if (to) {
      ctx.beginPath();
      ctx.moveTo(from.x, from.y);
      ctx.lineTo(to.x, to.y);
      ctx.stroke();
    }
  }
}

export * from './branch';
