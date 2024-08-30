import Matter from "matter-js";
const {Engine, Render, Bodies, Runner, Composite} = Matter;

export const drawMass = (canvas: HTMLCanvasElement) => {
    const engine = Engine.create();
    const render = Render.create({
        canvas,
        engine,
        options: {
            width: 400,
            height: 400,
            background: "#ffffff",
            wireframes: false,
            // @ts-expect-error untyped
            pixelRatio: "auto",
        },
    });

    const wireframe = {
        fillStyle: "transparent",
        strokeStyle: "black",
        lineWidth: 1,
    };
    const ground = Bodies.rectangle(400, 200, 410, 50, {
        isStatic: true,
        render: wireframe,
    });
    const boxA = Bodies.rectangle(180, -40, 80, 80, {
        render: wireframe,
    });
    Composite.add(engine.world, [boxA, ground]);
    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);
};
