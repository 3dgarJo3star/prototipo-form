import { useNavigate } from "react-router-dom";
export default function Home(){
    const navigate = useNavigate();
    const planta = 'Garcia'

    const handleNavigate1 = () => {
        navigate("InsertOrderPage");
    }
    const handleNavigate2 = () => {
        navigate("ShowOrderInfo");
    }
    const handleNavigate3 = () => {
        navigate("UpdateMenu");
    }
    return(
        <main className="flex flex-col gap-16">
            <h1 className="text-center">Bienvenido al Control de Calidad y Defectos de {planta}</h1>
            <section className="flex flex-row gap-10">
                <button onClick={handleNavigate1} className="bg-sky-200 w-full h-24 hover:bg-blue-800 hover:text-white">Añadir Info</button>
                <button onClick={handleNavigate2} className="bg-sky-200 w-full h-24 hover:bg-blue-800 hover:text-white">Mostrar Info</button>
                <button onClick={handleNavigate3} className="bg-sky-200 w-full h-24 hover:bg-blue-800 hover:text-white">Actualizar Info</button>
            </section>
        </main>
    )
}