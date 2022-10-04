
  import "../dashboard/DashboardStyle.css";
  import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
    
  //style for charts
  import "../dashboard/ChartsStyles.css"

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );
 

  function LivesWith () {
    const data = {
        labels: ["May 12", "May 13", "May 14", "May 15"],
        datasets: [{
          data: [5,3,4,1],
          fill: true,
          backgroundColor: 'rgb(53, 162, 235)',
          borderColor: 'rgba(53, 162, 235, 1)',
          pointBordercolor: 'cyan',
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
            <div className = "LivesWith-Chart">
                <Line data={data} options={options}/>  
            </div>
        );
  }

  export default LivesWith;