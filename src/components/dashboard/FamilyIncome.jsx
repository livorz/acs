
  import "../dashboard/DashboardStyle.css";
  import { Bar } from 'react-chartjs-2';
  import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
    
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
 


  

    const FamilyIncome = ({income}) =>{

      const incomeMapped = income?.map(s => s.descripcion);
      console.log(incomeMapped);

      const incomeMapped2 = income?.map(s => s.cantidad);
      console.log(incomeMapped2);

    


    const data = {
        labels: incomeMapped,
        datasets: [{
          data: incomeMapped2,
          fill: true,
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
                callback: (incomeMapped2) => incomeMapped2
              },
            }
          }
        };
        return(
            <div className = "Family-Income-Chart">
                <Bar data={data} options={options}/>  
                
            </div>
        );
  }

  export default FamilyIncome;