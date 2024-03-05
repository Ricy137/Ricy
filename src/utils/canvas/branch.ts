import { drawLine, Line, getEndPoint } from '.';

export const drawTreeAnimation = (
  ctx: CanvasRenderingContext2D,
  startLine: Line,
  depth: number
): void => {
  let pendingTasks: Function[] = [];
  let counter = 0;
  const drawBranch = (ctx: CanvasRenderingContext2D, line: Line): void => {
    const rootEndPoint = getEndPoint(line);
    counter++;
    drawLine(ctx, line);
    if (counter <= depth || Math.random() < 0.5) {
      const leftBranch: Line = {
        from: rootEndPoint,
        length: line.length + (10 * Math.random() - 5),
        theta: line.theta - 0.4 * Math.random(),
      };
      pendingTasks.push(() => drawBranch(ctx, leftBranch));
    }
    if (counter <= depth || Math.random() < 0.5) {
      const rightBranch: Line = {
        from: rootEndPoint,
        length: line.length + (10 * Math.random() - 5),
        theta: line.theta + 0.4 * Math.random(),
      };
      pendingTasks.push(() => drawBranch(ctx, rightBranch));
    }
  };
  drawBranch(ctx, startLine);
  //draw the frame
  const frame = () => {
    const tastks = [...pendingTasks];
    pendingTasks.length = 0;
    tastks.forEach((task) => task());
  };
  //to control the frame generation rate
  let frameCount = 0;
  const startFrame = () => {
    frameCount++;
    requestAnimationFrame(() => {
      if (!(frameCount % 10)) {
        frame();
      }
      startFrame();
    });
  };
  startFrame();
};
