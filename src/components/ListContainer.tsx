import { useState, useEffect } from "react";

import { getBreweriesByState } from "../breweryDbClient";

import BreweriesList from "./BreweriesList";

const parseData = allBreweries =>
  allBreweries.filter(brewery =>
    ["micro", "regional", "brewpub"].includes(brewery["brewery_type"])
  );

const extractCities = allBreweries =>
  allBreweries.reduce(
    (acc, brewery) =>
      acc.includes(brewery.city) ? acc : [...acc, brewery.city],
    []
  );

export default function ListContainer({
  stateInput,
  setCities,
  filters: { selectedCities, selectedType },
}) {
  const [breweries, setBreweries] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const applyFilters = allBreweries => allBreweries.filter(isSelected);

  const isSelected = ({ city, brewery_type, name }) => {
    const lowerCasedInput = searchInput.toLowerCase();
    return (
      (selectedType ? selectedType === brewery_type : true) &&
      (selectedCities.length ? selectedCities.includes(city) : true) &&
      (searchInput
        ? city.toLowerCase().includes(lowerCasedInput) ||
          name.toLowerCase().includes(lowerCasedInput)
        : true)
    );
  };

  useEffect(() => {
    stateInput &&
      getBreweriesByState(stateInput).then(data => {
        const breweries = parseData(data);
        setBreweries(breweries);
        setCities(extractCities(breweries));
      });
  }, [stateInput]);

  return (
    <>
      <h1>List of Breweries from {breweries[0]?.state || "nowhere"}</h1>
      <header className="search-bar">
        <form id="search-breweries-form" autoComplete="off">
          <label htmlFor="search-breweries">
            <h2>Search breweries:</h2>
          </label>
          <input
            id="search-breweries"
            name="search-breweries"
            value={searchInput}
            onInput={({ target }) => setSearchInput(target.value)}
            type="text"
          />
        </form>
      </header>
      <BreweriesList breweries={applyFilters(breweries)} />
    </>
  );
}
