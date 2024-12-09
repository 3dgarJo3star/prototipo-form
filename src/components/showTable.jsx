import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

export default function ShowTable({ children = 'table', ENDPOINT }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(ENDPOINT);
                setData(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [ENDPOINT]);

    // Detectar los nombres de las columnas basándonos en el primer elemento de `data`
    const columns = data.length > 0 ? Object.keys(data[0]) : [];

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-semibold text-blue-600 text-center my-4">{children}</h2>
            {data.length > 0 ? (
                <div className="overflow-x-auto shadow-lg rounded-lg">
                    <table className="min-w-full border border-gray-300 divide-y divide-gray-200">
                        <thead className="bg-blue-100">
                            <tr>
                                {columns.map((col, index) => (
                                    <th
                                        key={index}
                                        className="px-6 py-3 text-left text-sm font-semibold text-gray-700"
                                    >
                                        {col}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {data.map((item, rowIndex) => (
                                <tr
                                    key={rowIndex}
                                    className={rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                                >
                                    {columns.map((col, colIndex) => (
                                        <td
                                            key={colIndex}
                                            className="px-6 py-4 text-sm text-gray-700"
                                        >
                                            {item[col]}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-center text-gray-600">Cargando datos...</p>
            )}
        </div>
    );
}

ShowTable.propTypes = {
    children: PropTypes.string,
    ENDPOINT: PropTypes.string.isRequired,
};
