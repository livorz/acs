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

//style for charts
import "../dashboard/ChartsStyles.css"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


  const HighschoolsChart = ({highschools}) => {


    const highschoolsMapped = highschools?.map(s => s.descripcion)
    console.log(highschoolsMapped);

    
    const highschoolsMapped2 = highschools?.map(s => s.cantidad)
    console.log(highschoolsMapped2);


    const data = {
        labels: highschoolsMapped,
        datasets: [{
          data: highschoolsMapped2,
          fill:true,
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
          pointBorderWith: 4,
          tension: 0.5,
          pointBorderWith: 4,
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
              min: 0,
              max: 15,
              ticks:{
                setSize: 2,
                callback: (highschoolsMapped2) => highschoolsMapped2
              },
            }
          }
        };
        return(
            <div className = "Highschools-Chart">
                <Bar data={data} options={options}/>  
            </div>
        );
  }

  export default HighschoolsChart;