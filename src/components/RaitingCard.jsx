import {RaitingHeader} from './RaitingHeader';
import {RaitingButtons} from './RaitingButtons';
import {SubmitButton} from './SubmitButton';


export function RaitingCard() {
  return (
    <main>
      <article className="submit-container">
        <form className="flex" action="submit">
          <RaitingHeader />
          <RaitingButtons />
          <SubmitButton />
        </form>
      </article>
    </main>
  );
}