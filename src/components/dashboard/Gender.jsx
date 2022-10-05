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


  const Gender = ({gender}) => {


    const genderMapped = gender?.map(s => s.descripcion)
    console.log(genderMapped);

    const genderMapped2 = gender?.map(s => s.cantidad)
    console.log(genderMapped2);




    const data = {
        labels: genderMapped,
        datasets: [{
          data: genderMapped2,
          circumference: 60 * Math.PI,
          rotation: 84.6 * Math.PI,
          backgroundColor: ['rgba(54, 162, 235, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',],
          borderColor: 'transparent',
          pointBordercolor: 'transparent',
          pointBorderWith: 0,
          tension: 0,
        }]
      };
        const options = {
          plugins: {
            legend: {
              position: 'right',
            },
          },
          responsive: true,
          maintainAspectRatio: false,

        };
        return(
            <div className = "Gender-Chart">
                <Doughnut data={data} options={options}/>  
            </div>
        );
  }

  export default Gender;