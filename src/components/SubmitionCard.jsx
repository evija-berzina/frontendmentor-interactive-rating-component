import SubmiteImage from '../assets/illustration-thank-you.svg';
import './RaitingCard.css';

export function SubmitionCard() {
  
  return (
    <main>
      <article className="submit-container">
        <img src={SubmiteImage} />
        <p>
          You selected  Add rating here  out of 5
        </p>
        <h1>
          Thank you!
        </h1>
        <p>
          We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
        </p>
      </article>
    </main>
  );
}