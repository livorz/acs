import React from 'react';
import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

//style for charts
import "../dashboard/ChartsStyles.css"

ChartJS.register(
    RadialLinearScale, 
    ArcElement, 
    Tooltip, 
    Legend
);


  const Civil = ({civil}) => {


    const civilMapped = civil?.map(s => s.descripcion)
    console.log(civilMapped);

    const civilMapped2 = civil?.map(s => s.cantidad)
    console.log(civilMapped2);




    const data = {
        labels: civilMapped,
        datasets: [{
          data: civilMapped2,
          circumference: 57 * Math.PI,
          rotation: 86 * Math.PI,
          backgroundColor: ['rgb(64, 96, 255, 1)',
          'rgb(157, 96, 239, 1)',
          'rgb(205, 101, 222, 1)',
          'rgb(236, 115, 206, 1)',
          'rgb(255, 135, 195, 1)',],
          borderColor: ['rgb(64, 96, 255, 1)',
          'rgb(157, 96, 239, 1)',
          'rgb(205, 101, 222, 1)',
          'rgb(236, 115, 206, 1)',
          'rgb(255, 135, 195, 1)',],
          pointBordercolor: ['rgb(64, 96, 255, 1)',
          'rgb(157, 96, 239, 1)',
          'rgb(205, 101, 222, 1)',
          'rgb(236, 115, 206, 1)',
          'rgb(255, 135, 195, 1)',],
          pointBorderWith: 0,
          tension: 0,
        }]
      };
        const options = {
          plugins: {
            legend: false,
          },
          responsive: true,
          maintainAspectRatio: false,

        };
        return(
            <div className = "Civil-Chart">
                <Doughnut data={data} options={options}/>  
            </div>
        );
  }

  export default Civil;