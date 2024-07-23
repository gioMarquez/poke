/*Ejemplo Axios */

import { useState, useEffect } from "react";
import axios from "axios"; // Importar Axios

const useFetchData = (url) => {
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(url); // Usar Axios para la consulta
				const jsonData = response.data; // Extraer datos de la respuesta
				setData(jsonData);
			} catch (err) {
				setError(err);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, [url]);

	return { data, error, loading };
};

export default useFetchData;






/* Ejemplo Fetch*/
// import  { useState, useEffect } from "react";

// const useFetchData = (url) => {
// 	const [data, setData] = useState([]);
// 	const [error, setError] = useState(null);
// 	const [loading, setLoading] = useState(true);

// 	useEffect(() => {
// 		const fetchData = async () => {
// 			try {
// 				const response = await fetch(url);
// 				const jsonData = await response.json();
// 				setData(jsonData);
// 			} catch (err) {
// 				setError(err);
// 			} finally {
// 				setLoading(false);
// 			}
// 		};
// 		fetchData();
// 	}, [url]); // Dependencia para ejecutar solo cuando la URL cambia

// 	return { data, error, loading };
// };

// export default useFetchData;
