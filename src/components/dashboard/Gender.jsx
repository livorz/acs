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
          backgroundColor: ['#ADF7B6',
                            '#A0CED9',
                            '#FCF5C7',
                            '#FFEE93',
                            '#FFC09F'],
          borderColor: 'transparent',
          pointBordercolor: 'transparent',
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
                callback: (genderMapped2) => genderMapped2
              },
            }
          }
        };
        return(
            <div className = "Gender-Chart">
                <Doughnut data={data} options={options}/>  
            </div>
        );
  }

  export default Gender;