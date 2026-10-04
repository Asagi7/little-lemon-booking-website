import logo from '../images/logo.png';

/**
 * Site footer with contact details and the Little Lemon logo.
 */
export default function Footer() {
  return (
    <footer className="site-footer">
      <img src={logo} alt="Little Lemon restaurant logo" />
      <div>
        <p><strong>Contact</strong></p>
        <p>123 Mediterranean Ave, Chicago, IL</p>
        <p>(312) 555-0134</p>
        <p>hello@littlelemon.com</p>
      </div>
      <div>
        <p><strong>Opening hours</strong></p>
        <p>Mon - Sun: 12:00 PM - 10:30 PM</p>
      </div>
    </footer>
  );
}
