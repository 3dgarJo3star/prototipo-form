import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom';
  
  // Register chart components
  ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
  const ChartTest = () => {
    const navigate = useNavigate()
    // Define data
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [
        {
          label: 'Sales',
          data: [12, 19, 3, 5, 2],
          backgroundColor: 'rgba(75, 192, 192, 0.5)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };
  
    // Define options
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        tooltip: {
          enabled: true,
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          beginAtZero: true,
        },
      },
    };
  
    return (
      <div className="w-full h-full flex flex-col">
          <Bar data={data} options={options} />
          <button 
            onClick={() => navigate('/ChartFilter')}>
            ve al siguiente ejemplo
          </button>
      </div>
    );
  };
  
export default ChartTest;
