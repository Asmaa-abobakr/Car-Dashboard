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
  aspectRatio: 2,
  plugins: {
    legend:{
        display: false
    },
    title: {
      display: false,
    },
  },
  scales: {
    y:{
        min: 100,
        max: 170,
        display: false,    
        border:{
            display: false
        },
        grid: {
            display: false,
        },
    }
  }
};

const labels = ['1 PM', '2 PM', '3 PM', '4 Pm', '5 PM', '6 PM', '7 PM'];

export const data = {
  labels,
  datasets: [
    {
      data: [149,140,157,132,149,125,138],
      backgroundColor: '#F4F5F9',
      hoverBackgroundColor: '#2884FF',
      barThickness: 25,
      
    }
  ],
};

export const BarChart = ()=> {
    return( 
      <div className='bar-chart-container'>
        <p className='sun-title mb-2'><span>Miles</span> Statistics</p>
        <div className='d-flex justify-content-between mb-3'>
            <div>
              <button className='chart-btn active-btn me-2'>Day</button>
              <button className='chart-btn me-2'>Week</button>
              <button className='chart-btn'>Month</button>
            </div>
            <p className='mb-0 gray-text'>256 Miles</p>
        </div>
        <Bar options={options} data={data}/>
      </div>
    );
}
