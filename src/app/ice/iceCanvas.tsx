'use client';
import { useCallback } from 'react';
import Canvas from '@/components/Canvas';
import { drawIce } from '@/utils/canvas';

export const IceCanvas: React.FC = () => {
  const draw = useCallback((ctx: CanvasRenderingContext2D) => {
    drawIce(ctx, 400, 400);
  }, []);

  return (
    <Canvas
      draw={draw}
      className="absolute w-[400px] h-[400px] border-2 border-gray-800"
      width={400}
      height={400}
    />
  );
};

export default IceCanvas;
