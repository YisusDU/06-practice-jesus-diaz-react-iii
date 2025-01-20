import React from "react";
import Continent from "./Continent/index.tsx";
import Header from "../Header/index.tsx";

const Continents = () => {
  return (
    <>
      <Header />
      <Continent continent="Africa" />
      <Continent continent="Asia" />
      <Continent continent="Europe" />
      <Continent continent="Americas" />
      <Continent continent="Oceania" />
    </>
  );
};

export default Continents;