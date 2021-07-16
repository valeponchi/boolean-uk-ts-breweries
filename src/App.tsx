import { useState } from "react";
import Header from "./components/Header";
import BreweriesSearch from "./components/BreweriesSearch";
import BookingsContainer from "./components/BookingsContainer";

export default function App() {
  const [searchInput, setSearchInput] = useState("");
  const [showBookings, setShowBookings] = useState(false);

  return (
    <>
      <Header submitForm={setSearchInput} setShowBookings={setShowBookings} />
      {/* {!searchInput || (showBookings && <BookingsContainer />)} */}
      {searchInput && <BreweriesSearch searchInput={searchInput} />}
    </>
  );
}
