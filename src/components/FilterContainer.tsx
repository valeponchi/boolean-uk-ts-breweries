function Checkbox({ city, value, handleOnchange }) {
  return (
    <>
      <input
        id={city}
        type="checkbox"
        name="selectedCities"
        value={city}
        checked={value}
        onChange={handleOnchange}
      />
      <label htmlFor={city}>{city}</label>
    </>
  );
}

export default function FilterContainer({
  cities,
  filterSelections: { selectedCities, selectedType },
  updateFilter,
}) {
  return (
    <aside className="filters-section">
      <h2>Filter By:</h2>
      <form id="filter-by-type-form" autocompete="off">
        <label htmlFor="filter-by-type">
          <h3>Type of Brewery</h3>
        </label>
        <select
          name="selectedType"
          id="filter-by-type"
          onChange={updateFilter}
          value={selectedType}
        >
          <option value="">Select a type...</option>
          <option value="micro">Micro</option>
          <option value="regional">Regional</option>
          <option value="brewpub">Brewpub</option>
        </select>
      </form>
      <div className="filter-by-city-heading">
        <h3>Cities</h3>
        <button
          onClick={() =>
            updateFilter({ target: { name: "selectedCities", value: [] } })
          }
          className="clear-all-btn"
        >
          clear all
        </button>
      </div>
      <form id="filter-by-city-form">
        {cities.map(city => (
          <Checkbox
            city={city}
            value={selectedCities.includes(city)}
            handleOnchange={updateFilter}
          />
        ))}
      </form>
    </aside>
  );
}
