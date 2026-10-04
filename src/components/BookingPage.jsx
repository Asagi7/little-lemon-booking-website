import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';
import { fetchAPI, submitAPI } from '../api';

/**
 * Generates the initial list of available reservation times (today).
 * (Called once through useReducer on mount.)
 */
export function initializeTimes() {
  return fetchAPI(new Date());
}

/**
 * Regenerates the available times for the newly selected date.
 */
export function updateTimes(times, date) {
  return fetchAPI(new Date(date));
}

/**
 * Booking route: owns the available-times state and the submit flow.
 * A successful submission navigates to the confirmation page.
 */
export default function BookingPage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, undefined, initializeTimes);
  const navigate = useNavigate();

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate('/confirmed');
    }
  };

  return (
    <BookingForm
      availableTimes={availableTimes}
      dispatch={dispatch}
      submitForm={submitForm}
    />
  );
}
