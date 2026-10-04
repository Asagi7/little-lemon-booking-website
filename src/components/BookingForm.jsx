import { useState } from 'react';

const today = new Date().toISOString().split('T')[0];

const occasions = ['Birthday', 'Anniversary', 'Business meal', 'Date night'];

/**
 * Validated table-booking form.
 * Validation covers every required field, past dates and the 1-10 guests
 * range; errors are announced through an aria-live region.
 */
export default function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const nextErrors = {};
    if (!date) nextErrors.date = 'Please choose a reservation date.';
    else if (date < today) nextErrors.date = 'The reservation date cannot be in the past.';
    if (!time) nextErrors.time = 'Please choose a time.';
    if (!guests) nextErrors.guests = 'Please enter the number of guests.';
    else if (Number(guests) < 1 || Number(guests) > 10)
      nextErrors.guests = 'The number of guests must be between 1 and 10.';
    if (!occasion) nextErrors.occasion = 'Please choose an occasion.';
    return nextErrors;
  };

  const handleDateChange = (event) => {
    const newDate = event.target.value;
    setDate(newDate);
    // Ask the parent to refresh the available times for the new date.
    dispatch(newDate);
    // The previously selected time may not exist on the new date.
    setTime('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      submitForm({ date, time, guests: Number(guests), occasion });
    }
  };

  return (
    <section className="booking-page" aria-labelledby="booking-heading">
      <h1 id="booking-heading">Reserve a Table</h1>

      {Object.keys(errors).length > 0 && (
        <div className="form-errors" role="alert" aria-live="assertive">
          Please fix the following {Object.keys(errors).length} error(s):
          <ul>
            {Object.values(errors).map((message) => (
              <li key={message}>{message}</li>
            ))}
          </ul>
        </div>
      )}

      <form className="booking-form" onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="res-date">Date</label>
          <input
            type="date"
            id="res-date"
            value={date}
            min={today}
            onChange={handleDateChange}
            aria-required="true"
            aria-invalid={Boolean(errors.date)}
            aria-describedby={errors.date ? 'res-date-error' : undefined}
          />
          {errors.date && <p className="field-error" id="res-date-error">{errors.date}</p>}
        </div>

        <div>
          <label htmlFor="res-time">Time</label>
          <select
            id="res-time"
            value={time}
            onChange={(event) => setTime(event.target.value)}
            aria-required="true"
            aria-invalid={Boolean(errors.time)}
            aria-describedby={errors.time ? 'res-time-error' : undefined}
          >
            <option value="">Select a time</option>
            {availableTimes.map((slot) => (
              <option key={slot} value={slot}>{slot}</option>
            ))}
          </select>
          {errors.time && <p className="field-error" id="res-time-error">{errors.time}</p>}
        </div>

        <div>
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            id="guests"
            min="1"
            max="10"
            value={guests}
            onChange={(event) => setGuests(event.target.value)}
            aria-required="true"
            aria-invalid={Boolean(errors.guests)}
            aria-describedby={errors.guests ? 'guests-error' : undefined}
          />
          {errors.guests && <p className="field-error" id="guests-error">{errors.guests}</p>}
        </div>

        <div>
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            value={occasion}
            onChange={(event) => setOccasion(event.target.value)}
            aria-required="true"
            aria-invalid={Boolean(errors.occasion)}
            aria-describedby={errors.occasion ? 'occasion-error' : undefined}
          >
            <option value="">Select an occasion</option>
            {occasions.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
          {errors.occasion && <p className="field-error" id="occasion-error">{errors.occasion}</p>}
        </div>

        <button type="submit" className="submit-button">Make Your Reservation</button>
      </form>
    </section>
  );
}
