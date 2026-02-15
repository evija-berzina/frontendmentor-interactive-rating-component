import {RaitingHeader} from './RaitingHeader';
import {RaitingButtons} from './RaitingButtons';
import {SubmitButton} from './SubmitButton';
import './RaitingCard.css';

export function RaitingCard({setIsSubmited}) {

  function handleSubmit(event) {
    event.preventDefault();
  }
  
  return (
    <main>
      <article>
        <form className="submit-container" onSubmit={handleSubmit}>
          <RaitingHeader />
          <RaitingButtons />
          <SubmitButton
            setIsSubmited={setIsSubmited}
          />
        </form>
      </article>
    </main>
  );
}