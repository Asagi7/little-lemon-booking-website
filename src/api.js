/**
 * Mock API for the Little Lemon booking system.
 * fetchAPI(date) deterministically returns the available reservation
 * times for a given date (seeded random based on the day of month).
 * submitAPI(formData) simulates persisting a reservation.
 */

const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

export const fetchAPI = function (date) {
  const result = [];
  const random = seededRandom(date.getDate());
  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ':00');
    }
    if (random() < 0.5) {
      result.push(i + ':30');
    }
  }
  return result;
};

export const submitAPI = function (formData) {
  console.log('Reservation submitted:', formData);
  return true;
};
