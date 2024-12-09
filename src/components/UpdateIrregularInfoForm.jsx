import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UpdateIrregularInfoForm() {
  const [key, setKey] = useState(''); // El valor de la orden que quieres actualizar
  const [fallaTela,setFallaTela] = useState(''); 
  const [fallaProceso,setFallaProceso] = useState(''); 
  const [fallaTono,setFallaTono] = useState('');
  const [sumTelaTono,setSumTelaTono] = useState('');
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate(); // Importa la función useNavigate() de react-router-dom

  const handleUpdate = async (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    try {
      const response = await axios.put('http://localhost:3001/api/UpdateIrregularInfo', {
        key,
        FallaTela: fallaTela,
        FallaProceso: fallaProceso,
        FallaTono: fallaTono,
        SumTelaTono:sumTelaTono,
      });
      setShowModal(true)
      
      console.log('Respuesta del servidor:', response.data);
      // Aquí puedes manejar la respuesta como necesites, tal vez mostrar un mensaje de éxito

    } catch (error) { 
      console.error('Error al actualizar la producción:', error);
      // Maneja el error como necesites, tal vez mostrar un mensaje de error
    }
  };

  return (
    <>
    {showModal && (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-96 space-y-4">
          <h2 className="text-lg font-semibold text-gray-700">¡Información enviada!</h2>
          <p className="text-gray-600">Los datos han sido enviados con éxito.</p>
          <div className="flex justify-end space-x-4">
              <button
                  onClick={() => navigate('/')} // Redirige al Dashboard
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200">
                  Volver al inicio
              </button>
              <button
                  onClick={() => navigate('/ShowOrderInfo')} // Redirige a la página de inicio
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition duration-200">
                  Ver las tablas
              </button>
          </div>
      </div>
  </div>
    )}

      <form
      onSubmit={handleUpdate}
      className="bg-white p-6 border border-gray-300 rounded-md shadow-md space-y-4">
      <h2 className="text-lg font-semibold text-gray-600 mb-4">Actualizar Producción</h2>
      <input
          type="text"
          placeholder="Orden"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      <input
          type="number"
          placeholder="Fallas de Tela"
          value={fallaTela}
          onChange={(e) => setFallaTela(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      <input
          type="number"
          placeholder="Fallas de Proceso"
          value={fallaProceso}
          onChange={(e) => setFallaProceso(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      <input
          type="number"
          placeholder="Fallas de Tono"
          value={fallaTono}
          onChange={(e) => setFallaTono(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      <input
          type="number"
          placeholder="Suma de Tela y Tono"
          value={sumTelaTono}
          onChange={(e) => setSumTelaTono(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200">
          Actualizar Irregulares
      </button>
  </form>

    </>
  );
}

export default UpdateIrregularInfoForm;