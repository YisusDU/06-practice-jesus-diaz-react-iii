import axios from "axios";
import { useEffect, useState } from "react";

type Countries = {
  id: number;
  name: {
    common: string;
    official: string;
  };
  capital: string;
  population: number;
  flags: {
    png: string;
  };
  region: string;
};

type fetchCountriesState = {
  countries: Countries[];
  error: string | null;
  isLoading: boolean;
};

const useFetchCountries = () => {
  const [countriesState, setCountriesState] = useState<fetchCountriesState>({
    countries: [],
    error: null,
    isLoading: true,
  });
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const countriesData = response.data.map(
          (country: any, index: number) => ({
            id: index,
            name: country.name,
            capital: country.capital ? country.capital[0] : "N/A",
            population: country.population,
            flags: country.flags,
            region: country.region,
          })
        );
        setCountriesState({
          countries: countriesData,
          error: null,
          isLoading: false,
        });
      } catch (error) {
        setCountriesState({
          countries: [],
          error: error.message,
          isLoading: false,
        });
      }
    };
    fetchCountries();
  }, []);
  return countriesState;
};
export default useFetchCountries;
