import { useState } from "react";

export default function Header({ submitForm, setShowBookings }) {
  const [input, setInput] = useState("");

  return (
    <header className="main-header">
      <section className="select-state-section">
        <h2>Welcome to Brewery Tours</h2>
        <form
          onSubmit={e => {
            e.preventDefault();
            submitForm(input);
          }}
          id="select-state-form"
          autoComplete="off"
        >
          <label htmlFor="select-state">Which state are you visiting?</label>
          <input
            onChange={e => setInput(e.target.value)}
            value={input}
            id="select-state"
            name="select-state"
            type="text"
          />
        </form>
        {/* <button onClick={() => setShowBookings(curr => !curr)}>
          Show bookings
        </button> */}
      </section>
    </header>
  );
}
