'use client';
import { useCallback } from 'react';
import Canvas from '@/components/Canvas';
import { drawTreeAnimation } from '@/utils/canvas';

export const TreeCanvas: React.FC = () => {
  const draw = useCallback((ctx: CanvasRenderingContext2D) => {
    ctx.strokeStyle = '#808080';
    const WIDTH = ctx.canvas.width;
    const HEIGHT = ctx.canvas.height;
    const rootBranch = {
      from: { x: WIDTH / 2, y: HEIGHT },
      length: 60,
      theta: -Math.PI / 2,
    };
    drawTreeAnimation(ctx, rootBranch, 70);
  }, []);

  return (
    <Canvas
      draw={draw}
      className="absolute w-[400px] h-[400px] border-2 border-gray-800"
      width={1024}
      height={720}
    />
  );
};

export default TreeCanvas;
