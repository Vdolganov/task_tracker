import React, { useEffect, useRef } from 'react';

const canvasOffset = 100;

const canvasSize = {
  width: window.innerWidth - canvasOffset,
  height: window.innerHeight - canvasOffset,
};

const chartData = [
  {
    x: 200,
    y: 300,
  },
  {
    x: 500,
    y: 100,
  },
  {
    x: 100,
    y: 500,
  },
]


export const Chart = () => {
  const canvasRef = useRef(null);
  let context;

  const calculateSize = () => {

  };

  const drawGrid = () => {
    context.fillStyle = '#9ea7b8';
    context.fillRect(0, 0, canvasSize.width, canvasSize.height);
    context.fill();
  };

  const drawLine = (startX, startY, endX, endY) => {
    context.beginPath();
    context.moveTo(startX, startY);
    context.lineTo(endX, endY);
    context.strokeStyle = 'red';
    context.stroke();
  };

  const drawChart = () => {
    drawLine(0, canvasSize.height, 500, canvasSize.height - 20);
  };

  const initContext = () => {
    context = canvasRef.current.getContext('2d');
  };
  useEffect(() => {
    initContext();
    drawGrid();
    drawChart();
  });

  return (
    <div style={{ border: '1px solid gray' }}>
      <canvas
        ref={canvasRef}
        width={canvasSize.width}
        height={canvasSize.height}
        style={{ margin: '0 auto', display: 'block' }}
      />
    </div>
  );
};
