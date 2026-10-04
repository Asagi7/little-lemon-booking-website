import { Link } from 'react-router-dom';
import heroImage from '../images/hero.png';
import greekSalad from '../images/greek-salad.png';
import bruschetta from '../images/bruschetta.png';
import lemonDessert from '../images/lemon-dessert.png';

const specials = [
  {
    name: 'Greek Salad',
    price: 12.99,
    description:
      'Crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with garlic croutons.',
    image: greekSalad,
  },
  {
    name: 'Bruschetta',
    price: 7.99,
    description:
      'Grilled bread smeared with garlic, seasoned with salt and olive oil, topped with marinated tomatoes.',
    image: bruschetta,
  },
  {
    name: 'Lemon Dessert',
    price: 6.99,
    description:
      "Straight from grandma's recipe book, made with authentic seasonal ingredients.",
    image: lemonDessert,
  },
];

/**
 * Landing page: hero section with the restaurant introduction and a
 * call-to-action to the booking form, plus the weekly specials.
 */
export default function Main() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-heading">
        <div>
          <h1 className="hero-title" id="hero-heading">Little Lemon</h1>
          <p className="hero-subtitle">Chicago</p>
          <p className="hero-description">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist. Book a table
            and enjoy the authentic taste of the Mediterranean.
          </p>
          <p>
            <Link to="/booking" className="submit-button" style={{ display: 'inline-block', textDecoration: 'none', marginTop: 16 }}>
              Reserve a Table
            </Link>
          </p>
        </div>
        <img src={heroImage} alt="Selection of Mediterranean dishes served at Little Lemon" className="hero-image" />
      </section>

      <section className="specials" id="specials" aria-labelledby="specials-heading">
        <h2 id="specials-heading">This Week's Specials</h2>
        <div className="specials-grid">
          {specials.map((item) => (
            <article className="special-card" key={item.name}>
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p className="special-price">${item.price.toFixed(2)}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
