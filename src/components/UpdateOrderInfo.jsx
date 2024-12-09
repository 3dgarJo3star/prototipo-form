import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function UpdateOrderInfo(){
    const [orden,setOrden] = useState('');
    const [estilo,setEstilo] = useState('');
    const [descripcion,setDescripcion] = useState('');
    const [st,setSt] = useState('');
    const [fecha,setFecha] = useState('');
    const [showModal,setShowModal] = useState(false);
    const navigate = useNavigate();

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put('http://localhost:3001/api/UpdateOrderInfo', {
                Estilo :estilo,
                Descripcion: descripcion,
                St: st,
                Fecha:fecha,
                Orden: orden,
            });
            setOrden('')
            setEstilo('')
            setDescripcion('')
            setSt('')
            setFecha('')
            setShowModal(true); // Show success modal here if you want to
            console.log(response);
        }catch (e) {
            console.log(e);
        }
    }

    return(
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
          value={orden}
          onChange={(e) => setOrden(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      <input
          type="text"
          placeholder="Estilo"
          value={estilo}
          onChange={(e) => setEstilo(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      <input
          type="text"
          placeholder="Descripcion"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      <input
          type="text"
          placeholder="St"
          value={st}
          onChange={(e) => setSt(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      <input
          type="date"
          placeholder="Fecha"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200">
          Actualizar Informacion de la orden 
      </button>
  </form>
        </>
    )
}