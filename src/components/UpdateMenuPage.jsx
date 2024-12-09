import Header from "./Header"
import { useNavigate } from "react-router-dom"

export default function UpdateMenu(){

    const navigate = useNavigate()
    const handleNavigate1 = () => {
        navigate('/UpdateOrderInfo')
    }
    const handleNavigate2 = () => {
        navigate('/InsertProductionPage')
    }
    const handleNavigate3 = () => {
        navigate('/InsertIrregularInfoPage')
    }
    return (
        <>
            <Header/>
            <main className="flex flex-col gap-16">
            <h1 className="text-center">Seleccione la informacion a actualizar</h1>
            <section className="flex flex-row gap-10">
                <button onClick={handleNavigate1} className="bg-sky-200 w-full h-24 hover:bg-blue-800 hover:text-white">Actualizar <b>Informacion</b> de la Orden</button>
                <button onClick={handleNavigate2} className="bg-sky-200 w-full h-24 hover:bg-blue-800 hover:text-white">Actualizar <b>Produccion</b> de la Orden</button>
                <button onClick={handleNavigate3} className="bg-sky-200 w-full h-24 hover:bg-blue-800 hover:text-white">Actualizar <b>Irregulares</b> de la Orden</button>
            </section>
        </main>
        </>
        
    )
}