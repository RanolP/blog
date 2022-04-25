import { useEffect, useRef, useState } from 'preact/hooks';

const EPSILON = 1;

export function MarchingSquare() {
  const [planeSize] = useState(4);

  const [source, setSource] = useState('x ** 2 + y ** 2 - 12');
  const canvas = useRef<HTMLCanvasElement>(null);

  function f(x: number, y: number) {
    const { E, PI, sin, cos, tan, log, sqrt } = Math;
    return eval(source);
  }

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
            .map((s) => array[Number(s)] || 0)
            .every((x) => x < 0) &&
          Array.from(indexB)
            .map((s) => array[Number(s)] || 0)
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
        if (
          [calc(i - 1, 0), calc(i, 0), calc(i + 1, 0)].some(
            (x) => Math.abs(x) === Infinity,
          )
        ) {
          continue;
        }
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

  const sourceStyled: JSX.Element[] = [];

  let buffer = '';
  let kind: 'str' | 'num' | 'punct' | 'func' | null = null;
  const funcList = ['sin', 'cos', 'tan', 'log', 'sqrt'];

  function flushIfOtherThan(newKind: typeof kind) {
    if (kind === newKind) {
      return;
    }
    const currentKind =
      kind === 'str' && funcList.includes(buffer) ? 'func' : kind;
    kind = newKind;
    if (!buffer || !currentKind) {
      return;
    }
    switch (currentKind) {
      case 'str': {
        sourceStyled.push(
          <span style={{ fontStyle: 'italic' }}>{buffer}</span>,
        );
        break;
      }
      case 'num':
      case 'func': {
        sourceStyled.push(<span>{buffer}</span>);
        break;
      }
      case 'punct': {
        if (buffer == '**') {
          buffer = '^';
        }
        if (buffer == '*') {
          buffer = '⋅';
        }
        sourceStyled.push(<span>{buffer}</span>);
        break;
      }
    }
    buffer = '';
  }

  for (const c of source) {
    if ('0' <= c && c <= '9') {
      flushIfOtherThan('num');
      buffer += c;
    } else if (['+', '-', '*', '/', '%', '^', '(', ')'].includes(c)) {
      flushIfOtherThan('punct');
      buffer += c;
    } else {
      flushIfOtherThan('str');
      buffer += c;
    }
  }

  flushIfOtherThan(null);

  return (
    <div style={{ textAlign: 'center', fontSize: '1.5rem' }}>
      <p style={{ fontFamily: 'Times New Roman' }}>
        f(<span style={{ fontStyle: 'italic' }}>x</span>,{' '}
        <span style={{ fontStyle: 'italic' }}>y</span>) = {sourceStyled}
      </p>
      <div>
        <canvas width={400} height={400} ref={canvas} />
      </div>
      <input
        onBlur={(e) => setSource(e.currentTarget.value)}
        style={{
          fontSize: '5vmin',
          margin: '3vmin',
          padding: '1rem',
          fontFamily: 'Iosevka NF',
        }}
      />
    </div>
  );
}
