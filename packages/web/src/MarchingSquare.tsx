import { Logo } from './logo';
import { useEffect, useRef, useState } from 'preact/hooks';

const EPSILON = 1;

export function MarchingSquare() {
  const [planeSize] = useState(4);

  const [source, setSource] = useState('x ** 2 + y ** 2 - 12');
  const canvas = useRef<HTMLCanvasElement>(null);

  const f = eval(`(x, y) => (${source})`);

  useEffect(() => {
    let ref = { cancel: false };
    (async () => {
      if (!canvas.current) {
        return;
      }
      const width = canvas.current.width;
      const height = canvas.current.height;

      const context = canvas.current.getContext('2d');
      if (!context) {
        return;
      }
      context.fillStyle = 'black';
      context.fillRect(0, 0, width, height);

      const step = 8;
      const count = 2 ** step;
      const squareWidth = width / count;
      const squareHeight = height / count;
      const normalize = (index: number, total: number) =>
        -planeSize + (planeSize * 2 * index) / total;
      const calc = (x: number, y: number): number =>
        f(normalize(x, count), normalize(y, count));
      const chooseColor = (value: number) => {
        context.fillStyle = value >= 0 ? 'blue' : 'red';
      };
      const point = (x: number, y: number) => {
        // context.fillRect(x * squareWidth, height - y * squareHeight, 4, 4);
      };
      const hasGrouped = (array: number[], indexA: string, indexB: string) => {
        return (
          Array.from(indexA)
            .map((s) => array[Number(s)])
            .every((x) => x < 0) &&
          Array.from(indexB)
            .map((s) => array[Number(s)])
            .every((x) => x >= 0)
        );
      };
      const line = (x1: number, y1: number, x2: number, y2: number) => {
        context.strokeStyle = 'white';
        context.lineWidth = 4;
        context.beginPath();
        context.moveTo(x1 * squareWidth, height - y1 * squareHeight);
        context.lineTo(x2 * squareWidth, height - y2 * squareHeight);
        context.closePath();
        context.stroke();
      };
      for (let i = 0; i < count; i++) {
        for (let j = 0; j < count; j++) {
          const points = [
            [i, j],
            [i + 1, j],
            [i, j + 1],
            [i + 1, j + 1],
          ];
          const values = points.map(([x, y]) => Math.sign(calc(x, y)));
          for (let k = 0; k < 4; k++) {
            const [x, y] = points[k];
            const value = values[k];
            chooseColor(value);
            point(x, y);
          }

          if (
            hasGrouped(values, '0123', '') ||
            hasGrouped(values, '', '0123')
          ) {
          } else if (hasGrouped(values, '0', '123')) {
            line(i, j + 0.5, i + 0.5, j);
          } else if (hasGrouped(values, '123', '0')) {
            line(i, j + 0.5, i + 0.5, j);
          } else if (hasGrouped(values, '1', '023')) {
            line(i + 0.5, j, i + 1, j + 0.5);
          } else if (hasGrouped(values, '023', '1')) {
            line(i + 0.5, j, i + 1, j + 0.5);
          } else if (hasGrouped(values, '2', '013')) {
            line(i, j + 0.5, i + 0.5, j + 1);
          } else if (hasGrouped(values, '013', '2')) {
            line(i, j + 0.5, i + 0.5, j + 1);
          } else if (hasGrouped(values, '3', '012')) {
            line(i + 0.5, j + 1, i + 1, j + 0.5);
          } else if (hasGrouped(values, '012', '3')) {
            line(i + 0.5, j + 1, i + 1, j + 0.5);
          } else if (hasGrouped(values, '01', '23')) {
            line(i, j + 0.5, i + 1, j + 0.5);
          } else if (hasGrouped(values, '23', '01')) {
            line(i, j + 0.5, i + 1, j + 0.5);
          } else if (hasGrouped(values, '02', '13')) {
            line(i + 0.5, j, i + 0.5, j + 1);
          } else if (hasGrouped(values, '13', '02')) {
            line(i + 0.5, j, i + 0.5, j + 1);
          } else {
            console.log(values);
          }
          if (ref.cancel) {
            return;
          }
        }
      }
      if (ref.cancel) {
        return;
      }
    })();

    return () => {
      ref.cancel = true;
    };
  }, [source]);

  return (
    <>
      <h3>f(x, y) = {source}</h3>
      <div>
        <canvas width={400} height={400} ref={canvas} />
      </div>
      <input onBlur={(e) => setSource(e.currentTarget.value)} />
    </>
  );
}
