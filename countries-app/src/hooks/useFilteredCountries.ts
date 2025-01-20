import { useState, useEffect } from "react";
import useFetchCountries from "./useFetchCountries.ts";

const useFilteredCountries = () => {
  const { countries, isLoading, error } = useFetchCountries();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCountries, setFilteredCountries] = useState(countries);

  useEffect(() => {
    setFilteredCountries(
      countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, countries]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    setSearchTerm("");
  };

  return {
    filteredCountries,
    isLoading,
    error,
    searchTerm,
    handleSearchChange,
    handleSearchSubmit,
  };
};

export default useFilteredCountries;