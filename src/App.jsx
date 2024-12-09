import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ShowOrderInfo from "./pages/ShowOrderInfo";
import InsertOrderPage from "./pages/InsertOrderPage";
import InsertProductionPage from "./pages/InsertProductionPage";
import InsertIrregularInfoPage from "./pages/InsertIrregularInfoPage";
import Home from "./pages/Home";
import UpdateMenu from "./components/UpdateMenuPage";
import UpdateOrderInfo from "./components/UpdateOrderInfo";
import ChartTest from "./charts/ChartTest";
import ChartFilter from "./charts/ChartFilter";
import ChartLayout from "./charts/ChartLayout"

function App() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <Router>
        {/* Rutas de acceso */}
        <div className="w-screen max-w-screen mx-auto px-6">
          
          {/* Header */}
          <header className="text-center mb-10">
            <h1 className="text-4xl font-bold text-blue-600">Prototipo</h1>
          </header>

          {/* Navigation */}
          <nav className="bg-blue-600 text-white py-4 rounded-lg shadow-md mb-8 mx-auto max-w-screen-lg">
            <ul className="flex justify-around">
              <li><Link to="/" className="text-white hover:text-gray-300 transition duration-300">Home</Link></li>
              <li><Link to="/ShowOrderInfo" className="text-white hover:text-gray-300 transition duration-300">Mostrar Tablas</Link></li>
              <li><Link to="/InsertOrderPage" className="text-white hover:text-gray-300 transition duration-300">Insertar Orden</Link></li>
              <li><Link to="/Chart" className="text-white hover:text-gray-300 transition duration-300">ver grafica</Link></li>
            </ul>
          </nav>

          {/* Conexiones a todas las rutas */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6 mx-auto max-w-screen-lg">
            <Routes>
              <Route path="/" element={<Home/> } />
              <Route path="/ShowOrderInfo" element={<ShowOrderInfo />} />
              <Route path="/InsertOrderPage" element={<InsertOrderPage />} />
              <Route path="/InsertProductionPage" element={<InsertProductionPage />} />
              <Route path="/InsertIrregularInfoPage" element={<InsertIrregularInfoPage />} />
              <Route path="/UpdateMenu" element={<UpdateMenu/>} />
              <Route path="/UpdateOrderInfo" element={<UpdateOrderInfo/>} />
              <Route path="/Chart" element={<ChartTest/>} />
              <Route path="/ChartFilter" element={<ChartFilter/>} />
              <Route path="/ChartLayout" element={<ChartLayout/>} />
            </Routes>
          </div>
        </div>
      </Router>
    </main>
  );
}

export default App;
