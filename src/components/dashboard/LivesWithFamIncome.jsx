import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    PointElement,
    LineElement,
  } from 'chart.js';

  ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
  )

  function LivesWithFamIncome () {
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

  export default LivesWithFamIncome;