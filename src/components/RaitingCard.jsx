import {RaitingHeader} from './RaitingHeader';
import {RaitingButtons} from './RaitingButtons';
import {SubmitButton} from './SubmitButton';
import './RaitingCard.css';

export function RaitingCard() {
  return (
    <main>
      <article>
        <form className="submit-container" action="submit">
          <RaitingHeader />
          <RaitingButtons />
          <SubmitButton />
        </form>
      </article>
    </main>
  );
}