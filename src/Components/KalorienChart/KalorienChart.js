import {Line} from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import "./KalorienChart.css"
const KalorienChart = ({nahrungsliste, gesamtumsatz}) => {
  
  var chartData = [];
  var chartLabels = [];

  const setChartData = () =>{
    for(var x = 0; x<nahrungsliste.length;x++){
      chartLabels[x]= nahrungsliste[x].date;
      var calorie = 0;
      for(var y = 0; y<nahrungsliste[x].nahrung.length; y++){
        calorie= calorie+(nahrungsliste[x].nahrung[y].kalorien*nahrungsliste[x].nahrung[y].anzahl)
      }
      chartData[x]=calorie
    }
  }
  setChartData();
  return (
    <div className="kalorienchart">
        <Line 
        height={300}
        width={300}
        data={{
          labels:chartLabels,
          options:{
              legend: {
                  labels: {
                      // This more specific font property overrides the global property
                      fontColor: 'white'
                  }
          }
        },
          datasets: [{
            label: 'Nahrung in kcal',
            data: chartData,
            backgroundColor: [
              '#FFFFFF',
              '#FFFFFF',
              '#FFFFFF',
              '#FFFFFF',
              '#FFFFFF',
              '#FFFFFF',
              '#FFFFFF'
            ],
            borderColor: [
              '#FFFFFF',
              '#FFFFFF',
              '#FFFFFF',
              '#FFFFFF',
              '#FFFFFF',
              '#FFFFFF',
              '#FFFFFF'
            ],
            borderWidth: 1
          }],
        }}
        />
    </div>
  );
}
export default KalorienChart