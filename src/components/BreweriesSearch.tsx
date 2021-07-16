import { useState } from "react";

import ListContainer from "./ListContainer";
import FilterContainer from "./FilterContainer";

export default function BreweriesSearch({ searchInput }) {
  const [cities, setCities] = useState([]);
  const [filters, setFilters] = useState({
    selectedCities: [],
    selectedType: "",
  });

  const updateFilters = e => {
    let { name, value, checked, type } = e.target;

    if (type === "checkbox")
      value = checked
        ? [...filters.selectedCities, value]
        : filters.selectedCities.filter(c => c !== value);

    setFilters({ ...filters, [name]: value });
  };
  return (
    <main className="main-search">
      <ListContainer
        stateInput={searchInput}
        setCities={setCities}
        filters={filters}
      />
      <FilterContainer
        cities={cities}
        filterSelections={filters}
        updateFilter={updateFilters}
      />
    </main>
  );
}
