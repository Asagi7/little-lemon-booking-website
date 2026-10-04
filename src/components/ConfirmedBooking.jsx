/**
 * Confirmation screen shown after a successful reservation.
 */
export default function ConfirmedBooking() {
  return (
    <section className="confirmation" aria-labelledby="confirmation-heading">
      <h1 id="confirmation-heading">Booking confirmed!</h1>
      <p>Thank you! Your table at Little Lemon has been reserved.</p>
      <p>We look forward to seeing you.</p>
    </section>
  );
}
