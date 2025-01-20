import React,{ useState} from "react";
import useFetchCountries from "../../../hooks/useFetchCountries.ts";
import "./styles.css";

type ContinentProps = {
  continent: string;
};


const Continent = ({ continent }: ContinentProps) => {
  const { countries, isLoading, error } = useFetchCountries();
    const [isOpen, setIsOpen] = useState(false);
  
    // Función para alternar la visibilidad de la lista
    const toggleCountries = () => {
      setIsOpen(prevState => !prevState);
    };
  
  

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const filteredCountries = countries.filter(
    (country) => country.region === continent
  );

  return (
    <article>
      <div className="continentList">
        <h2>{continent}</h2>
        <button onClick={toggleCountries} aria-label="Expandir o colapsar la lista de países">
          {isOpen ? '🔼' : '🔽'} {/* Cambia el ícono según el estado */}
        </button>
      </div>
      {isOpen && ( // Solo muestra la lista si isOpen es true
        <ul>
          {filteredCountries.length > 0 ? (
            filteredCountries.map((country, index) => (
              <li key={country.id} className={index % 2 === 0 ? "dark" : "light"}>
                <span>Name:</span> {country.name.common} - 
                <span> Capital:</span> {country.capital} - 
                <span> Population:</span> {country.population}
              </li>
            ))
          ) : (
            <li>No hay países disponibles en este continente.</li>
          )}
        </ul>
      )}
    </article>
  );
};

export default Continent;
