
  import "../dashboard/DashboardStyle.css";
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
 

  const LivesWith = ({living}) => {

    const livingMapped = living?.map( hue => hue.descripcion );
    console.log( livingMapped );

    const livingMapped2 = living?.map( hue => hue.cantidad );
    console.log( livingMapped2 );


    const data = {
        labels: livingMapped,
        datasets: [{
          data: livingMapped2,
          fill: true,
          backgroundColor: ['rgb(64, 96, 255, 0.6)',
          '#9d60ef',
          '#cd65de',
          '#ec73ce',
          '#ff87c3',],
          borderColor: ['#4060ff',
          '#9d60ef',
          '#cd65de',
          '#ec73ce',
          '#ff87c3',],
          pointBordercolor: ['#4060ff',
          '#9d60ef',
          '#cd65de',
          '#ec73ce',
          '#ff87c3',],
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
              max: 40,
              ticks:{
                setSize: 2,
                callback: (livingMapped2) => livingMapped2,
              },
            }
          }
        };
        return(
            <div className = "LivesWith-Chart">
                <Bar data={data} options={options}/>  
            </div>
        );
  }

  export default LivesWith;