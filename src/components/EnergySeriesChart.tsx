import Chart from 'chart.js';
import React, { useEffect, useRef } from 'react';
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
    if (!context) return;

    const labels = data.length > 0 ? Object.entries(data[0]).map(([key]) => key) : [];

    const datasets = data.map((series, index) => {
      return {
        data: Object.entries(series).map(([_, value]) => value),
        borderColor: getChartLineColors(index),
        pointBackgroundColor: getChartLineColors(index),
        fill: false,
        borderWidth: 1.5,
        pointHitRadius: 0,
      };
    });

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      tooltips: { enabled: false },
      elements: {
        point: {
          radius: 0,
        },
      },
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
        xAxes: [{ display: false }], //Not displaying x labels to save vertical space.
      },
      legend: { display: false },
      animation: { duration: 0 }, //To improve performance
      responsiveAnimationDuration: 0, //To improve performance
    };

    new Chart(context, { type: 'line', data: { labels, datasets }, options });
  }, [data]);

  return <canvas ref={canvasRef}></canvas>;
};
