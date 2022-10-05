import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

//style for charts
import "../dashboard/ChartsStyles.css"

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);


  const RelatedWork = ({related}) => {

   


    const data = {
        labels: ["Si", "No"],
        datasets: [{
          data: [20, 10],
          backgroundColor: ['rgb(64, 96, 255, 0.6)',
          'rgb(157, 96, 239, 0.6)',
          'rgb(205, 101, 222, 0.6)',
          'rgb(236, 115, 206, 0.6)',
          'rgb(255, 135, 195, 0.6)',],
          borderColor: ['rgb(64, 96, 255, 0.6)',
          'rgb(157, 96, 239, 0.6)',
          'rgb(205, 101, 222, 0.6)',
          'rgb(236, 115, 206, 0.6)',
          'rgb(255, 135, 195, 0.6)',],
          pointBordercolor: ['rgb(64, 96, 255, 0.6)',
          'rgb(157, 96, 239, 0.6)',
          'rgb(205, 101, 222, 0.6)',
          'rgb(236, 115, 206, 0.6)',
          'rgb(255, 135, 195, 0.6)',],
          pointBorderWith: 1,
          tension: 1,
          pointBorderWith: 1,
          tension: 0,
        }]
      };
        const options = {
          plugins: {
            legend: false,
          },
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x:{
              grid:{
                display: false,
              }
            },
            y:{
              min: 0,
              max: 40,
              ticks:{
                setSize: 2,
                callback: (value) => value
              },
            }
          }
        };
        return(
            <div className = "RelatedWork-Chart">
                <Radar data={data} options={options}/>  
            </div>
        );
  }

  export default RelatedWork;