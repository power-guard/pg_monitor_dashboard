import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';
import { EnergySeries } from 'types/api';
import { getChartLineColors } from 'utils/chartUtils';

interface OwnProps {
  data: EnergySeries[];
}

//TODO: memoize chart to prevent from re-rendering
export const EnergySeriesChart = ({ data }: OwnProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const context = canvasRef?.current?.getContext('2d');

    //Doesn't render chart when no series data or canvas.
    if (!context || data.length < 1) return;

    const labels = Object.entries(data[0]).map(([key]) => key);

    const datasets = data.map((series, index) => {
      return {
        data: Object.entries(series).map(([_, value]) => value),
        borderColor: getChartLineColors(index),
        pointBackgroundColor: getChartLineColors(index),
        fill: false,
        borderWidth: 1.5,
        pointHitRadius: 4,
        pointBorderWidth: 0.1,
        pointRadius: 1.5,
        pointHoverRadius: 1.5,
      };
    });

    const options = {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              maxTicksLimit: 6, //To avoid having the y axis to crowded with labels.
            },
            afterFit: function (scaleInstance: any) {
              scaleInstance.width = 60;
            },
          },
        ],
        xAxes: [
          {
            display: false, //Not displaying x labels to save vertical space.
          },
        ],
      },
      legend: {
        display: false,
      },
      animation: {
        duration: 0, //To improve performance
      },
      hover: {
        animationDuration: 0, //To improve performance
      },
      responsiveAnimationDuration: 0, //To improve performance
    };

    new Chart(context, { type: 'line', data: { labels, datasets }, options });
  }, [data]);

  return <canvas ref={canvasRef}></canvas>;
};
