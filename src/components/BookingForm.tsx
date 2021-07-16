export default function BookingForm({
  form: { firstName, lastName, date, peopleCount, time },
  updateForm,
  handleSubmit,
}) {
  return (
    <section className="booking-form">
      <h3>Book a tour:</h3>
      <form
        onSubmit={e => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <label>
          First Name
          <input
            onChange={updateForm}
            type="text"
            name="firstName"
            value={firstName}
          />
        </label>
        <label>
          Last Name
          <input
            onChange={updateForm}
            type="text"
            name="lastName"
            value={lastName}
          />
        </label>
        <label>
          Tour date
          <input onInput={updateForm} type="date" name="date" value={date} />
        </label>
        <label>
          Time
          <input
            onInput={updateForm}
            type="time"
            name="time"
            min="09:00"
            max="18:00"
            step="3600"
            value={time}
          />
        </label>
        <label>
          No. people
          <input
            onInput={updateForm}
            type="number"
            min="1"
            max="10"
            name="peopleCount"
            value={peopleCount}
          />
        </label>
        <input type="submit" value="Book Now!" />
      </form>
    </section>
  );
}
