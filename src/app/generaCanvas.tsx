'use client';
import { useCallback } from 'react';
import Canvas from '@/components/Canvas';
import { drawTreeAnimation } from '@/utils/canvas';

export const GeneraCanvas: React.FC = () => {
  const draw = useCallback((ctx: CanvasRenderingContext2D) => {
    ctx.strokeStyle = '#808080';
    const WIDTH = ctx.canvas.width;
    const HEIGHT = ctx.canvas.height;
    const rootBranch = {
      from: { x: WIDTH / 2, y: HEIGHT },
      length: 60,
      theta: -Math.PI / 2,
    };
    drawTreeAnimation(ctx, rootBranch, 20);
  }, []);

  return (
    <Canvas
      draw={draw}
      className="absolute w-full h-screen"
      width={1440}
      height={900}
    />
  );
};

export default GeneraCanvas;
