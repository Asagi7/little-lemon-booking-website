# Little Lemon - Table Booking Website

Front-End Developer capstone project. A React web app for the Little
Lemon restaurant that lets visitors reserve a table online.

## Features
- Semantic, responsive layout (header, hero, specials, booking form,
  footer) following the Little Lemon UX/UI design (brand colors, Markazi
  style headings).
- Accessible markup: `nav` with `aria-label`, labelled form controls,
  `aria-live` error region, alt texts, skip-to-content link.
- Booking form with validation (required fields, date not in the past,
  1-10 guests) and meaningful error messages.
- Available reservation times generated per date via a seeded API
  (`fetchAPI`), dispatched with `useReducer`; successful submissions
  navigate to a confirmation page.
- Unit tests (Vitest + React Testing Library).

## Setup
```bash
npm install
npm start      # dev server -> http://localhost:5173
npm test       # run the unit tests
```

## Project structure
```
src/
  api.js                    # fetchAPI / submitAPI (seeded random times)
  main.jsx                  # entry point
  App.jsx                   # router: /, /booking, /confirmed
  setupTests.js             # jest-dom matchers for Vitest
  components/
    Header.jsx              # logo + semantic navigation
    Main.jsx                # hero section + specials
    BookingPage.jsx         # useReducer times state + form submit
    BookingForm.jsx         # validated booking form
    ConfirmedBooking.jsx    # confirmation screen
    Footer.jsx              # contact info + copyright
  __tests__/
    Booking.test.js         # unit tests
```

## Rubric mapping
| Criterion | Where |
|---|---|
| UX/UI design | Brand colors (#F4CE14 / #495E57), hero + specials design |
| Accessibility tags | aria-labels, labelled controls, aria-live, alt text |
| Unit tests | `npm test` -> src/__tests__/Booking.test.js |
| Functional form + validation | BookingForm.jsx validation, BookingPage.jsx submit flow |
| Semantics + responsiveness | header/main/section/footer, mobile media queries |
| Clear structure + comments | component-per-file layout, inline comments |
| Edge cases + error messages | past-date guard, 1-10 guests, per-field errors |
| Documentation | this README + setup instructions |
