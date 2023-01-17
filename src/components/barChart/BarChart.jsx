import './barChart.scss';
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


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  aspectRatio: 0.91,
  plugins: {
    legend:{
        display: false
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
        grid: {
            display: false,
        },
    },
    y:{
        max: 30,
        min: 0,    
        ticks:{
          stepSize:5,
        },
        border:{
            display: false
        }
    }
  }
};

const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const data = {
  labels,
  datasets: [
    {
      data: [10,7,16,23,17,13,19],
      backgroundColor: [
        'rgba(255, 126, 134, 0.2)',
        'rgba(255, 126, 134, 0.2)',
        'rgba(255, 126, 134, 0.2)',
        'rgba(255, 126, 134, 0.2)',
        'rgba(255, 126, 134, 0.2)',
        'rgba(255, 126, 134, 0.2)',
        'rgba(255, 126, 134, 0.2)',
      ],
      hoverBackgroundColor: '#FF6370',
      barThickness:15,
      barBorderRadius: 25,
      color: '#808191',
      borderDash: [8,4],
      borderDashOffset: 10.0,
    }
  ],
};

export const BarChart = ()=> {
    return( 
      <div className='bar-chart-container'>
        <p className='sun-title'>Tracking History</p>
        <Bar options={options} data={data}/>
      </div>
    );
}
