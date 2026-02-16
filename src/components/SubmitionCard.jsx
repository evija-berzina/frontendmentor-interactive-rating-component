import SubmiteImage from '../assets/illustration-thank-you.svg';
import './SubmitionCard.css';

export function SubmitionCard({activeRating}) {
  
  return (
    <main>
      <article className="submit-container">
        <img src={SubmiteImage} />
        <p className="submit-choice">
          You selected {activeRating} out of 5
        </p>
        <div className="msg-content">
          <h1 className="submit-heading">
            Thank you!
          </h1>
          <p className="submit-text">
            We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
          </p>
        </div>
      </article>
    </main>
  );
}