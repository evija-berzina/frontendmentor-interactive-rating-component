import {RaitingHeader} from './RaitingHeader';
import {RaitingButtons} from './RaitingButtons';
import {SubmitButton} from './SubmitButton';
import './RaitingCard.css';

export function RaitingCard({setIsSubmited, activeRating, setActiveRating}) {

  function handleSubmit(event) {
    event.preventDefault();
  }
  
  return (
    <main>
      <article>
        <form className="rating-card-container" onSubmit={handleSubmit}>
          <RaitingHeader />
          <RaitingButtons
            activeRating={activeRating}
            setActiveRating={setActiveRating}
          />
          <SubmitButton
            setIsSubmited={setIsSubmited}
            activeRating={activeRating}
          />
        </form>
      </article>
    </main>
  );
}