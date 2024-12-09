import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

  import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
 
import { Bar } from 'react-chartjs-2';

 // Registrar los componentes de Chart.js
 ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function ChartFilter() {
  const navigate = useNavigate();
  // Datos estáticos para filtrar
  const allData = {
    January: [12, 19, 3, 5, 2],
    February: [8, 11, 6, 9, 4],
    March: [15, 7, 12, 10, 8],
  };

  // Estado para el filtro actual
  const [filter, setFilter] = useState('January');

  // Datos dinámicos según el filtro seleccionado
  const data = {
    labels: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'],
    datasets: [
      {
        label: `${filter} Sales`,
        data: allData[filter],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Opciones de configuración del gráfico
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Habilita el ajuste a cualquier contenedor
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

<main className="w-full h-full flex flex-col">
    <label htmlFor="monthFilter" className="mr-2 mb-2">
        Select Month:
    </label>
    <select
        id="monthFilter"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="border border-gray-300 p-2 rounded-md mb-4">
        {Object.keys(allData).map((month) => (
            <option key={month} value={month}>
                {month}
            </option>
        ))}
    </select>
    
    <div className="w-full min-h-[400px] flex-grow"> {/* Altura mínima de 400px y flex-grow para ajustarse al espacio disponible */}
        <Bar data={data} options={options} />
    </div>
    <button 
            onClick={() => navigate('/ChartLayout')}>
            ve al siguiente ejemplo
          </button>
</main>


  );
}
export default ChartFilter