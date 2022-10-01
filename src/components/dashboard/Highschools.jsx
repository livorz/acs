import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

  function HighschoolsChart () {
    const data = {
        labels: ["May 12", "May 13", "May 14", "May 15"],
        datasets: [{
          data: [5,3,4,1],
          backgroundColor: 'cyan',
          borderColor: 'cyan',
          pointBordercolor: 'cyan',
          pointBorderWith: 4,
          tension: 0.5,
        }]
      };
        const options = {
          plugins: {
            legend: false,
          },
          scales: {
            x:{
              grid:{
                display: false,
              }
            },
            y:{
              min: 2,
              max: 10,
              ticks:{
                setSize: 2,
                callback: (value) => value + 'K'
              },
            }
          }
        };
        return(
            <div style = {{width: '60%', height: '1px', marginLeft:'0px'}}>
                <Line data={data} options={options}/>  
            </div>
        );
  }

  export default HighschoolsChart;