import ShowTable from "../components/showTable";
import Header from "../components/Header";
export default function ShowOrderInfo(){
    return (
        <main>
            <Header/>
            <ShowTable ENDPOINT='http://localhost:3001/api/data'>
                Tabla de Ordenes 
            </ShowTable> 
            
            <ShowTable ENDPOINT='http://localhost:3001/api/data2'>
                Tabla de Productions 
            </ShowTable>
            
            <ShowTable ENDPOINT='http://localhost:3001/api/data3'>
                Tabla de Irregulares
            </ShowTable>
        </main>
    )
}