import React from 'react';
import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

//style for charts
import "../dashboard/ChartsStyles.css"

ChartJS.register(
    RadialLinearScale, 
    ArcElement, 
    Tooltip, 
    Legend
);


  function WorkReason () {
    const data = {
        labels: ["May 12", "May 13", "May 14", "May 15"],
        datasets: [{
          data: [5,3,4,1],
          backgroundColor: ['#ADF7B6',
                            '#A0CED9',
                            '#FCF5C7',
                            '#FFEE93',
                            '#FFC09F'],
          borderColor: 'transparent',
          pointBordercolor: 'transparent',
          pointBorderWith: 1,
          tension: 0.5,
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
            <div className = "Income-Chart">
                <PolarArea data={data} options={options}/>  
            </div>
        );
  }

  export default WorkReason;