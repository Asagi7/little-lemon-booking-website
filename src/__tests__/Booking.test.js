import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import BookingForm from '../components/BookingForm';
import { initializeTimes, updateTimes } from '../components/BookingPage';
import { fetchAPI } from '../api';

const renderBookingForm = () => {
  const noop = () => {};
  return render(
    <BookingForm availableTimes={['17:00', '18:30']} dispatch={noop} submitForm={noop} />
  );
};

test('renders the booking form with all field labels', () => {
  renderBookingForm();
  expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
});

test('initializeTimes returns a non-empty array of available times', () => {
  const times = initializeTimes();
  expect(Array.isArray(times)).toBe(true);
  expect(times.length).toBeGreaterThan(0);
});

test('updateTimes returns available times for the chosen date', () => {
  const times = updateTimes([], new Date());
  expect(Array.isArray(times)).toBe(true);
  expect(times).toEqual(fetchAPI(new Date()));
});

test('submitting an empty form shows validation errors', async () => {
  const user = userEvent.setup();
  renderBookingForm();
  await user.click(screen.getByRole('button', { name: /make your reservation/i }));
  expect(screen.getByText(/please choose a reservation date/i)).toBeInTheDocument();
  expect(screen.getByText(/please choose a time/i)).toBeInTheDocument();
  expect(screen.getByText(/please enter the number of guests/i)).toBeInTheDocument();
  expect(screen.getByText(/please choose an occasion/i)).toBeInTheDocument();
});

test('rejects a guest count outside the 1-10 range', async () => {
  const user = userEvent.setup();
  renderBookingForm();
  await user.type(screen.getByLabelText(/number of guests/i), '25');
  await user.click(screen.getByRole('button', { name: /make your reservation/i }));
  expect(screen.getByText(/must be between 1 and 10/i)).toBeInTheDocument();
});

test('the app renders the header navigation links', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /reservations/i })).toBeInTheDocument();
});
