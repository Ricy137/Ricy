"use client";
import {useRef, useEffect} from "react";
import {drawMass} from "@/utils/canvas/mass";

const MassPage: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            drawMass(canvas);
        }
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen">
            <canvas
                ref={canvasRef}
                className="absolute w-[400px] h-[400px] border-2 border-gray-800"
                width={400}
                height={400}
            />
        </div>
    );
};

export default MassPage;
