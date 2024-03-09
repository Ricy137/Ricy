import { sampleSize } from 'lodash-es';
import { inbound } from '@/utils/canvas';
import { hexToRgb, colorInterpration } from '@/utils/colors';
import { Vector } from '@/utils/vector';
import { randomWithRange } from '@/utils/random';

const pattele = [
  '#ffffff',
  '#caf0f8',
  '#ade8f4',
  '#90e0ef',
  '#48cae4',
  '#00b4d8',
  '#0096c7',
].map(hexToRgb);
let tick = 0;
const maxTicks = 5000;
const iterations = 3;

const randomVectors = (n: number): Vector[] => {
  return Array.from({ length: n }, () => [
    Math.trunc(randomWithRange(400)),
    Math.trunc(randomWithRange(400)),
  ]);
};

//TODO: break this function into smaller functions
export const drawIce = (
  ctx: CanvasRenderingContext2D,
  width = 400,
  height = 400
) => {
  const data = ctx.createImageData(width, height);
  const iceNodes = new Array(width)
    .fill(0)
    .map((_, i) => i)
    .map((i) => new Array(height).fill(0));
  function updateCanvas() {
    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        const iceNode = iceNodes[x][y];
        const [r, g, b] = colorInterpration(pattele, iceNode);

        const pixelindex = (y * width + x) * 4;
        data.data[pixelindex] = r;
        data.data[pixelindex + 1] = g;
        data.data[pixelindex + 2] = b;
        data.data[pixelindex + 3] = 255;
      }
    }

    ctx.putImageData(data, 0, 0);
  }

  //TODO: move out Ice class
  class Ice {
    constructor(public activePoints: Vector[], public iteractions = 5) {}
    next() {
      if (!this.iteractions) return;
      this.iteractions -= 1;

      const newPoints: Vector[] = [];

      this.activePoints.forEach((point) => {
        const [x, y] = point;

        iceNodes[x][y] += randomWithRange(0.1, 0);

        const points: Vector[] = [
          [x, y],
          [x, y + 1],
          [x + 1, y],
          [x, y - 1],
          [x - 1, y],
          [x + 1, y + 1],
          [x + 1, y - 1],
          [x - 1, y + 1],
          [x - 1, y - 1],
        ];

        newPoints.push(
          ...points
            .filter(
              (v) => !newPoints.some((n) => n[0] === v[0] && n[1] === v[1])
            )
            .filter((v) => inbound(v)) // within the canvas
            .filter(([x, y]) => {
              if (iceNodes[x][y] === 0) return true;
              if (iceNodes[x][y] >= 1) return false;
              if (iceNodes[x][y] > 0.8) return randomWithRange() > 0.5;
              else return randomWithRange() > 0.2;
            })
        );
      });

      this.activePoints = sampleSize(newPoints, 200);
    }
  }
  let iceField: Ice[] = [];
  const frame = () => {
    tick++;
    for (let i = 0; i < iterations; i++) {
      iceField.forEach((i) => {
        i.next();
        i.next();
        i.next();
        i.next();
      });
    }
    updateCanvas();

    if (tick >= maxTicks) throw new Error('done');
  };

  const start = () => {
    iceField = [
      new Ice(
        [
          [0, Math.trunc(randomWithRange(400))],
          [Math.trunc(randomWithRange(400)), 0],
          [399, Math.trunc(randomWithRange(400))],
          [Math.trunc(randomWithRange(400)), 399],
        ],
        maxTicks * iterations
      ),
      new Ice(randomVectors(40), (maxTicks * iterations) / 2),
      new Ice(randomVectors(3), (maxTicks * iterations) / 1.5),
    ];
    let frameCount = 0;
    const startFrame = () => {
      try {
        frameCount++;
        requestAnimationFrame(() => {
          //   if (!(frameCount % 1)) {
          //     frame();
          //   }
          frame();
          startFrame();
        });
      } catch (e) {}
    };
    startFrame();
  };

  start();
};
