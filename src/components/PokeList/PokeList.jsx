import useFetchData from "../../hooks/useFetch";

const PokeList = () => {
	const { data, error, loading } = useFetchData(
		"https://pokeapi.co/api/v2/pokemon/"
	);

	if (loading) {
		return <p>Cargando...</p>;
	}

	if (error) {
		return <p>Error: {error.message}</p>;
	}

	// console.log(data.results);

	return (
		<div className="contenedor">
			<h1>Pokemon List</h1>
			<div className="lista-pokemon">
				{/* Wrap the list items in a div with class 'lista-pokemon' */}
				{data.results.map((item) => (
					<div key={item.name} className="pokemon-item">
						{" "}
						{/* Individual block for each Pokemon */}
						<p>Name: {item.name}</p>
						<p>Url: {item.url}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default PokeList;
