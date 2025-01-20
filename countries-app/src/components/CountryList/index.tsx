import React from "react";
import useFilteredCountries from "../../hooks/useFilteredCountries.ts";
import Header from "../Header/index.tsx";
import "./styles.css";

const CountryList = () => {
  const {
    filteredCountries,
    isLoading,
    error,
    searchTerm,
    handleSearchChange,
    handleSearchSubmit,
  } = useFilteredCountries();

  const renderCountries = () => {
    return (
      <section className="pillowCards">
        {filteredCountries.map((country) => {
          const { id, name, capital, population, flags } = country;
          return (
            <div className="card" key={id}>
              <img loading="lazy" src={flags.png} alt={name.common} />
              <h2>{name.common}</h2>
              <p>Capital: {capital}</p>
              <p>Population: {population}</p>
            </div>
          );
        })}
      </section>
    );
  };

  const renderContent = () => {
    if (isLoading)
      return (
        <div className="loading">
          <p >Loading...................... 🥱</p>
        </div>
      );
    if (error)
      return (
        <div className="error">
          <p >There was an error loading the countries. 😖</p>
        </div>
      );

    return renderCountries();
  };

  return (
    <>
      <Header />
      <main>
        <form>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search for a country..."
          />
          <button onClick={handleSearchSubmit}>Clear</button>
        </form>
        {renderContent()}
      </main>
    </>
  );
};

export default CountryList;
