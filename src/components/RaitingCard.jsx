import {RaitingHeader} from './RaitingHeader';
import {RaitingButtons} from './RaitingButtons';
import {SubmitButton} from './SubmitButton';
import './RaitingCard.css';

export function RaitingCard({setIsSubmited, activeRating, setActiveRating}) {

  function handleSubmit(event) {
    event.preventDefault();

    if (!activeRating) return;

    setIsSubmited(true);
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
          <SubmitButton/>
        </form>
      </article>
    </main>
  );
}